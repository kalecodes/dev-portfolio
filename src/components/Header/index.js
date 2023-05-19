import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const {
    portfolioSelected,
    setPortfolioSelected
  } = props;
  return (
    <header className="w-full p-5 md:flex md:justify-between">
      <h2><a href="/" className="text-2xl">Kalen Wiley</a></h2>
      <Nav
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
    </header>
  );
}

export default Header;