const Redis = require('ioredis');

async function get(){
    let client = null
    try {
        client = new Redis({"password":"eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81","host":"127.0.0.1","port":6379});
        const name = await client.get('name');
        const age = await client.get('age');
        const subjects = await client.get('subjects');
        console.log(name,age,subjects);
    } catch(e){
        console.log('Error while connecting');
    } finally{
        client.disconnect();
    }
}
get()

 
