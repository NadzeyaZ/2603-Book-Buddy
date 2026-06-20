import { useBookBuddy } from "../context/BookBuddyContext";
import BooksListItem from "./BookListItem";
import { useState } from "react";

export default function BooksList() {
  const { booksList } = useBookBuddy();
  const [searchTerm, setSerachTerm] = useState("");

  const filteredBooks = booksList.filter((book) => {
    const searchText = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchText) ||
      book.description.toLowerCase().includes(searchText)
    );
  });
  return (
    <>
      <h1>Catalog</h1>
      <>
        <form className="searchBar">
          <label>
            <input
              type="search"
              name="search"
              placeholder="book title or description"
              onChange={(event) => setSerachTerm(event.target.value)}
            />
          </label>
          <button>Search</button>
        </form>
      </>
      {filteredBooks.length > 0 ? (
        <ul className="books-list">
          {filteredBooks.map((bookItem) => {
            return <BooksListItem bookItem={bookItem} key={bookItem.id} />;
          })}
        </ul>
      ) : (
        <p>No books match</p>
      )}
    </>
  );
}
