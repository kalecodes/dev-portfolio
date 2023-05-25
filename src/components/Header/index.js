import React from 'react';

function Header() {
  
  return (
    <header className="flex justify-center bg-sky-950">
      <section className="flex flex-col w-4/5 h-screen">
        <div id="nav" className="">
          <ul className="flex justify-end">
            <li className="p-2">Skills</li>
            <li className="p-2">Projects</li>
            <li className="p-2">Resume</li>
          </ul>
        </div>
        <div id="title" className="h-2/6 relative">
          <div className="absolute bottom-5">
            <div id="name" className="text-8xl text-left">
              Kalen Wiley
            </div>
            <div id="job" className="text-4xl text-left">
              Full-Stack Web Developer
            </div>
          </div>
        </div>
        <div id="about" className="flex-1 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col">
            <p className="text-xl text-left">Hi! I'm Kalen, a full-stack web developer currently located in Richmond, VA. I am passionate about learning new technologies and expanding my skillset.</p>
            <p className="text-xl text-left">Let's connect!</p>
          </div>
    
        </div>
        <div id="last-container" className="h-fill flex justify-between">
          <div id="memoji-div" className="w-5/12">
            <img 
              src={require('../../assets/images/Memoji.png')}
              alt="Kalen's Memomji"
              className="w-60"
            />
          </div>
          <div id="arrow-div" className="w-2/12 flex justify-center items-end">
            <img 
              src={require('../../assets/icons/down-arrow.png')}
              alt="down arrow"
              className="w-12 h-12"
            />
          </div>
          <div id="links-div" className="w-5/12 flex justify-evenly">
            <img 
              src={require('../../assets/icons/002-linkedin.png')}
              alt='LinkedIn'
              className="w-16 h-16 my-auto"
            />
            <img 
              src={require('../../assets/icons/001-github.png')}
              alt='GitHub'
              className="w-16 h-16 my-auto"
            />
            <img 
              src={require('../../assets/icons/003-gmail.png')}
              alt='Gmail'
              className="w-16 h-16 my-auto"
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;