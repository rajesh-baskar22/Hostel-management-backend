const express = require("express");
const router = express.Router();
const {
    checkoutAndUpdateRevenue,
    getAllPayments,
  } = require("../Controllers/PaymentsControllers");
  const authMiddleware = require("../Middleware/authMiddleware");
  router.post(
    "/checkoutAndUpdateRevenue",
    authMiddleware,
    checkoutAndUpdateRevenue
  );
  router.get("/getAllPayments", authMiddleware, getAllPayments);
  module.exports = router;