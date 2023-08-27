import { useState } from 'react';
import { BookFormComponent, BookListComponent } from '../components';

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

export default Home;
