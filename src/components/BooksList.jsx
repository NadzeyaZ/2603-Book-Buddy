import { useBookBuddy } from "../context/BookBuddyContext";
import BooksListItem from "./BookListItem";

export default function BooksList() {
  const { booksList } = useBookBuddy();
  return (
    <>
      <ul className="books-list">
        {booksList.map((bookItem) => {
          return <BooksListItem bookItem={bookItem} />;
        })}
      </ul>
    </>
  );
}
