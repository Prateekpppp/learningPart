const express = require("express");
const app = express();

app.get("/hello", (request, response) => {
  response.status(200).send("sample response")
})

app.listen(3000, () => console.log(`Server running on port 3000`));

// TODO: Use nodemon and change status codes
