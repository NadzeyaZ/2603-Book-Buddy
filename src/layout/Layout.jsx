import { Outlet, NavLink } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";

export default function Layout() {
  const { token, logout } = useBookBuddy();
  return (
    <>
      <header>
        <nav className="nav-header">
          <div className="nav-header-left">
            <img src="/public/books.png" alt="books" />
            <NavLink to="/">BookBuddy</NavLink>
          </div>
          <div className="nav-header-right">
            <NavLink to="/books">Books</NavLink>
            {token ? (
              <>
                <NavLink to="/account">Account</NavLink>
                <NavLink to="/" onClick={logout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">Log In</NavLink>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
