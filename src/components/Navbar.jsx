import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-8 shadow-2xl w-full fixed top-0 left-0">
      <div className="mx-auto flex justify-between items-center px-4 w-full">
        {/* Logo / Title */}
        <Link to="/" className="text-white text-4xl font-bold shadow-xl">
          Vlntr Match
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:underline text-white">Home</Link>
          <Link to="/about" className="hover:underline text-white">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
