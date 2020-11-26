exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    res.send(`you typed ${req.body.city}.`)
}

exports.renderAboutPage = (req, res) => {
    res.render("About")
}