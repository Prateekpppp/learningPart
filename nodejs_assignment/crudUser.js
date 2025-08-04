const {mongoose,dbUrl,connectDB} = require('./dbConnection');
const {userSchema} = require('./userSchema');

var data = {
    name:'john doe 1',
    age:28,
    city:'kanpur',
    email:'johndoe@gmail.com',
    phone: 6785675679,
    post:'user1'
}

async function insertData(data) {
    try{
        mongoose.connect(dbUrl+'users',{useNewUrlParser: true, useUnifiedTopology: true});
        const userModel = mongoose.model('users',userSchema);
        console.log('userModel.find()',userModel.countDocuments({}));
        
        data.id = await userModel.find().count() + 1;
        if(isArray(data)){
            await userModel.insertMany(data);
        } else {
            await userModel.insertOne(data);
        }
        console.log('data inserted');
        
    } catch(err){
        console.log('data not inserted',err);
    } finally{
        mongoose.disconnect();
        console.log('Connection Closed in crud');
    }
}


async function updateData(data) {
    try{
        mongoose.connect(dbUrl+'users',{useNewUrlParser: true, useUnifiedTopology: true});
        const userModel = mongoose.model('users',userSchema);
        if(isArray(data)){
            await userModel.updateMany(
                {id:data.id},
                {$set:{
                    name: data.name,
                    age: data.age,
                    city: data.city,
                    email: data.email,
                    phone: data.phone,
                    post: data.post
                }}
            );
        } else {
            await userModel.updateMany(
                {id:data.id},
                {$set:{
                    name: data.name,
                    age: data.age,
                    city: data.city,
                    email: data.email,
                    phone: data.phone,
                    post: data.post
                }}
            );
        }
        console.log('data updated');
        
    } catch(err){
        console.log('data not updated',err);
    } finally{
        mongoose.disconnect();
        console.log('Connection Closed in crud during update');
    }
}

insertData(data)
exports.insertData = insertData;
exports.updateData = updateData;