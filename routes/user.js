var express = require("express")
var userRouter = express()

userRouter.use(express.urlencoded({ extended: true }))

userRouter.get("/", (req, res) => {
  res.render("index")
})

module.exports = userRouter
