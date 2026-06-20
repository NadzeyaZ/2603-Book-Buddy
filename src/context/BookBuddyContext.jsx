import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllBooks,
  registerUser,
  loginUser,
  getAccountDetails,
  getReservations,
  reserveOneBook,
  returnOneBook,
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
    async function getAccDetails() {
      const newUser = await getAccountDetails(token);
      setUser(newUser);
    }
    getAccDetails();
  }, [token]);

  useEffect(() => {
    if (!token) {
      setReservedBooks([]);
      return;
    }
    async function getRes() {
      const reservations = await getReservations(token);
      setReservedBooks(reservations);
    }
    getRes();
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

  async function reserveBook(bookId) {
    await reserveOneBook(bookId, token);
    const reservations = await getReservations(token);
    setReservedBooks(reservations);
  }

  async function returnBook(bookId) {
    await returnOneBook(bookId, token);
    const reservations = await getReservations(token);
    setReservedBooks(reservations);
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
    reserveBook,
    returnBook,
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
