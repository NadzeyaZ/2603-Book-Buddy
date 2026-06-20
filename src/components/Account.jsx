import { NavLink } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";

export default function Account() {
  const { user, reservedBooks } = useBookBuddy();
  return (
    <>
      <h1>Welcome, {user?.firstname}!</h1>
      <p>Your email on file with us is {user?.email}</p>
      <h1>Your reservations</h1>
      {reservedBooks.length > 0 ? (
        <>
          <p>Your reservations</p>
        </>
      ) : (
        <p>
          You have not reserved any books yet. Browse{" "}
          <NavLink to="/books">our catalog!</NavLink>
        </p>
      )}
    </>
  );
}

// Welcome, Nadezya!
// Your email on file with us is nad@gmail.com.

// Your reservations
// You have not reserved any books yet. Browse our catalog!
