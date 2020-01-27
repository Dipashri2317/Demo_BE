const express = require("express");
const router = express.Router();         //  A router is valid middleware.
const { User } = require("../models/userSchema");
const { encryptPass } = require("../middleware/bcryption");



// API - Register User 
router.post("/register", async (req, res) => {
  let userDetails = req.body;
  let hashPassword = await encryptPass(userDetails.reg_password);

  console.log(userDetails);
  let data = new User({
    email: userDetails.reg_email,
    password: hashPassword
  });

  let save = data.save();
  if (save) {
    return res.status(200).json({
      status: 200,
      message: "Successfully Registered"
    });
  } else {
    return res.status(500).json({
      status: 500,
      message: "OOps..! Somthing went Wrong"
    });
  }
});

module.exports = router;
