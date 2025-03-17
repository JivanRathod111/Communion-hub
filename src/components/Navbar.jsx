import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="p-4 px-10 bg-white text-gray-900 flex justify-between items-center relative z-50" // Added z-50
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Communion <span className="text-teal-500">Hub</span>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="text-2xl md:hidden focus:outline-none text-teal-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:space-x-6">
        <Link to="/" className="text-gray-900 hover:bg-teal-500 px-4 py-2 rounded">
          Home
        </Link>
        <Link to="/events" className="text-gray-900 hover:bg-teal-500 px-4 py-2 rounded">
          Events
        </Link>
        <Link to="/about" className="text-gray-900 hover:bg-teal-500 px-4 py-2 rounded">
          About
        </Link>
      </div>

      {/* Mobile Menu (Fix Applied) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden z-50 border-t border-gray-300"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="block py-3 text-gray-900 hover:bg-teal-500 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="block py-3 text-gray-900 hover:bg-teal-500 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/about"
              className="block py-3 text-gray-900 hover:bg-teal-500 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
