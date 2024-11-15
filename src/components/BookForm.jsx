import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a book title.");
      return;
    }

    if (!author.trim()) {
      alert("Please enter the author's name.");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a book description.");
      return;
    }

    onAddBook({ title, author, description });
    setTitle("");
    setAuthor("");
    setDescription("");
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-2xl shadow-lg mb-8 max-w-3xl mx-auto sm:px-8 lg:px-12 text-white border border-indigo-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Add a New Book</h2>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="author" className="block font-medium mb-2">
            Author
          </label>
          <input
            id="author"
            type="text"
            className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter book description"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg"
        >
          Add Book
        </button>
      </form>

      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-lg shadow-md transition-all duration-300 max-w-xs text-center z-50">
          New book added successfully!
        </div>
      )}
    </div>
  );
}
