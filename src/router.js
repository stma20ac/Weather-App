const express = require('express') 
const router = express.Router()
const controller = require("./controllers/controller")

//setting up routes
router.get("/", controller.renderHomePage)

router.get("/about", controller.renderAboutPage)

module.exports = router