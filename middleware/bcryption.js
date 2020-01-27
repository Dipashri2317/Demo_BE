const bcrypt = require("bcryptjs");

encryptPass = async password => {
  let hasPass = await bcrypt.hash(password, 10);
  return hasPass;
};

decryptPass = async(password, hash)=>{
    return bcrypt.compare( password,hash);
}


module.exports = { encryptPass ,decryptPass};
