const express = require("express");
const user = require("./user")
const auth = require('./auth')
const bcrypt = require('bcryptjs');

module.exports= function(app){
app.use(express.json())  //to recognize the incoming Request Object as a JSON Object.
app.use("/api/user", user);
app.use("/api/auth", auth)
}