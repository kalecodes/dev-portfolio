import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full  flex-col gap-2 font-bold'>
      <h1 className='text-4xl'>404</h1>
      <h2>Page Not Found</h2>
      <Link to={'/'} className='
        bg-blue-500     hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      '
        >
            Go back to home
        </Link>
    </div>
  )
}

export default Index