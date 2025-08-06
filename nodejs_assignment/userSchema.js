const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id : Number,
    name : {
        type:String,
        minlength:3,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        unique: true,
        required:true
    },
    post : {
        type: String,
        required: true
    }
});

exports.userSchema=userSchema;
