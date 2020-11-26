//import path module
const path = require("path")

//import express
const express = require('express')

//initialized express
const app = express()

//this will ensure the start
app.use(express.urlencoded({ extended: false }))

//convert or pare incoming json data
app.use(express.json())

//gain acces to everything inside of public /you do not need to declare path to files manually like prevously
app.use(express.static("public"))

//views are the files we render in the webbrowser (we need to install a viewengies)
app.set("views", "views")

//completes our configuration
app.set("view engine", "hbs")


app.listen(3000, () => {
    console.log("The server is now running on port 3000")
})