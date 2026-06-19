import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import BooksList from "./components/BooksList";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksList />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/books" element={<BooksList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}
