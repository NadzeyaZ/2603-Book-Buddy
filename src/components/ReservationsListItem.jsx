import { NavLink } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";

export default function ReservationsListItem({ book }) {
  const { returnBook } = useBookBuddy();
  async function handleReturn() {
    await returnBook(book.id);
  }
  return (
    <li className="reservationItem">
      <h3>
        <NavLink to={`/books/${book.bookid}`}>{book.title}</NavLink>
      </h3>
      <p>{book.author}</p>
      <button onClick={handleReturn}>Return book</button>
    </li>
  );
}
