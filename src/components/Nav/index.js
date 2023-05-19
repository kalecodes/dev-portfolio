import React from "react";

function Nav(props) {
  const {
    portfolioSelected,
    setPortfolioSelected
  } = props;

  return (
    <nav className="">
      <ul className="flex justify-center pt-2 md:pt-0">
        <li className={`px-3 text-lg ${portfolioSelected && 'font-bold'}`}>
          <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
        </li>
        <li className="px-3 text-lg">
          Resume
        </li>
      </ul>
    </nav>
  )
}

export default Nav;