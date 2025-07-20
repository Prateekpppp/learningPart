const express = require("express");
const app = express();
// Middleware to parse JSON request body
app.use(express.json());

// making post request http://localhost:3000/subtraction?num1=20&num2=10

app.get("/addition", (request, response) => {
  let result = Number(request.query.num1) + Number(request.query.num2)
  result = String(result)
  response.send(result)
})

app.post("/subtraction", (request, response) => {
    let result = Number(request.query.num1) - Number(request.query.num2)
    result = String(result)
    response.send(result)
});


app.put("/multiplication", (request, response) => {
    let result = Number(request.query.num1) * Number(request.query.num2)
    result = String(result)
    response.send(result)
});

app.delete("/division", (request, response) => {
    let result = Number(request.query.num1) / Number(request.query.num2)
    result = String(result)
    response.send(result)
});

app.listen(3000, () => console.log(`Server running on port 3000`));


