exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    console.log(req)
    res.send("Your form has been sumbitted")
}

exports.renderAboutPage = (req, res) => {
    res.render("About")
}