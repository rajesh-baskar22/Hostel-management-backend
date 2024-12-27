const express = require("express");
const router = express.Router();
const{
    userRegister,
    userLogin,
    userDashboard,
    userAccountUpdate,
    userAccountDetails,
} = require("../Controllers/UserController");

const authMiddleware = require("../Middleware/authMiddleware");

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/userdashboard",authMiddleware,userDashboard);
router.put("/updateaccount/:id",userAccountUpdate);
router.get("/useraccountdetails/:id",userAccountDetails);

module.exports = router;