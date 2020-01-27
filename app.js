const express = require("express");
const config = require("config");
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express();


//   Cors 
app.use(cors())

//  Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

//   requires
require("./initials/db")();
require("./routes/routes")(app);

// PORT
const port = process.env.PORT || config.get("port")
app.listen(port, (req, res) => {
  console.log("Server is started on port", `${port}`);
});
