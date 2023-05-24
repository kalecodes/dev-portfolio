import React from "react";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="">
      <ul className="flex justify-center pt-2 md:pt-0">
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "font-bold" : ""}><li className="px-3 text-lg">Portfolio</li></NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "font-bold" : ""}><li className="px-3 text-lg">Resume</li></NavLink>
      </ul>
    </nav>
  )
}

export default Nav;