const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = new Schema({
  bookname: {
    type: String,
    author: { type: String, required: true },
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },

  timestamps: true,
});

const Wishlist = mongoose.model("Wishlist", wishSchema);

module.exports = Wishlist;
