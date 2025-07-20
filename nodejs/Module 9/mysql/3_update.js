const Client = require("mysql2/promise");

async function updateData () {
    let client = null;
    const query = `UPDATE students SET age = ? WHERE name = ?`;
    const values = [100, 'Abdul'];
    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
        await client.query(query, values)
        console.log('Updated');
    } catch(e) {
        console.error('Error inserting data', error);
    } finally{
        await client.end();
    }
}

updateData()