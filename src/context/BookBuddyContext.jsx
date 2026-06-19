import { createContext, useContext, useEffect, useState } from "react";
import { getAllBooks } from "../api/bookbuddy";

const BookBuddyContext = createContext();

export default function BookBuddyProvider({ children }) {
  const [token, setToken] = useState("jnsdkj");
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const books = await getAllBooks();
      setBooksList(books);
    }
    loadBooks();
  }, []);

  function logout() {
    setToken(null);
  }

  console.log("books", booksList);

  const values = { token, setToken, booksList, setBooksList, logout };
  return (
    <BookBuddyContext.Provider value={values}>
      {children}
    </BookBuddyContext.Provider>
  );
}

export function useBookBuddy() {
  return useContext(BookBuddyContext);
}
