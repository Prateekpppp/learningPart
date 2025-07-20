const Redis = require('ioredis');

async function del(){
    let client = null
    try {
        client = new Redis({"password":"eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81","host":"localhost","port":6379});
        await client.del('name');
        const name = await client.get('name')
        console.log(name); // null       
    } catch(e){
        console.log('Error while connecting');
    } finally{
        client.disconnect();
    }
}
del()

 
