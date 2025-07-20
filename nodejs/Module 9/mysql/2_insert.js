const Client = require("mysql2/promise");

async function insertData () {
    let client = null;
    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
        const query = "INSERT INTO students (name, age, email) VALUES (?, ?, ?)";
        const values = ['Abdul', 20, 'abdul@gmail.com']
        await client.query(query, values)
        console.log('Inserted successfully');
    } catch(e) {
        console.error('Error inserting data', error);
    } finally{
        await client.end();
    }
}

insertData()