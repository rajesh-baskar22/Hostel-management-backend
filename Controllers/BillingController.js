const Billing = require("../Models/BillingModel");

//create billing data
const createBilling = async (req, res) => {
  const {
    invoiceNumber,
    residentId,
    roomNumber,
    roomFee,
    utilities = 0,
    additionalServices = 0,
    discount = 0,
    lateFee = 0,
    billingDate,
    billingAmount,
    paymentStatus,
    paymentHistory,
  } = req.body;
  
  const newBilling = new Billing({
    invoiceNumber,
    residentId,
    roomNumber,
    roomFee,
    utilities,
    additionalServices,
    discount,
    lateFee,
    billingDate,
    billingAmount,
    paymentStatus,
    paymentHistory:[{
      amountPaid:billingAmount,
      paymentDate:new Date(),
      method:"PayPal"
    }
  ],
  });
  await newBilling.save();
  res.status(201).json({ message: "Successfully created ", newBilling });
};

module.exports = { createBilling };