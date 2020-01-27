const mongoose = require("mongoose");
// const MongoClient = require('mongodb').MongoClient;
const config = require("config");


module.exports = function(){
const db = config.get("dbLink");
mongoose
.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() =>  console.log(`DB connected to ${db}`))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});
}