const {mongoose} = require('mongoose');


// the function return
function loadcollction(collection_name,schema_name){
    
    mongoose.connect(dbUrl+collection_name,{useNewUrlParser: true, useUnifiedTopology: true});

    return mongoose.model(collection_name,schema_name); 
}

exports.loadcollction = loadcollction;