const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})
//res => resposta, send => método

app.listen(3000)