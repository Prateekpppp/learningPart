const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const updateData = async () => {
  const query = `UPDATE students SET age = $1 WHERE name = $2`;
  const values = [100, 'Abdul'];

  try {
    await client.connect();
    await client.query(query, values);
    console.log('Updated');
  } catch (error) {
    console.error('Error updating data', error);
  } finally {
    client.end();
  }
};

updateData();
