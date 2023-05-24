import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  

  return (
    <nav className="">
      <ul className="flex justify-center pt-2 md:pt-0">
        <NavLink to={'/portfolio'} className={`px-3 text-lg`}>
          Portfolio
        </NavLink>
        <NavLink to={'/resume'} className="px-3 text-lg">
          Resume
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav;