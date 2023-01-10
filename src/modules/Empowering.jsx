import React from 'react'
import Navbar from './Navbar'

const Empowering = () => {
  return (
    <div className={`bg-main-bg h-[810px]`}>
      <Navbar/>
      <div className='container grid grid-cols-2 mt-36 mx-auto'>
        <div className='w-[593px]'>
          <h2 className='text-6xl font-bold mb-6'>Empowering the future of Finance</h2>
          <p className='text-base text-neutral-300 mb-8'>Develocity is a full-service software development, mobile app, and data analytics company, providing cutting-edge web 3 and blockchain solutions to businesses of all sizes.</p>
          <button className='bg-indigo-600'>Get a Free Quote </button>
        </div>

        <div></div>
      </div>
      
    </div>
  )
}

export default Empowering