import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="mt-3 md:mt-0 lg:mt-20 md:flex justify-center">
      <img 
        src={require('../../assets/images/Memoji.png')} 
        alt="Memoji character of Kalen" 
        className="w-60 lg:w-80 self-start mx-auto md:mx-2" 
      />
      <div className="md:w-1/2 md:my-3 flex flex-col justify-around">
        <h1 className="text-3xl py-5 md:py-0">Full-Stack Web Developer</h1>
        <div className="flex justify-evenly">
          <Link to="/portfolio"><button className="p-3 text-xl rounded-lg bg-sky-700 text-white">View My Portfolio</button></Link>
          <Link to="/resume"><button className="p-3 text-xl rounded-lg bg-sky-700 text-white">View My Resume</button></Link>
        </div>

        <div className="flex justify-evenly pt-5 md:pt-0">
          <a href="https://github.com/kalecodes" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/001-github.png')} alt="GitHub" className="w-16" /></a>
          <a href="https://www.linkedin.com/in/kalen-wiley" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/002-linkedin.png')} alt="LinkdIn" className="w-16" /></a>
          <a href="mailto:kalen.wiley@gmail.com" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/003-gmail.png')} alt="Email" className="w-16" /></a>
        </div>
      </div>
    </section>
  )
}

export default Home;