const express = require("express");
const app = express();

app.get("/hello", (request, response) => {
  response.send("Hi from get request handler")
})

app.post("/hello", (request, response) => {
    response.send("Hi from post request handler")
});


app.put("/hello", (request, response) => {
    response.send("Hi from put request handler")
});

app.delete("/hello", (request, response) => {
    response.send("Hi from delete request handler")
});


app.listen(3000, () => console.log(`Server running on port 3000`));

// TODO: Change the urls and demo
