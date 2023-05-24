import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <header className="w-full pt-5 px-5 lg:p-5 md:p-2 md:flex md:justify-between">
      <Link to="/" className='text-5xl'>Kalen Wiley</Link>
      <Nav />
    </header>
  );
}

export default Header;