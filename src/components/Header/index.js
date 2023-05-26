import React from 'react';

function Header() {
  
  return (
    <header id="top" className="flex justify-center bg-sky-950">
      <section className="flex flex-col w-4/5 h-screen">
        <div className="">
          <ul className="flex justify-end">
            <li className="p-3" onClick={() => window.location.replace("/#skills")}>Skills</li>
            <li className="p-3" onClick={() => window.location.replace("/#projects")}>Projects</li>
            <li className="p-3" onClick={() => window.location.replace("/#resume")}>Resume</li>
          </ul>
        </div>
        <div className="h-2/6 relative">
          <div className="absolute bottom-5">
            <div className="text-8xl text-left">
              Kalen Wiley
            </div>
            <div className="text-4xl text-left">
              Full-Stack Web Developer
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col">
            <p className="text-xl text-left">Hi! I'm Kalen, a full-stack web developer currently located in Richmond, VA. I am passionate about learning new technologies and expanding my skillset.</p>
            <p className="text-xl text-left">Let's connect!</p>
          </div>
    
        </div>
        <div className="h-fill flex justify-between">
          <div className="w-5/12">
            <img 
              src={require('../../assets/images/Memoji.png')}
              alt="Kalen's Memomji"
              className="w-60"
            />
          </div>
          <div className="w-2/12 flex justify-center items-end">
            <img 
              src={require('../../assets/icons/icons8-down-arrow-100.png')}
              alt="down arrow"
              className="w-12 h-12"
            />
          </div>
          <div className="w-5/12 flex justify-evenly">
            <img 
              src={require('../../assets/icons/icons8-linkedin-100.png')}
              alt='LinkedIn'
              className="w-16 h-16 my-auto"
            />
            <img 
              src={require('../../assets/icons/icons8-github-100.png')}
              alt='GitHub'
              className="w-16 h-16 my-auto"
            />
            <img 
              src={require('../../assets/icons/icons8-gmail-100.png')}
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