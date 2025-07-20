const express = require("express");
const app = express();

app.get("/add", (req, res) => {
    const {num1,num2,num3} = req.query
    const result = parseInt(num1) + parseInt(num2)+ parseInt(num3);
    res.send(String(result));
});


app.listen(5000, () => console.log(`Server running on http://localhost:${5000}`));
