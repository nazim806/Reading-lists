const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookname: {
    type: String,
    author: { type: String, required: true },
    description: { type: String, required: true },
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },

  timestamps: true,
});

const Booklist = mongoose.model("Booklist", bookSchema);

module.exports = Booklist;
