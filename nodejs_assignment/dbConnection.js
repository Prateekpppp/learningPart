const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://prateekpppp4:prateek4@cluster0.lokolyb.mongodb.net/';

async function connectDB(dbUrl,action=null,data=null){
    try {
        await mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connection Established');
        if(action!=null){
            if(data!=null) {
                action(data);
            }
            else{
                action();
            }
        }
    } catch(err) {
        console.log('Connection Failed', err);
    } finally {
        await mongoose.disconnect();
        console.log('Connection Closed');
    }
} 

exports.dbUrl = dbUrl;
exports.mongoose = mongoose;
exports.connectDB = connectDB;