const express = require("express");
const router = express.Router();
const {homepage} = require("../Controllers/DefaultController");

    router.get("/",homepage);

    module.exports = router;