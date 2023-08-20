// routes.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

router.post('/', async (req, res) => {
  const { fullname, contact } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ contact });
    if (existingCustomer) {
        console.log("hello 409")
        return res.status(409).json({ message: "User is already registered with this number." });
      
    }

    const pat = new Customer({ name: fullname, contact: contact });

    await pat.save();
    console.log("Customer saved:", pat);
    res.status(201).json({ message: "Registration successfull" });
  } catch (error) {
    console.log("Error while saving customer:", error);
    res.status(500).json({ message: "Error!!" });
  }
});

module.exports = router;
