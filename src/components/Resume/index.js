import React from 'react';


function Resume() {
  return (
    <section id="resume" className="flex justify-center">
      <div className="md:w-4/5">
        <div className="flex flex-col md:flex-row justify-between py-10 px-10">
          <div className="text-5xl md:text-left">
            Resume
          </div>
          <a href="https://drive.google.com/file/d/1IWfyqQS1xVeOQIKEF1uXWiaJKkua_Ut9/view?usp=sharing" target="_blank" rel='noreferrer'><button className="mt-5 md:mt-0 p-3 rounded-lg bg-sky-950 text-white">View in Browser</button></a>
        </div>
        
        <div className='mb-5 xl:flex'>
          <img 
            src={require('../../assets/images/Resume-1.png')}
            alt='Resume page 1'
            className='xl:w-1/2'
          />
          <img 
            src={require('../../assets/images/Resume-2.png')}
            alt='Resume page 2'
            className='xl:w-1/2'
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;