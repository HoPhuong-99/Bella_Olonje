import React from 'react'
import Rectange from '../../assets/mobile/Group 54.png'
import BackgroundFoodApp from '../../assets/desktop/Rectangle 48.png'
import BackgroundDesktop from '../../assets/desktop/Group 53.png'

export const Foodapp = (props) => {
  const { isMobile } = props

  return (
    <section>
      <div className="w-[100%] bg-[#FAFAFA]">
        <div className='w-0 h-0 md:w-[100%] md:h-[619px]'>
          <img src={BackgroundFoodApp} alt="" className='md:w-[100%] md:h-[619px] md:z-[-1]' />
        </div>
        <div className="text-center md:z-10 md:mt-[-602px]">
          <h5 className='flex-none font-montserrat pt-[50px] track-[0.1px] font-bold font-[16px] 
          leading-[24px] not-italic text-[#737373] grow-0 order-0 
          md:font-bold md:text-[24px] md:leading-9 md:text-[#F7F7F7]'>
            Food app
          </h5>
        </div>
        <div className=" text-center pt-[17px] md:z-10">
          <p className='font-montserrat not-italic font-bold text-[36px] leading-[42px] track-[0.2x] flex-none 
          grow-0 order-0 md:text-white md:text-[58px] md:leading-[80px] md:px-[250.5px] '>
            Why stay hungry when you can order form Bella Onijie
          </p>
        </div>
        <div className=" md:flex  md:justify-center text-center pt-[27px] md:z-10">
          <h4 className='font-montserrat not-italic font-medium text-[24px] leading-[38px]
        track-[0.2x] flex-none grow-0 order-0 text-[#737373] md:text-[#F7F7F7] '>
            Download the bella onoje’s
          </h4>
          <h4 className='font-montserrat not-italic font-medium text-[24px] leading-[38px]
        track-[0.2x] flex-none grow-0 order-0 text-[#737373] md:text-[#F7F7F7] '>
            food app now on
          </h4>
        </div>
        <div className='md:flex'>
          <div className='flex md:flex-none justify-center pt-[50px] flex-none grow-0 order-0'>
            <button className='md:z-20 bg-[#FA4A0C] md:hover:bg-orange-300 w-[236px] py-4 px-[58.5px] rounded-[30px] text-white md:mr-[25px] md:ml-[521px]'>
              <h3 className='font-montserrat not-italic font-bold text-[24px] leading-[36px] tracking-[0.1px]'>
                Playstore
              </h3>
            </button>
          </div>
          <div className='flex md:flex-none justify-center pt-[20px] md:pt-[50px] flex-none grow-0 order-0'>
            <button className='md:z-20 z-20 w-[236px] md:hover:bg-gray-300 md:h-[68px] py-4 px-[58.5px] rounded-[30px] text-[#FA4A0C] border-[1px] border-[#FA4A0C] 
            md:text-white md:border-white '>
              <h3 className=' w-[123px]  font-montserrat not-italic font-bold text-[24px] leading-[36px] tracking-[0.1px]'>
                App store
              </h3>
            </button>
          </div>
        </div>
        {
          isMobile ? (
            <div className=' mt-[-90px]'>
              <img src={Rectange} alt="" className='z-10' />
            </div>)
            : (
              <div className='md:flex'>
                <img src={BackgroundDesktop} alt="" className='md:z-10 md:pl-[346px] md:mt-[-125px]' />
              </div>)
        }
        {
          isMobile ? (<div className='text-center'>
            <p className='font-montserrat not-italic font-[600px] text-2xl tracking-[0.1px]'>How the app works</p>
            <div className='mt-[49px] border-b-[3px] border-[#E4E4E4] '>
            </div>
          </div>)
            :
            (
              <div className='text-center'>
                <div className='mt-[49px] border-b-[3px] border-[#E4E4E4] md:w-[884px] md:mx-[278px] ' />
                <p className=' md:font-poppins md:not-italic md:pt-[72.09px] md:font-semibold text-[44px] leading-[36px] md:tracking-[0.1px] md:text-black md:opacity-[0.8px]
                font-montserrat not-italic font-[600px] text-2xl tracking-[0.1px]'>How the app works</p>
              </div>
            )
        }
      </div>
    </section>

  )
}

export default Foodapp;