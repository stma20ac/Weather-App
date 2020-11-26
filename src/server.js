//import express
const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("My first express Web page")
})

app.listen(3000)