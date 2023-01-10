import React from 'react'
import CryptoSvg from "../assets/Cryptocurrency.svg"

const Cryptocurrency = () => {
  return (
    <div className='container mx-auto mb-48'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <img src={`${CryptoSvg}`}/>
        </div>
        <div>
          <span className='uppercase text-xs text-primary font-semibold mb-2'>Cryptocurrency Creation</span>
          <h4 className='text-4xl font-normal mb-6'>Cryptocurrency Development and Initial Coin Offering (ICO).</h4>
          <p className='text-base mb-6 text-neutral-400'>Drive better business outcomes across digital channels and business processes through precise analytics that deliver real-time business observability to improve IT and business collaboration.</p>
          <p className='text-base text-neutral-400'>Base your business decisions on precise data analysis for web and mobile conversion, revenue impact, release validation, and business processes by combining business context from anywhere with full-stack application analytics and performance.</p>
        </div>
      </div>
    </div>
  )
}

export default Cryptocurrency