import { Link } from 'react-router-dom';
import im from '../../../hea.jpg'

export default function Header() {
  return (
    <header
      className="bg-cover bg-center py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      style={{
        backgroundImage: `url(${im})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Link to="/" className="text-xl font-bold text-white shadow-lg">
        Book App
      </Link>
    </header>
  );
}
