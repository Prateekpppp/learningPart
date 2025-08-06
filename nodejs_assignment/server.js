require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

const {insertData,updateData} = require('./crudUser');

app.use(express.json());

// endpoints

app.get('/',(req,res)=>{ 
    res.write('<h1>hii testing</h1>');
    res.end();
    // res.send('Hii John');
});

app.post('/users',(req,res)=>{
    let data = req.body;
    
    insertData(data);
    
    res.end('data inserted');
    
});

app.put('/users/:id',(req,res)=>{
    let data = req.body;
    
    data.id = req.params.id;
    
    updateData(data);
    
    res.end('data updated');
    
});

app.listen(port, ()=>console.log(`Server is running on port ${port}`));