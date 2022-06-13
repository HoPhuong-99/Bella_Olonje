import React from 'react'
import { AiOutlineTwitter, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import FooterBG from '../../assets/desktop/FooterBG.png'
import LogoFooter from '../../assets/desktop/Bella Olonje logo 111 1.png'

export const FooterApp = (props) => {
  const { isMobile } = props
  return (
    <section className='w-[100%]  mt-[-160px] '>
      {
        isMobile ? (<>
          <div className='bg-[#252B42] h-[564px] text-center '>
            <div className='text-white pt-[120px] pl-[-120px] text-form'>
              <h2 className='font-bold text-[40px] leading-[57px] tracking-[0.2px] px-[54px] '>
                Download the app now.
              </h2>
            </div>
            <div className="text-[#BDBDBD] pt-5 ">
              <h4 className="  font-montserrat not-italic font-medium text-[23px] leading-[38px] 
            tracking-[0.2px] flex-none order-[0px] grow-0 px-[86.5px]">
                Most calendars are designed for teams.
              </h4>
            </div>
            <div className="flex pt-[60px] text-white gap-[19px] ">
              <button className="flex-row bg-[#FA4A0C] text-center w-[137px] h-[64px] ml-[39.5px] rounded-[10px] 
                px-[31px] py-[18px] flex-none order-[0px] grow-[0px]">
                <p className='font-montserrat not-italic font-bold text-[16px] leading-[28px] tracking-[0.1px] '>Buy now</p>
              </button>
              <button className='w-[194px]  rounded-[10px] border-solid border-white border-2  '>
                <p className='font-montserrat not-italic font-bold text-[16px] leading-[28px] tracking-[0.1px] '>
                  Try for free
                </p>
              </button>
            </div>
          </div></>)
          : (<>
            <div className="md:text-center md:pb-[165px] md:text-white">
              <img src={FooterBG} alt="" className='md:z-[-1] md:w-[100%] md:mb-[-370px]' />
              <h2 className='font-montserrat font-bold text-[40px] leading-[57px] tracking-[0.2px] md:px-[468.5px]'>
                Download the app now.
              </h2>
              <h4 className="  font-montserrat not-italic font-medium text-[24px] leading-[38px] 
                 tracking-[0.2px] flex-none order-[0px] grow-0 px-[86.5px] md:pt-[20px]">
                Available on your favorite store. Start your premium experience now
              </h4>
              <div className="flex  md:pt-[60px] pt-[60px] gap-[19px]  ">
                <button className="flex-row md:hover:bg-orange-300 bg-[#FA4A0C] text-center w-[137px] h-[64px] ml-[554.5px] rounded-[10px] 
                 py-[18px] flex-none order-[0px] grow-[0px]">
                  <p className='font-montserrat not-italic font-bold text-[16px] leading-[28px] tracking-[0.1px] '>Buy now</p>
                </button>
                <button className='w-[194px] md:hover:bg-gray-300 md:w-[194px] rounded-[10px] border-solid border-white border-2  '>
                  <p className='font-montserrat not-italic font-bold text-[16px] leading-[28px] tracking-[0.1px] '>
                    App stope
                  </p>
                </button>
              </div>
            </div>
          </>)

      }
      <div>
        {
          isMobile ? (<>
            <div className="mt-[66.69px] flex justify-center">
              <AiOutlineTwitter size={"40px"} className="text-[#FA4A0C] mr-[32.33px] " />
              <AiFillFacebook size={"40px"} className="text-[#FA4A0C] mr-[32.97px] " />
              <AiFillLinkedin size={"40px"} className="text-[#FA4A0C] " />
            </div>
            <div className='mt-[12.5px] mb-[45px] text-center'>
              <sub className='font-roboto not-italic font-bold text-[12px] leading-[18px]
              tracking-[0.1px] text-[#5C5C5C] flex-none order-[0px] grow-0'>
                Just type what's on your mind and we'll
              </sub>
            </div></>) :
            (<>
              <div className="md:w-[1210px] md:h-[133px] md:mx-[115px] flex">
                <img src={LogoFooter} alt="" className='md:pl-[71px] md:pt-[16.1px] md:pb-[14.9px]' />
                <div className="mt-[66.69px] flex justify-center md:pl-[715.84px]">
                  <AiOutlineTwitter size={"40px"} className="text-[#FA4A0C] mr-[32.33px] " />
                  <AiFillFacebook size={"40px"} className="text-[#FA4A0C] mr-[32.97px] " />
                  <AiFillInstagram size={"40px"} className="text-[#FA4A0C] " />
                </div>
              </div>
              <div className='md:text-center'>
                <p className='md:w-[100%] md:mb-[39px] font-roboto font-bold text-xs text-[#5C5C5C]'>
                  Copywright 2020 .com</p>
              </div>
            </>)
        }
      </div>
    </section>
  )
}

export default FooterApp;