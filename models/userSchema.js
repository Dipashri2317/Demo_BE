var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    email :{
        type: String,
        required: true
    },
    password :{
        type : String,
        required: true
    }
})
var User = mongoose.model('User', UserSchema);
exports.User = User;