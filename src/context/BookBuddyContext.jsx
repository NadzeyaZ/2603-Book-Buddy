import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllBooks,
  registerUser,
  loginUser,
  getAccountDetails,
} from "../api/bookbuddy";
import { useNavigate } from "react-router";

const BookBuddyContext = createContext();

export default function BookBuddyProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [booksList, setBooksList] = useState([]);
  const [user, setUser] = useState(null);
  const [reservedBooks, setReservedBooks] = useState([]);
  const [authMessage, setAuthMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadBooks() {
      const books = await getAllBooks();
      setBooksList(books);
    }
    loadBooks();
  }, []);

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }
    async function getAccDetails(token) {
      const newUser = await getAccountDetails(token);
      setUser(newUser);
    }
    getAccDetails(token);
  }, [token]);

  async function register(credentials) {
    try {
      const newToken = await registerUser(
        credentials.firstName,
        credentials.lastName,
        credentials.email,
        credentials.password,
      );
      setToken(newToken);
      localStorage.setItem("token", newToken);
    } catch (e) {
      throw e();
    }
  }

  async function login(credentials) {
    try {
      const newToken = await loginUser(credentials.email, credentials.password);
      setToken(newToken);
      localStorage.setItem("token", newToken);
      setAuthMessage(null);
      return true;
    } catch (e) {
      setAuthMessage("Incorrect email or password!" || e.message);
      return false;
    }
  }

  function logout() {
    setToken(null);
    setUser(null);
    setAuthMessage(null);
    localStorage.removeItem("token");
  }

  const values = {
    token,
    setToken,
    booksList,
    setBooksList,
    logout,
    register,
    login,
    user,
    setUser,
    reservedBooks,
    setReservedBooks,
    authMessage,
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
