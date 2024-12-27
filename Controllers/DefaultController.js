const express = require("express");

const homepage =(req,res) =>{
    res.send("Welcome to Homepage");
}

module.exports ={
    homepage
}