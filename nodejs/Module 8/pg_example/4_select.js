const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});
const selectData = async () => {
  const query = `SELECT * FROM students`;

  try {
    await client.connect();
    const res = await client.query(query);
    console.log('Students:', res.rows);
  } catch (error) {
    console.error('Error fetching data', error);
  } finally {
    client.end();
  }
};

selectData();
