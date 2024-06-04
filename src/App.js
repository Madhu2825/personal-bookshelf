import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSearchPage from './components/BookSearchPage';
import BookShelfPage from './components/BookShelfPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookSearchPage />} />
          <Route path="/bookshelf" element={<BookShelfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
