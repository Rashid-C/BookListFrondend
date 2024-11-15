import { useState } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

const API_URL = "https://booklistingbackend.onrender.com/books";

function App() {
  const [books, setBooks] = useState([]);
  const [showBookForm, setShowBookForm] = useState(false);

  const fetchBooks = () => {
    axios.get(API_URL).then((response) => setBooks(response.data));
  };

  const addBook = (newBook) => {
    axios.post(API_URL, newBook).then((response) => {
      setBooks([...books, response.data]);
      setShowBookForm(false);
    });
  };

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
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setShowBookForm(!showBookForm)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium transition duration-200"
          >
            {showBookForm ? "Close" : "Add Book"}
          </button>
        </div>
        {showBookForm && <BookForm onAddBook={addBook} />}
        <BookList
          books={books}
          onDeleteBook={deleteBook}
          onFetchBooks={fetchBooks}
        />
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
