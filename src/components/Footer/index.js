import React from "react";

function Footer() {
  return (
    <footer className="w-screen flex flex-col md:flex-row justify-center items-center bg-sky-950 p-2">
      <div className="md:w-1/3 text-white text-left order-2 md:order-1">
        Designed and developed by kalecodes 2023
      </div>
      <div className="md:w-1/3 order-1 md:order-2">
        <img 
          src={require('../../assets/icons/icons8-up-50.png')}
          alt="up arrow"
          className="mx-auto"
          onClick={() => window.location.replace("/dev-portfolio/#top")}
        />
      </div>
      <div className="md:w-1/3 text-white text-right order-3">
        icons by <a href="https://icons8.com" target="_blank" rel="noreferrer" alt="to icons8 website">Icons8</a>
      </div>
    </footer>
  );
}



export default Footer;