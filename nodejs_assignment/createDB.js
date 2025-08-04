const {mongoose, connectDB} = require('./dbConnection');
const {userSchema} = require('./userSchema');

function createCollection(){
    
    const user = new mongoose.model('users',userSchema);
    console.log('collection created');
    
}

connectDB(createCollection);
