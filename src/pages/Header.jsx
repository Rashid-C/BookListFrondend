import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to="/" className="text-xl font-bold flex flex-auto justify-center align-middle border-r-amber-50 text-black shadow-lg bg-slate-400 text-center">
        BUILD A BOOK LISTING WEB APPLICATION
      </Link>
    </header>
  );
}
