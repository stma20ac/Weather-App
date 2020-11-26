//import express
const express = require('express')

//initialized express
const app = express()

//setting up routes
app.get("/", (req, res) => {
    res.send("My first express Web page")
})

app.get("/about", (req, res) => {
    res.send("the about page")
})

app.listen(3000, () => {
    console.log("The server is now running on port 3000")
})