const Redis = require('ioredis');

async function set(){
    let client = null
    try {
        client = new Redis({"password":"eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81","host":"localhost","port":6379});
        await client.set('name', 'vikram');
        await client.set('age', 32);
        await client.set('subjects', "['Math','English','science']");
    } catch(e){
        console.log('Error while connecting');
    } finally{
        client.disconnect();
    }
}
set()


