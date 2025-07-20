const mysql = require("mysql2/promise");

async function connectDB () {
    let connection = null;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'mydb',
          });
    } catch(e) {
        console.log("Error while connecting to db server")
    } finally{
        await connection.end();
    }
}

connectDB()