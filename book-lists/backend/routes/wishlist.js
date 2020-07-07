const router = require("express").Router();
let Wishlist = require("../models/wishlist.model");

router.route("/").get((req, res) => {
  Wishlist.find()
    .then((wishlists) => res.json(wishlists))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const bookname = req.body.bookname;

  const newBook = new Wishlist({ bookname });

  newBook
    .save()
    .then(() => res.json(" New book added to the wishlist!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
