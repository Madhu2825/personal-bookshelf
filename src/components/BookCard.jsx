import React from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  const { title, author_name, first_publish_year, cover_i } = book;
  const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : 'https://via.placeholder.com/150';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author_name ? author_name.join(', ') : 'Unknown Author'}</p>
      <p>{first_publish_year}</p>
      <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
