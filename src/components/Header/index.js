import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const {
    portfolioSelected,
    setPortfolioSelected
  } = props;
  return (
    <header className="w-full pt-5 px-5 lg:p-5 md:p-2 lg:p-5 md:flex md:justify-between">
      <h2><a href="/" className="text-5xl">Kalen Wiley</a></h2>
      <Nav
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
    </header>
  );
}

export default Header;