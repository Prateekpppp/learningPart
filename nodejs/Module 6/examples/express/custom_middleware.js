const express = require("express");
const app = express();

const middleware = (request, response, next)=>{
  console.log("Hi I am middelware, I will do security check")
  if(request.query.password === "xyz"){
    next()
  } else {
    response.status(401).send("You are not allowed to use the api")
  }

 }

app.use(middleware)

app.get("/hello", (request, response) => {
  response.status(301).send("sample response")
})
app.get("/hello1", (request, response) => {
  response.status(301).send("sample response")
})
app.get("/hello2", (request, response) => {
  response.status(301).send("sample response")
})
app.get("/hello3", (request, response) => {
  response.status(301).send("sample response")
})
app.get("/hello4", (request, response) => {
  response.status(301).send("sample response")
})

app.listen(3000, () => console.log(`Server running on port 3000`));

// TODO: Use nodemon and change status codes
