const express = require("express");
const server = express();

server.get("/ping", (req, res) => {
    return res.json({"ping":"pong"});
});

server.use(express.json())

server.listen(5000, ()=> {
    console.log("Server On");
});

