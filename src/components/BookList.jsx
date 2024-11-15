import { useState, useEffect } from "react";

const BOOKS_PER_PAGE = 8;

export default function BookList({ books, onDeleteBook, onFetchBooks }) {
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div className="mb-8 mx-5 bg-gradient-to-b from-blue-900 to-gray-900 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">
        Book List
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentBooks.map((book) => (
          <div
            key={book._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={
                book.image ||
                "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid"
              }
              alt="Book cover"
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop in case fallback image is also broken
                e.target.src =
                  "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?semt=ais_hybrid"; // Default image
              }}
              className="w-full h-40 object-cover mb-4 rounded"
            />

            <h3 className="text-lg font-bold text-white mb-2">{book.title}</h3>
            <p className="text-gray-400 mb-2">Author: {book.author}</p>
            <p className="text-gray-500 text-sm mb-4">{book.description}</p>
            <button
              onClick={() => onDeleteBook(book._id)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
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
    </div>
  );
}
