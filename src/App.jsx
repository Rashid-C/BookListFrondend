import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

import { BrowserRouter } from "react-router-dom";

const API_URL = "https://booklistingbackend.onrender.com/books";
function App() {
  const [books, setBooks] = useState([]);

  // Fetch books
  useEffect(() => {
    axios.get(API_URL).then((response) => setBooks(response.data));
  }, []);

  // Add book
  const addBook = (newBook) => {
    axios.post(API_URL, newBook).then((response) => {
      setBooks([...books, response.data]);
    });
  };

  // Delete book
  const deleteBook = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setBooks(books.filter((book) => book._id !== id));
    });
  };
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <BookForm onAddBook={addBook} />
          <BookList books={books} onDeleteBook={deleteBook} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
