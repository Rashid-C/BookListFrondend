import { useState } from 'react';

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!title.trim()) {
      alert('Please enter a book title.');
      return;
    }

    if (!author.trim()) {
      alert('Please enter the author\'s name.');
      return;
    }

    if (!description.trim()) {
      alert('Please enter a book description.');
      return;
    }

    onAddBook({ title, author, description });
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl mx-auto sm:px-8 lg:px-12"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add a New Book
      </h2>
      <div className="mb-6 sm:mb-8">
        <label htmlFor="title" className="block text-gray-900 font-medium mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          required
        />
      </div>
      <div className="mb-6 sm:mb-8">
        <label htmlFor="author" className="block text-gray-900 font-medium mb-2">
          Author
        </label>
        <input
          id="author"
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author's name"
          required
        />
      </div>
      <div className="mb-6 sm:mb-8">
        <label htmlFor="description" className="block text-gray-900 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter book description"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
      >
        Add Book
      </button>
    </form>
  );
}