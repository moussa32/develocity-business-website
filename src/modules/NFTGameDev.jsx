import React from 'react'
import NFTGameSvg from "../assets/NFTGame.svg"
import NFTGameBg from "../assets/NFTGame-bg.svg"

function NFTGameDev() {
  return (
    <div className='container w-[1216px] h-[479px] mb-48 mx-auto bg-gradient-to-r from-[#312E81] to-[#191741] rounded-[40px] p-7'>
      <h1 className='text-right mr-24 text-4xl font-normal mb-5 mt-8'>NFT Game Development</h1>
      <div className="flex justify-between gap-8">
        <div>
          <img src={`${NFTGameBg}`}/>
        </div>
        <div className='bg-opacity-5 bg-white w-[312px] h-[343px] p-6 mb-8 rounded-[20px]'>
          <img className='mb-5' src={`${NFTGameSvg}`} alt="NFT Game Development"/>
          <h4 className='text-xl font-medium mb-2'>Full service cycle</h4>
          <p className=' text-base text-paragraph'>We can provide a full-service solution for your software development projects, from architecture design to production deployment. Our professional teams handle challenges at any stage of the product development cycle.</p>
        </div>
        <div className='bg-opacity-5 bg-white w-[312px] h-[343px] p-6 mb-8 rounded-[20px]'>
          <img className='mb-5' src={`${NFTGameSvg}`} alt="NFT Game Development"/>
          <h4 className='text-xl font-medium mb-2'>Full service cycle</h4>
          <p className='text-base text-paragraph'>We can provide a full-service solution for your software development projects, from architecture design to production deployment. Our professional teams handle challenges at any stage of the product development cycle.</p>
        </div>
      </div>
    </div>
  )
}

export default NFTGameDev