const router = require("express").Router();
let Booklist = require("../models/books.model");

router.route("/").get((req, res) => {
  Booklist.find()
    .then((booklists) => res.json(booklists))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
   
    const bookname = req.body.bookname;

    const newBook = new Booklist({ bookname });

  newBook
    .save()
    .then(() => res.json(" New book added to the booklist!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
