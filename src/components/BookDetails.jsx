import { useParams } from "react-router";
import { useBookBuddy } from "../context/BookBuddyContext";

export default function BookDetails() {
  const { booksList } = useBookBuddy();
  const { bookid } = useParams();
  const selectedBook = booksList.find((book) => book.id === Number(bookid));
  console.log("selectedBook", selectedBook);
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
        <button>Reserve a book</button>
      </div>
    </div>
  );
}
