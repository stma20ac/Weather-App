const express = require('express') 
const router = express.Router()

//setting up routes
router.get("/", (req, res) => {
    res.render("index", {
        title: "Sign up"
    })
})

router.get("/about", (req, res) => {
    res.render("about")
})