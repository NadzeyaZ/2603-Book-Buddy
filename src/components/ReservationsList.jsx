import { useBookBuddy } from "../context/BookBuddyContext";
import ReservationsListItem from "../components/ReservationsListItem";

export default function ReservationsList() {
  const { reservedBooks } = useBookBuddy();

  return (
    <ul className="reservationsList">
      {reservedBooks.map((book) => {
        return <ReservationsListItem key={book.id} book={book} />;
      })}
    </ul>
  );
}
