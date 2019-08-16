var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mongoData');
// mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb');
// mongoose.connect('mongodb://localhost:27017/demoDb');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema = {
    "userEmail": String,
    "userPassword": String
};
// create model if not exists.
module.exports = mongoose.model('userLogin', userSchema);
