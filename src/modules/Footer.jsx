import React from 'react'
import footerLogo from "../assets/footer-logo.svg"
import Facebook from "../assets/Facebook.svg"
import Twitter from "../assets/Twitter.svg"
import Instagram from "../assets/Instagram.svg"
import Telegram from "../assets/Telegram.svg"

const Footer = () => {
  return (
    <div className='pt-20 mt-24 flex flex-col md:flex-row justify-between text-center
    border-t-[1px] border-[rgb(77,76,76)] md:text-left'>
      <div>
        <img className='mx-auto md:mx-0' src={`${footerLogo}`} alt="footer logo"/>
        <p className='mt-6 text-sm'>© 2022 Develocity, LLC. All Rights Reserved</p>
      </div>
      <div className='grid grid-cols-4 my-10'>
        <img className='mx-4' src={`${Facebook}`} alt="Facebook icon"/>
        <img className='mx-4' src={`${Twitter}`} alt="Twitter icon"/>
        <img className='mx-4' src={`${Instagram}`} alt="Instagram icon"/>
        <img className='mx-4' src={`${Telegram}`} alt="Telegram icon"/>
      </div>
    </div>
  )
}

export default Footer