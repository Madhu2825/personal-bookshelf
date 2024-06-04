/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    alert(`${book.title} has been added to your bookshelf!`);
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input 
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => navigate('/bookshelf')}>My Bookshelf</button>
      <div>
        {books.map(book => (
          <BookCard key={book.key} book={book} onAddToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    alert(`${book.title} has been added to your bookshelf!`);
  };

  return (
    <div>
      <h1>Search Book By Name</h1>
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => navigate('/bookshelf')}>My Bookshelf</button>
      </div>
      <div>
        {books.map(book => (
          <BookCard key={book.key} book={book} onAddToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
