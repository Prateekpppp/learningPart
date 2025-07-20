const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const insertData = async () => {
  // prepared statement
  const query = `INSERT INTO students (name, age, email) VALUES ($1, $2, $3)`;
  const values = ['Abdul', 20, 'abdul@gmail.com'];

  try {
    await client.connect();
    await client.query(query, values);
    console.log('Inserted successfully');
  } catch (error) {
    console.error('Error inserting data', error);
  } finally {
    client.end();
  }
};

insertData();
