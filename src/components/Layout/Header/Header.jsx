import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import './Header.css'
import ManipalLogo from '../../../assets/images/manipal_logo.png'
import IeeeLogo from '../../../assets/images/IEEE_logo.png'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const listItems = [
    {
      title: 'Home',
      url: '#'
    },
    {
      title: 'About',
      url: '#'
    },
    {
      title: 'Conference +',
      url: '#'
    },
    {
      title: 'Call for Papers',
      url: '#'
    },
    {
      title: 'Paper Submission',
      url: '#'
    },
    {
      title: 'Manipal +',
      url: '#'
    },
    {
      title: 'Contact',
      url: '#'
    },
  ]
  const [navItem, setnavItem] = useState(listItems[0].title);
  const [showMobileNav, setshowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setshowMobileNav(!showMobileNav);
  }

  return (
    <>
      <div className='header_container bg_primary p-3 text-light'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <div className='logo_container'>
              <Image className='w-100' src={ManipalLogo} />
            </div>
            <div className='logo_container' id='eiii_logo_container'>
              <Image className='w-100' src={IeeeLogo} />
            </div>
            <div className='d-none d-lg-block'>
              <ul className='d-flex align-items-center m-0'>
                {listItems.map((item, index) => (
                  <li onClick={()=>setnavItem(item.title)} className={`mx-1 cursor_pointer navItem ${navItem === item.title && 'color_secondary'}`} key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className='bg-light'>Register Now</button>
          <IoMdMenu onClick={toggleMobileNav} size={25} className='cursor_pointer d-block d-lg-none' />
        </div>
        {showMobileNav &&
        <ul className='mobile_menu_container p-0 d-lg-none mt-1'>
          {listItems.map((item, index) => (
            <li onClick={()=>setnavItem(item.title)} className={`cursor_pointer navItem ${navItem === item.title && 'color_secondary'}`} key={index}>{item.title}</li>
          ))}
        </ul>}
      </div>
    </>
  )
}

export default Header