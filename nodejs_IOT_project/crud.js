const {userSchema,deviceSchema} = require('schema.js');

// Read Data
async function read(collection_name,schema_name){
    const collectionModel = await loadcollction(collection_name,schema_name);
    const allData = collectionModel.find({});

    return allData;
}