const {mongoose} = require('mongoose');
const {userSchema,deviceSchema} = require('./schema');
const {getData} = require('./crud');



// configuration to use .env file
require('dotenv').config();

// setup server
const express = require('express');
const app = express();
const port = process.env.PORT;


// path related library 
const path = require('path')

// apply middleware to extract body
app.use(express.json());

// serve static file in public folder
app.use(express.static(path.join(__dirname,'public')))



// endpoints

app.get('/getData/:slug',(request,response)=>{
    let slug = request.params.slug;
    let schema = slug.slice(0,slug.length-1)+'Schema';
    
    data = getData(slug , eval(schema));
    
    // response.write(data);
    // mongoose.disconnect();
    response.end('testing data');
    
})


app.listen(port, ()=>console.log(`Server is running on port ${port}`));