const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const insertManyStudents = async () => {
  const query = `
    INSERT INTO students (name, age, email) 
    VALUES 
    ($1, $2, $3),
    ($4, $5, $6),
    ($7, $8, $9);
  `;
  const values = [
    'Ram', 20, 'ram@gmail.com',
    'Sam', 22, 'sam@gmail.com',
    'Kavya', 21, 'kavya@gmail.com'
  ];

  try {
    await client.connect();
    await client.query(query, values);
    console.log('Inserted Students');
  } catch (error) {
    console.error('Error inserting data', error);
  } finally {
    client.end();
  }
};

insertManyStudents();
