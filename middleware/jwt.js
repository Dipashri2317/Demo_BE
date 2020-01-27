const jwt = require("jsonwebtoken");
const config = require("config");

generateJWT = async data => {
  let token = await jwt.sign(data, config.get("jwtKey"));
  return token;
};

Authenticate_JWT_Token = async (req, res, next) => {
  const token = req.headers["jwt-token"];
  //  console.log(token);
  if (!token) {
    console.log("Access denied. No token provided !");
    return res.json({
      status: 404,
      message: "Access denied. No token provided !"
    });
  }
  try {
    const decoded = await jwt.verify(token, config.get("jwtKey"));

    req.user = decoded;
    next();
  } catch (ex) {
    res.json({ status: 401, message: "Invalid token !" });
  }
};

module.exports = { Authenticate_JWT_Token, generateJWT };
