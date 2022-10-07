import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/Freelance">Freelance</Link>
      <Link to="/Results">Results</Link>
      <Link to="/Survey">Survey</Link>
    </nav>
  );
}
