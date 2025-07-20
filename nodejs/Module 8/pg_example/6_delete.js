const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const deleteData = async () => {
  const query = `DELETE FROM students WHERE name = $1`;
  const values = ['Abdul'];

  try {
    await client.connect();
    await client.query(query, values);
    console.log('Deleted');
  } catch (error) {
    console.error('Error deleting data', error);
  } finally {
    client.end();
  }
};

deleteData();
