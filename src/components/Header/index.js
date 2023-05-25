import React from 'react';

function Header() {
  
  return (
    <header className="flex justify-center">
      <section className="w-4/5 h-screen border-2 border-black border-dashed">
        <div id="nav" className="border-2 border-black border-dashed">
          <ul className="flex justify-end">
            <li className="p-2">Skills</li>
            <li className="p-2">Projects</li>
            <li className="p-2">Resume</li>
          </ul>
        </div>
        <div id="title" className="border-2 border-black border-dashed">
          <div id="name" className="text-5xl text-left">
            Kalen Wiley
          </div>
          <div id="job" className="text-3xl text-left">
            Full-Stack Web Developer
          </div>
        </div>
        <div id="about" className="flex border-2 border-black border-dashed">
          <div className="w-1/2"></div>
          <p className="w-1/2 text-xl text-left">Hi! I'm Kalen, a full-stack web developer currently located in Richmond, VA. I am passionate about learning new technologies and expanding my skillset. Let's connect!</p>
        </div>
        <div id="last-container" className="flex justify-between border-2 border-black border-dashed">
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