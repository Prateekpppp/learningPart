const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

// Route to render an EJS template
app.get("/", (req, res) => {
    const data = {
        title: "My First EJS Page",
        message: "Hello, EJS!",
        users: ["Alice", "Bob", "Charlie"]
    };
    res.render("index", data);
});

// Start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
