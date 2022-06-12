const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-Populate');

const MembersSchema = new mongoose.Schema({
    username: {type:String},
    password: {type:String},
    fullname: {type:String},
    gender: {type:String},
    bd: {type:Date},
    isVisible:{type: Boolean, default: true},
    createdAt: {type:Date,  default:Date.now},    
})

const Population = []

const Members = mongoose.model('Members',MembersSchema,'Members');
module.exports = Members;