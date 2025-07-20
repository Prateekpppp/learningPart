const Client = require("mysql2/promise");

const runTransaction = async () => {
    let client = null;
    try {
        client = await Client.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'school',
          });
          await client.beginTransaction();

          await client.query(`INSERT INTO students (name, age, email) VALUES (?, ?, ?)`, 
                            ['Ramya', 25, 'ramya@gmail.com']);
      
          await client.query(`UPDATE students SET age = ? WHERE name = ?`, [26, 'Ramya']);
      
          await client.commit();
          console.log('Transaction completed');
    } catch(e) {
        await client.rollback();
        console.error('Transaction failed', error);
    } finally{
        await client.end();
    }
}

runTransaction()