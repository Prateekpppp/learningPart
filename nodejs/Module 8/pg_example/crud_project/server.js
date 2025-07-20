const express = require("express");
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'school',
});


const app = express();
app.use(express.json());

app.get("/findStudent", async (request, response) => {
  try {
    let studentName = request.query.name
    await client.connect()
    const query = `SELECT * FROM students where name = '${studentName}'`;
    const result = await client.query(query);
    response.status(200).send(result.rows)
  } catch(error){
    response.status(500).send("Something went wrong")
  } finally{
    await client.end();
  }

})

app.post("/insertStudent", async (request, response) => {
    try {
        const name = request.body.name;
        const age = request.body.age;
        const email = request.body.email;
        await client.connect()
        const query = `INSERT INTO students (name, age, email) VALUES ('${name}', ${age}, '${email}')`;
        await client.query(query);
        response.status(200).send("Student doc is created")
    } catch(error){
        response.status(500).send("Something went wrong")
    } finally{
        await client.end(); 
    }

});


app.put("/updateStudentAge", async (request, response) => {
    try {
        const name = request.body.name;
        const age = request.body.age;
        await client.connect()
        const query = `UPDATE students SET age = ${age} WHERE name = '${name}'`;
        await client.query(query);
        response.send("student doc is updated successfully")
    } catch(error){
        response.status(500).send("Something went wrong")
    } finally{
        await client.end();
    }

});

app.delete("/deleteStudent", async (request, response) => {
    try {
        const name = request.body.name;
        await client.connect()
        const query = `DELETE FROM students WHERE name = '${name}'`;
        await client.query(query);
        response.send("Student doc is deleted successfully")
    } catch(error){
        response.status(500).send("Something went wrong")
    } finally{
        await client.end();
    }

});

app.listen(3000, () => console.log(`Server running on port 3000`));


