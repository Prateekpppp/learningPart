const express = require("express");
const app = express();

app.use(express.json());

app.post("/api1", (request, response) => {
  const query_data = request.query.name
})

app.post("/api2/:name", (request, response) => {
    const param_data = request.params.name
});

app.post("/api3", (request, response) => {
    const body_data = request.body.name
});


app.listen(3000, () => console.log(`Server running on port 3000`));

