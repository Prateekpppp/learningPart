const Client = require("mysql2/promise");

const insertManyStudents = async () => {
    let client = null;
    const query = `
    INSERT INTO students (name, age, email) 
    VALUES 
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?);
  `;
  const values = [
    'Ram', 20, 'ram@gmail.com',
    'Sam', 22, 'sam@gmail.com',
    'Kavya', 21, 'kavya@gmail.com'
  ];
    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
        await client.query(query, values)
        console.log('Inserted Students');
    } catch(e) {
        console.error('Error inserting data', error);
    } finally{
        await client.end();
    }
}

insertManyStudents()