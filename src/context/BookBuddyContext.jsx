import { createContext, useContext, useEffect, useState } from "react";
import { getAllBooks, registerUser } from "../api/bookbuddy";

const BookBuddyContext = createContext();

export default function BookBuddyProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [booksList, setBooksList] = useState([]);
  const [user, setUser] = useState(null);
  const [reservedBooks, setReservedBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const books = await getAllBooks();
      setBooksList(books);
    }
    loadBooks();
  }, []);

  async function register(credentials) {
    try {
      setUser(credentials);
      const newToken = registerUser(
        credentials.firstName,
        credentials.lastName,
        credentials.email,
        credentials.password,
      );
      setToken(newToken);
      localStorage.setItem("token", newToken);
    } catch (e) {
      throw new e();
    }
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  }

  const values = {
    token,
    setToken,
    booksList,
    setBooksList,
    logout,
    register,
    user,
    setUser,
    reservedBooks,
    setReservedBooks,
  };
  return (
    <BookBuddyContext.Provider value={values}>
      {children}
    </BookBuddyContext.Provider>
  );
}

export function useBookBuddy() {
  return useContext(BookBuddyContext);
}
