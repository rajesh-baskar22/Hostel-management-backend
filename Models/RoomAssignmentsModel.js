const mongoose = require("mongoose");
const assignmentSchema = new mongoose.Schema({
    residentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resident",
        required: true,
    },
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
    },
    checkInDate:{
        type: Date,
        required: true,
    },
    checkOutDate:{
        type: Date,
        required: true,

    },
    utilities: {
        type: Object,
        required: false,
        default:{
            washing: 300,
            electricity:200,
            water:0,
            internet:0,
            maintenance:200,
            cleaning:100,
        }
    },
    status:{
        type: String,
        enum: ["Checked In", "Checked Out", "Reserved"],
        default: "Reserved",
    },
    occupied:{
        type: Number,
        required: true,
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

const RoomAssignment = mongoose.model("RoomAssignment",assignmentSchema);
module.exports = RoomAssignment;