const Client = require("mysql2/promise");

async function deleteData () {
    let client = null;
    const query = `DELETE FROM students WHERE name = ?`;
    const values = ['Abdul'];
    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
        await client.query(query, values)
        console.log('Deleted');
    } catch(e) {
        console.error('Error deleting data', error);
    } finally{
        await client.end();
    }
}

deleteData()