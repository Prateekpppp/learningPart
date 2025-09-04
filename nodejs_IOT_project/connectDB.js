
const {userSchema,deviceSchema} = require('./schema');
const {mongoose} = require('mongoose');
require('dotenv').config();


// the function return
async function loadcollction(collection_name,schema){
    
    return mongoose.model(collection_name,schema); 
}

exports.loadcollction = loadcollction;