import React from 'react';


function Resume() {
  return (
    <section>
      <a href="https://drive.google.com/file/d/1IWfyqQS1xVeOQIKEF1uXWiaJKkua_Ut9/view?usp=sharing" target="_blank" rel='noreferrer'><button className="my-5 p-3 text-xl rounded-lg bg-sky-700 text-white">View in Browser</button></a>
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
    </section>
  );
}

export default Resume;