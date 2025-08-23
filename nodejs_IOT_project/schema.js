// client library for mongoDB
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // properties in noSQl and column in SQL
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    devices:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'devices',
        default:[]
    }
});

const deviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:String,
    topic:{
        type:String,
        required:true
    }
});


exports.userSchema = userSchema;
exports.deviceSchema = deviceSchema;