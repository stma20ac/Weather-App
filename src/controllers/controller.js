const axios = require("axios")

const API_KEY = "0a4419dff48c24393f06fcf8d586d124"

exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    const city = req.body.city
}

exports.renderAboutPage = (req, res) => {
    res.render("About")
}