
const router = require ('express').Router();
let Wishlist = require ('../models/wishlist.model');

router.route('/').get((req, res) => {
      Wishlist.find()
              .then(wishlists => res.json(wishlists))
              .catch(err => res.status(400).json('Error: ' + err));
});