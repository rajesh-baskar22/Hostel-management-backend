const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
     role:{
        type: String,
        enum: ["Admin", "Resident","staff"],
        default: "Resident",
    },
    account: {
        firstName: String,
    lastName: String,
    phone: Number,
    address: String,
    emergencyContact: Number,
    CheckInDate: Date,
    CheckOutDate: Date
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    },
     token:{
        type: String,
        
    },
    preferences: {
        type: String,
        default: "no Preferences",
      },

});

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
       return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

const User = mongoose.model("User",userSchema);
module.exports = User;