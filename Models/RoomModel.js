const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
    roomNumber:{
        type: String,
        required: true,
        unique: true,
    },
    roomType:{
        type: String,
        required: true,
    },
    roomfees:{
        type: Number,
        required: true,
    },
    roomStatus:{
        type: String,
        enum: ["Available", "Occupied"],
        default: "Available",
    },
    capacity:{
        type: Number,
        required: true,
    },
    features:{
    
        type: Object, default:{AC:false,WIFI: true}
    },
   
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    },
});
const Room = mongoose.model("Room",roomSchema);
module.exports = Room;