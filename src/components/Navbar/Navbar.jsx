import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Logo from '../../assets/mobile/Bella Olonje logo 111 1.png'
import LogoDesktop from '../../assets/desktop/Bella Olonje logo 111 1.png'
import { FcMenu } from 'react-icons/fc'
import { GrClose } from 'react-icons/gr'

export const Navbar = (props) => {

  const [onpenMenu, setOpenMenu] = useState(false)

  const handleChange = () => {
    setOpenMenu(!onpenMenu)
  }
  const { isMobile } = props

  return (
    <nav className='flex md:fixed md:bg-white md:w-[100%] md:z-30' >
      <div className="flex justify-between w-[100%] h-[112px] md:h-[155px] ">
        {
          isMobile ? (<div className="pt-[17px] pl-[25px]">
            <img src={Logo} alt="" className='' />
          </div>)
            :
            (
              <div className="md:pt-[26.12px] md:pl-[90px] md:cursor-pointer">

                <Link to="header" spy={true} smooth={true} offset={-100} duration={500} className='menu-desktop' >
                  <img src={LogoDesktop} alt="" className='md:w-[206px] md:h-[101.76px]' />
                </Link >
              </div>
            )
        }
        <ul className="md:flex mt-[48px] mr-[23px] md:mr-[50px] md:mt-[63px]">
          {onpenMenu && isMobile ? (<GrClose className='h-[15px] w-[20px]' onClick={handleChange} />)
            : !onpenMenu && isMobile ?
              (<FcMenu className='h-[15px] w-[20px]' onClick={handleChange} />)
              : (
                <>
                  <div className='flex gap-[114px]'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='menu-desktop' >Home </Link >
                    <Link to="product" spy={true} smooth={true} offset={-100} duration={500} className='menu-desktop'>Product</Link >
                    <Link to="feg" spy={true} smooth={true} offset={-100} duration={500} className='menu-desktop'>Fag</Link >
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className='menu-desktop'>Contact</Link >
                  </div>
                </>
              )

          }
          {
            onpenMenu && isMobile &&
            (
              <div className="absolute right-8 z-10 bg-white rounded-md p-7 text-center text-14 text-gray-700 
                border-solid border-[1px] border-black ">
                <li className='menu-narbar' >Home </li>
                <li className='menu-narbar' >Product</li>
                <li className='menu-narbar' >Fag</li>
                <li className='menu-narbar' >Contact </li>
              </div>
            )
          }
        </ul>
      </div>
    </nav>
  )
}
export default Navbar