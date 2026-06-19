export default function BooksListItem({ bookItem }) {
  return (
    <li className="book-item">
      <img src={bookItem.coverimage} alt={bookItem.title} />
      <div className="book-data">
        <h3>{bookItem.title}</h3>
        <h5>{bookItem.author}</h5>
        <p>{bookItem.description}</p>
      </div>
    </li>
  );
}
