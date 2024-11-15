import { useState, useEffect } from "react";

const BOOKS_PER_PAGE = 8;

export default function BookList({ books, onDeleteBook, onFetchBooks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  useEffect(() => {
    onFetchBooks();
  }, [onFetchBooks]);

  const indexOfLastBook = currentPage * BOOKS_PER_PAGE;
  const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleDeleteBook = (bookId) => {
    onDeleteBook(bookId);
    setShowDeleteMessage(true);
    setTimeout(() => {
      setShowDeleteMessage(false);
    }, 2000);
  };

  return (
    <div className="mb-8 mx-5 bg-gradient-to-b from-blue-900 to-gray-900 p-8 rounded-lg shadow-3xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">
        Book List
      </h2>
      {showDeleteMessage && (
        <div className="bg-green-500 text-white p-4 rounded mb-4">
          Book deleted.
        </div>
      )}

      {currentBooks.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentBooks.map((book) => (
            <div
              key={book._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-600 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={
                  book.image ||
                  "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid"
                }
                alt="Book cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid";
                }}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold text-white mb-2">{book.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300 mt-8">No books are listed.</p>
      )}

      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-2 px-4 py-2 rounded transition-colors duration-300 ease-in-out ${
                page === currentPage
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {selectedBook && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedBook(null)}
        >
          <div className="bg-gray-800 p-8 rounded-lg shadow-3xl max-w-3xl">
            <img
              src={
                selectedBook.image ||
                "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid"
              }
              alt="Book cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid";
              }}
              className="w-full h-80 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedBook.title}
            </h2>
            <p className="text-gray-400 mb-2">Author: {selectedBook.author}</p>
            <p className="text-gray-500 mb-4">{selectedBook.description}</p>
            <button
              onClick={() => handleDeleteBook(selectedBook._id)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg w-full max-w-xs"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
