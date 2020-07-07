const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    bookname: {
      type: String,
      description: { type: String, required: true },
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

const Booklist = mongoose.model("Booklist", bookSchema);

module.exports = Booklist;
