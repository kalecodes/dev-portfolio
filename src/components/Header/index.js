import React from 'react';

function Header() {
  
  return (
    <header id="top" className="flex justify-center bg-sky-950">
      <section className="flex flex-col justify-between w-screen md:w-4/5 h-screen">
        <div className="">
          <ul className="pt-5 md:pt-0 flex justify-around md:justify-end">
            <li className="p-3 text-xl" onClick={() => window.location.replace("/#skills")}>Skills</li>
            <li className="p-3 text-xl" onClick={() => window.location.replace("/#projects")}>Projects</li>
            <li className="p-3 text-xl" onClick={() => window.location.replace("/#resume")}>Resume</li>
          </ul>
        </div>
        <div className="h-1/6 md:h-2/6 relative flex justify-center md:flex-none">
          <div className="absolute bottom-5">
            <div className="text-6xl md:text-8xl md:text-left">
              Kalen Wiley
            </div>
            <div className="text-2xl md:text-4xl md:text-left">
              Full-Stack Web Developer
            </div>
          </div>
        </div>
        <div className="md:flex-1 flex">
          <div className="w-1/2 hidden md:block"></div>
          <div className="md:w-1/2 flex flex-col px-3">
            <p className="text-xl md:text-left">Hi! I'm Kalen, a full-stack web developer currently located in Richmond, VA. I am passionate about learning new technologies and expanding my skillset.</p>
            <p className="text-xl md:text-left">Let's connect!</p>
          </div>
        </div>
        <div className="h-fill flex flex-col items-center md:flex-row justify-between">
          <div className="w-5/12 order-2 md:order-1">
            <img 
              src={require('../../assets/images/Memoji.png')}
              alt="Kalen's Memomji"
              className="w-60"
            />
          </div>
          <div className="w-2/12 md:flex justify-center items-end order-2 hidden">
            <img 
              src={require('../../assets/icons/icons8-down-arrow-100.png')}
              alt="down arrow"
              className="w-12 h-12"
            />
          </div>
          <div className="w-full md:w-5/12 flex justify-evenly order-1 md:order-3">
            <img 
              src={require('../../assets/icons/icons8-linkedin-100.png')}
              alt='LinkedIn'
              className="w-16 h-16"
            />
            <img 
              src={require('../../assets/icons/icons8-github-100.png')}
              alt='GitHub'
              className="w-16 h-16"
            />
            <img 
              src={require('../../assets/icons/icons8-gmail-100.png')}
              alt='Gmail'
              className="w-16 h-16"
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;