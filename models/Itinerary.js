const mongoose = require("mongoose");
const itinerarySchema= new mongoose.Schema({
    itineraryName: {type: String, required: true},
    userName: {type: String, required: true },
    userPicName: {type: String, required: true},
    likes: {type:Number, default:0},
    duration: {type:Number, required: true},
    price: {type:Number,required: true},
    hashtag: {type:[String], required: true},
    idCity: {type: mongoose.Schema.ObjectId , ref: "city"}
})

const Itinerary= mongoose.model("itinerary",itinerarySchema);

module.exports= Itinerary;