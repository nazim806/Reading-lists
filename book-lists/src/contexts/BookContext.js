import React, { createContext, useState } from "react";
import uniqid from "uniqid";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "All The King's Men",
      author: "Robert Penn Warren",
    },
    {
      id: 2,
      title: "On The Road",
      author: "Jack Kerouac",
    },

    {
      id: 3,
      title: "Moby Dick",
      author: "Herman Melville",
    },
    {
      id: 4,
      title: "White Fang",
      author: "Jack London",
    },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: uniqid() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
