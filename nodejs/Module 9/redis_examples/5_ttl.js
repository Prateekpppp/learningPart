const Redis = require('ioredis');

async function del(){
    let client = null
    try {
        client = new Redis({"password":"eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81","host":"localhost","port":6379});
        await client.set('jwt_token', 'askhdlksjdlsjdlajsdljad');
        await client.expire('jwt_token', 15); // Expires in 10 seconds     
    } catch(e){
        console.log('Error while connecting');
    } finally{
        client.disconnect();
    }
}
del()

 


