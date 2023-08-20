// adminlogin.js
const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.post('/login', async (req, res) => {
  console.log("hello admin");
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const existingAdmin = await Admin.findOne({ userId: username });

    if (existingAdmin) {
      // Check if the password matches
      if (existingAdmin.password === password) {
        console.log("Admin exists and login successful");
        return res.status(200).json({ message: "Login Successful" });
      } else {
        console.log("Invalid password");
        return res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      console.log("Admin not found");
      return res.status(404).json({ message: "username is incorrect" });
    }
  } catch (error) {
    console.log("Error while admin login", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
