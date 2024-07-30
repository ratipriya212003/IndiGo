const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

const DB =
  "mongodb+srv://ratipriya212003:IndiGo212003@flights.2qzjihg.mongodb.net/IndiGo?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log("error in connecting to mongoDB", error);
  });

const Flight = require("./db/Flights");
const Passenger = require("./db/Passenger");
const User=require('./db/Users');

app.get("/", (req, res) => {
  res.send("Express app is running");
});

console.log("hello");

//login 
app.post("/login",async(req,res)=>{
  console.log(req.body)
  if(req.body.email && req.body.password){
    let user = await User.findOne(req.body);
    if(user){
        res.send(user);
    }
    else{
        res.send("no user found");
    }
  }
  else{
    res.send("password needed");
  }
})

//signup
app.post("/signup",async(req,res)=>{
  try {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user);
    let result = await user.save();
    result = result.toObject();
    delete result.password;

    res.json({
      success: true,
      message: "User registered successfully",
      user: result,
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({
      success: false,
      message: "Signup failed. Please try again.",
    });
  }
})

//to get the details of the flight
app.get("/api/IndiGo/flights", async (req, res) => {
  try {
    const flightDetails = await Flight.find();
    res.status(200).json(flightDetails);
  } catch (error) {
    console.error("error in fetching data", error);
  }
});

//searching for a particular flight
app.get("/api/IndiGo/flights/:flightName", async (req, res) => {
  const { flightName } = req.params;
  try {
    const flight = await Flight.findOne({ name: flightName });
    res.status(200).json(flight);
  } catch (error) {
    console.log("error in fetching data", error);
  }
});

//flight list for admin page
app.get("/flightlist", async (req, res) => {
  const flight = await Flight.find();
  if (flight.length > 0) {
    res.status(200).send(flight);
  } else {
    res.send(console.log("no flights found"));
  }
});

//to fetch single flight for update of admin page
app.get("/flightlist/:id", async (req, res) => {
  const result = await Flight.findOne({ _id: req.params.id });
  if (result) {
    res.status(200).send(result);
  } else {
    res.send({ result: "No Record found" });
  }
});

//to update the flight detail
app.put("/flightlist/:id", async (req, res) => {
  let result = await Flight.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  )
  res.status(200).send(result);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port" + port);
  } else {
    console.log("error" + error);
  }
});
