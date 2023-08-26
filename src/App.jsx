import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';
import BookListComponent from './components/BookListComponent';
import BookFormComponent from './components/BookFormComponent';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <BookListComponent books={books} onDelete={handleDeleteBook} />
      <BookFormComponent onAddBook={handleAddBook} />
    </div>
  );
};

const Categories = () => (
  <div>
    <h1>Categories Page</h1>
  </div>
);

const App = () => (
  <Router>
    <div className="app">
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
