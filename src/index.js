const express = require("express");
const { roteador } = require("./rotas");

const app = express();
app.get("/", function(req, res){
    res.send("Hiiiii");
}



