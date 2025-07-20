const express = require("express");
const app = express();

app.get("/hello", (request, response) => {
    response.send("This value is string")
  })
app.post("/hello", (request, response) => {
      response.json({
          "name": "vikram",
          "eduction": "mtech"
      })
  });
app.put("/hello", (request, response) => {
      response.send(["vikram","maiya","apple", 22,true])
  });
app.delete("/hello", (request, response) => {
      response.send("22")
  });


app.listen(3000, () => console.log(`Server running on port 3000`));
