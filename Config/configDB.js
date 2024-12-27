const mongoose = require("mongoose");
require("dotenv").config();


const connectMongoDB =() =>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    }catch(error){
        console.log(error.message);
    }
};


module.exports = connectMongoDB;