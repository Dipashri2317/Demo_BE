const express = require("express");
const router = express.Router();
const { User } = require("../models/userSchema");
const { Authenticate_JWT_Token, generateJWT } = require("../middleware/jwt");
const { decryptPass } = require("../middleware/bcryption");

// LoGIN API
router.post("/login", async (req, res) => {
  let userDetails = req.body;
  let checkEmail = await User.findOne({ email: req.body.email });

  if (!checkEmail) {
    console.log("Invalid Email");
    return res.status(400).json({
      status: 400,
      message: "Invalid Email"
    });
  }

  let checkPass = await decryptPass(userDetails.password, checkEmail.password);
  if (!checkPass) {
    console.log("Invalid Password");
    return res.status(400).json({
      status: 400,
      message: "Invalid Password"
    });
  }
  let token = await generateJWT(userDetails);
  return res.status(200).json({
    status: 200,
    message: "Successfully Log in",
    token: token
  });
});

// MongoDB get user - API
router.get("/getDetails", Authenticate_JWT_Token, async (req, res) => {
  console.log(req.user);
  let details = await User.findOne({ email: req.user.email });
  if (details) {
    console.log(details);
  } else {
    console.log("Invalid User");
  }
});

module.exports = router;
