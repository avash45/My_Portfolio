const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, '/views')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile("views/index.html")

});

app.listen("3000", function () {
    console.log("Hey iM listening: 3000")
});