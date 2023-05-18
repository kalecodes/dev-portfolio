import React from 'react';
import Nav from '../Nav';

function Header() {
  return (
    <header className="w-full p-5 md:flex md:justify-between">
      <h2><a href="/" className="text-2xl">Kalen Wiley</a></h2>
      <Nav></Nav>
    </header>
  );
}

export default Header;