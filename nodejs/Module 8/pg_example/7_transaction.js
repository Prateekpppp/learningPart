const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const runTransaction = async () => {
  try {
    await client.connect();
    await client.query('BEGIN');

    await client.query(`INSERT INTO students (name, age, email) VALUES ($1, $2, $3)`, 
                      ['Ramya', 25, 'ramya@gmail.com']);

    await client.query(`UPDATE students SET age = $1 WHERE name = $2`, [26, 'Ramya']);

    await client.query('COMMIT');
    console.log('Transaction completed');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Transaction failed', error);
  } finally {
    client.end();
  }
};

runTransaction();
