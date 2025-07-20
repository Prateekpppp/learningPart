const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: '123',
  port: 5432,
});

const updateManyStudents = async () => {
  const query = `
    UPDATE students 
    SET age = CASE 
      WHEN name = $1 THEN $2
      WHEN name = $3 THEN $4
      WHEN name = $5 THEN $6
    END
    WHERE name IN ($1, $3, $5)
    RETURNING *;
  `;

  const values = ['Ram', 21, 'Sam', 23, 'Kavya', 22];

  try {
    await client.connect();
    const res = await client.query(query, values);
    console.log('Updated Students:', res.rows);
  } catch (error) {
    console.error('Error updating data', error);
  } finally {
    client.end();
  }
};

updateManyStudents();
