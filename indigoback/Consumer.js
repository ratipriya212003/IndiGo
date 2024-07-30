const mongoose=require('mongoose');
const kafka=require('kafka-node');
const nodemailer=require('nodemailer');
const Passenger=require('./db/Passenger');

const kafkaClient=new kafka.KafkaClient({kafkaHost:'localhost:9092'});

const Consumer=kafka.Consumer;
const consumerDetails=new Consumer(kafkaClient,[{topic:'flight-updates', partition:0}],{autoCommit:true});

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'abcdef@gmail.com',
        pass:'abcdef'  //this is dummy password
    },
});

const DB='mongodb+srv://ratipriya212003:IndiGo212003@flights.2qzjihg.mongodb.net/IndiGo?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log("connected to mongoDB")
}).catch((error)=>{
    console.log("error in connecting to mongoDB",error)
});

consumerDetails.on('message',async(message)=>{
    console.log('Received message from kafka',message);

    try {

const flightUpdate=JSON.parse(message.value);
const {name,delay,gate}=flightUpdate;

    const passengers=await Passenger.find({flightNumber:name});

    passengers.forEach((passenger) => {
        const mailOptions = {
          from: 'ratipriya212003@gmail.com',
          to: passenger.email, 
          subject: 'Flight Update Notification',
          text: `Dear ${passenger.passengerName},\n\n` +
                `Your flight ${name} has a new update:\n` +
                `Status: ${delay}\n` +
                `Gate: ${gate}\n` ,
               
        };

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
});
}
catch(error){
console.log("error in finding data",error);
}
});


consumerDetails.on('error',(err)=>{
    console.log('consumer error',err);
});