import { Outlet, NavLink } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";

export default function Layout() {
  const { token } = useBookBuddy();
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">BookBuddy</NavLink>
          <NavLink to="/books">Books</NavLink>
          {token ? (
            <NavLink to="/account">Account</NavLink>
          ) : (
            <NavLink to="/login">Log In</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
