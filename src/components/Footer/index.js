import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center bg-sky-950 p-2">
      <div className="w-1/3 text-white text-left">
        Designed and developed by kalecodes 2023
      </div>
      <div className="w-1/3">
        <img 
          src={require('../../assets/icons/icons8-up-50.png')}
          alt="up arrow"
          className="mx-auto"
        />
      </div>
      <div className="w-1/3 text-white text-right">
        icons by <a href="https://icons8.com" target="_blank" rel="noreferrer" alt="to icons8 website">Icons8</a>
      </div>
    </footer>
  );
}



export default Footer;