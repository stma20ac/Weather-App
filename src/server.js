//import path module
const path = require("path")
//import express
const express = require('express')
//initialized express
const app = express()


//setting up routes
/*
app.get("/", (req, res) => {
    res.send("My first express Web page")
})
*/

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "../public/")
    })
})

app.get("/about", (req, res) => {
    res.sendFile("about.html", {
        root: path.join(__dirname, "../public/")
    })
})



/*
app.get("/about", (req, res) => {
    res.send("the about page")
})
*/

app.listen(3000, () => {
    console.log("The server is now running on port 3000")
})