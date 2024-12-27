const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");
const {
    getMaintenanceDetails,
    getResidentRoomDetails, generateInvoice} = require("../Controllers/ResidentController");
    router.get("/maintenance/:residentId", getMaintenanceDetails);
    router.get("/room/:residentId", getResidentRoomDetails);
    router.get("/invoice/:residentId",authMiddleware,generateInvoice)
    module.exports = router;

