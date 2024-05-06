var express = require("express")
var userRoutes = require("./routes/user")
var app = express()
var port = 3300

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))
app.use(express.static("views"))
app.set("view engine", "ejs")

app.use("/", userRoutes)

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
