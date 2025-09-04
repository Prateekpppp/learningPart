const {loadcollction} = require('./connectDB');
const {mongoose} = require('mongoose');


const dbUrl = process.env.DBURL;
// Read Data
async function getData(collection_name,schema){
    let allData = '';
    try{
        const collectionModel = mongoose.model(collection_name,schema);
        await mongoose.connect(dbUrl+collection_name);
        console.log('collectionModel-----',collectionModel);
        allData = await collectionModel.find({fullName: "Eve Grey"}).lean();
    } catch(err){
        console.log('err---',err);
        
    }
    
    // const allData = await collectionModel.find({}).lean();
    return allData;

}

exports.getData = getData;