// configuration to use .env file
require('dotenv').config();

// setup server
const express = require('express');
const app = express();
const port = process.env.PORT;

console.log('port-----',port);


// path related library 
const path = require('path')

// apply middleware to extract body
app.use(express.json());

// serve static file in public folder
app.use(express.static(path.join(__dirname,'public')))


// endpoints

app.get('getData/:slug',(request,response)=>{
    console.log('response.slug',response.slug);
    
})


app.listen(port, ()=>console.log(`Server is running on port ${port}`));