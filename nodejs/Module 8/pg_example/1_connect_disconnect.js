const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'school',
});

async function connectDb() {
    try {
        await client.connect()
        console.log("connected successfully")
    } catch(e){
        console.log("connection failed")
    } finally {
        await client.end();
    }

}

connectDb()

