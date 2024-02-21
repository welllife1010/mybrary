const express = require("express")
const router = express.Router()
const Author = require("../models/author")

// All Authors Route
router.get("/", (req, res) => {
  res.render("authors/index")
})

// New Author Route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() }) // define an author variable and set it as new Author() obj
})

// Create Author Route (only for creation)
router.post("/", (req, res) => {
  const author = new Author({
    name: req.body.name,
  })

  author
    .save()
    .then((newAuthor) => {
      res.render("authors")
    })
    .catch((err) => {
      res.render("authors/new", {
        author: author,
        errMessage: "Error Creating Author...",
      })
    })
})

module.exports = router
