const kafka=require('kafka-node');
const mongoose=require('mongoose');
const Flight=require("./db/Flights");

const Producer=kafka.Producer;
const kafkaClient=new kafka.KafkaClient({kafkaHost:'localhost:9092'});
const producerDetails=new Producer(kafkaClient);

mongoose.connect('mongodb+srv://ratipriya212003:IndiGo212003@flights.2qzjihg.mongodb.net/IndiGo?retryWrites=true&w=majority');

producerDetails.on('ready',async()=>{
    console.log("producer is ready");

const changeStream=Flight.watch();

changeStream.on('change',(change)=>{
    if(change.operationType === 'update' || change.operationType === 'insert'){
    const updatedFlight=change.fullDocument;
    const message={
        name:updatedFlight.name,
        delay:updatedFlight.delay,
        delayTime:updatedFlight.delayTime,
        gate:updatedFlight.gate,
    };
    const payloads = [{ topic: 'flight-updates', messages: JSON.stringify(message) }];

    producerDetails.send(payloads,(err,data)=>{
        if(err) console.error('error in sending message',err);
        else console.log('flight update sent',data);
    });
}
else{
    console.log('Operation type not handled:', change.operationType);
}
});
});
producerDetails.on('error', (err) => {
    console.error('Error with producer', err);
  });