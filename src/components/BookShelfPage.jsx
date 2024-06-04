import React, { useEffect, useState } from 'react';

const BookShelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div>
        {bookshelf.length > 0 ? (
          bookshelf.map((book, index) => (
            <div key={index} className="book-card">
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
              <p>{book.first_publish_year}</p>
            </div>
          ))
        ) : (
          <p>Your bookshelf is empty. Add some books!</p>
        )}
      </div>
    </div>
  );
};

export default BookShelfPage;
