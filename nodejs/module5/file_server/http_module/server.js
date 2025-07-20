const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    
    const absolutePath = path.join(__dirname, "public" , req.url);

    fs.readFile(absolutePath, (err, content) => {
        if(err){
            if(err.code === "EISDIR" || err.code == "ENOENT"){
                res.writeHead(404);
                res.end("Not found");
                return
            }
            res.writeHead(500);
            res.end("Internel server error");
            return
        }
            res.writeHead(200); // head
            res.end(content, "utf8"); //body
    });
});

server.listen(5000, () => console.log("Server running on port 5000"));
