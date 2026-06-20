import { NavLink } from "react-router";
export default function BooksListItem({ bookItem }) {
  return (
    <li className="book-item">
      <img
        src={bookItem.coverimage}
        alt={bookItem.title}
        className="book-cover"
      />
      <div className="book-data">
        <h1>
          <NavLink to={`/books/${bookItem.id}`}>{bookItem.title}</NavLink>
        </h1>
        <h3>{bookItem.author}</h3>
        <p>{bookItem.description}</p>
      </div>
    </li>
  );
}
