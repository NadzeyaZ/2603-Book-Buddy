import { useParams } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";
import { reserveOneBook } from "../api/bookbuddy";

export default function BookDetails() {
  const { booksList, reservedBooks, setReservedBooks, token, reserveBook } =
    useBookBuddy();
  const { bookid } = useParams();
  const selectedBook = booksList.find((book) => book.id === Number(bookid));
  async function handleReserve() {
    await reserveBook(Number(bookid));
  }

  const isReserved = reservedBooks.some(
    (book) => book.bookid === selectedBook.id,
  );
  return (
    <div className="book-details">
      <img
        src={selectedBook?.coverimage}
        alt={selectedBook?.title}
        className="book-details-image"
      />
      <div className="book-details-info">
        <h1>{selectedBook?.title}</h1>
        <p>{selectedBook?.author}</p>
        <p>{selectedBook?.description}</p>
        {token &&
          (!isReserved ? (
            <button onClick={handleReserve}>Reserve a book</button>
          ) : (
            <button disabled>Book already reserved</button>
          ))}
      </div>
    </div>
  );
}
