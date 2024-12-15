import { Link } from 'react-router-dom';

export default function SideNav() {

  return (
    <div className="bg-secondary text-text w-48 shadow-lg">
      <div className="p-6 text-2xl font-bold text-center border-b">
        My App
      </div>

      <nav className="mt-4">
        <Link
          to="/"
          className="block py-2 px-4 hover:bg-gray-700 transition"
        >
          Home
        </Link>
        <Link
          to="/settings"
          className="block py-2 px-4 hover:bg-gray-700 transition"
        >
          Settings
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 hover:bg-gray-700 transition"
        >
          About
        </Link>
      </nav>
    </div>
  );
};
