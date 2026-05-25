import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">CampusWallet</Link>

        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "="}
        </button>

        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/expenses" className="text-white hover:underline">Expenses</Link>
          <Link to="/about" className="text-white hover:underline">About</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-2">
          <Link to="/" className="text-white" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/expenses" className="text-white" onClick={() => setMenuOpen(false)}>Expenses</Link>
          <Link to="/about" className="text-white" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
