const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INT CHECK (age > 0),
      email VARCHAR(100) UNIQUE
    );
  `;
  
  try {
    await client.connect();
    await client.query(query);
    console.log('Table created successfully');

  } catch (error) {
    console.error('Error creating table', error);
  } finally {
    client.end();
  }
};

createTable();
