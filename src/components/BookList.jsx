export default function BookList({ books, onDeleteBook }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Book List</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
            <p className="text-gray-700 mb-2">Author: {book.author}</p>
            <p className="text-gray-600 text-sm">{book.description}</p>
            <button
              onClick={() => onDeleteBook(book._id)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
