const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = new Schema(
  {
    bookname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    author: String,
    required: true,
    trim: true,
  },
  {
    timestamps: true,
  }
);

const Wishlist = mongoose.model("Wishlist", wishSchema);

module.exports = Wishlist;
