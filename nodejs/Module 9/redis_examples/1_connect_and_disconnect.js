const Redis = require('ioredis');

async function connectCache(){
    let client = null
    try {
        client = new Redis({"password":"eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81","host":"localhost","port":6379});
        console.log('Connected to Redis');
    } catch(e){
        console.log('Error while connecting');
    } finally{
        client.disconnect();
    }
}

connectCache()