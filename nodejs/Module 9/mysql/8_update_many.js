const Client = require("mysql2/promise");

const updateManyStudents = async () => {
    let client = null;

    const query = `
        UPDATE students 
        SET age = CASE 
            WHEN name = ? THEN ?
            WHEN name = ? THEN ?
            WHEN name = ? THEN ?
        END
        WHERE name IN (?, ?, ?);
        `;

    const values = ['Ram', 100, 'Sam', 200, 'Kavya', 300, 'Ram', 'Sam', 'Kavya'];

    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
        await client.query(query, values)
        console.log('Updated Students:');
    } catch(e) {
        console.error('Error updating data', e);
    } finally{
        await client.end();
    }
}

updateManyStudents()