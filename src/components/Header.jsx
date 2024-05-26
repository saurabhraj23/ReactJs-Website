import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <h1>TechStar</h1>
      <main>
        <HashLink to="/#home">Home</HashLink>
        <Link to="/contacts">Contacts</Link>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#brands">Brands</HashLink>
        <Link to="/services">Services</Link>
      </main>
    </nav>
  );
}

export default Header;
