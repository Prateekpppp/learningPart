const Client = require("mysql2/promise");

const selectData = async () => {
    let client = null;
    const query = `SELECT * FROM students`;
    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
        const res = await client.query(query)
        console.log('Students:', res[0]);
    } catch(e) {
        console.error('Error fetching data', error);
    } finally{
        await client.end();
    }
}

selectData()