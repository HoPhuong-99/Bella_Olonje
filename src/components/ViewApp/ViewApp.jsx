import React from 'react'
import Viewapp from '../../assets/mobile/ViewApp.png'
import ViewCheckOut from '../../assets/mobile/ViewCheckOut.png'
import Viewlogin from '../../assets/mobile/ViewLogin.png'
import LoginDesktop from '../../assets/desktop/LoginDesktop.png'
import AppDeskTop from '../../assets/desktop/ViewAppDesktop.png'
import CheckoutDesktop from "../../assets/desktop/CheckOutDesktop.png";

export const ViewApp = (props) => {
  const { isMobile } = props

  return (
    <div id="product">
    <section className='bg-[#FAFAFA] md:mt-[80px] md:bg-white md:w-[80%] md:flex md:flex-col md:mx-auto '>
      <div>
        {
          isMobile ? (
            <>
              <div className='w-[100%] text-center'>
                <h3 className='pt-[65px] font-montserrat not-italic font-bold text-2xl track-[0.1px]
              text-[#FA4A0C] flex-none grow-0 order-0'>
                  Create an account
                </h3>
                <h2 className="pt-[40px] font-montserrat not-italic font-bold text-[40px] track-[0.2px]
               flex-none grow-0 order-0 leading-[57px] mr-[39.5px] ml-[37px] ">
                  Create/login to an existing account to get started
                </h2>
                <h4 className="pt-[50px] font-montserrat not-italic font-medium text-2xl tracking-[0.2px]
                  flex-none grow-0 order-0 mr-[79.5px] ml-[77.5px] text-[#737373] ">
                  An account is created with your email and a desired password
                </h4>
                <div className='z-[-1] mt-[-90px]'>
                  <img src={Viewlogin} alt="" className='mx-auto' />
                </div>
              </div></>
          )
            : (
              <div>
                <div className='z-[-1] md:w-[100%] md:items-center md:flex md:justify-between md:gap-10 '>
                  <img src={LoginDesktop} alt="" />
                  <div className=''>
                    <h3 className='pt-[65px] font-montserrat not-italic font-bold text-2xl track-[0.1px]
                       text-[#FA4A0C] flex-none grow-0 order-0'>
                      Create an account
                    </h3>
                    <h2 className="font-montserrat not-italic font-bold text-[40px] track-[0.2px]
                      flex-none grow-0 order-0 md:leading-[57px]">
                      Create/login to an existing account to get started
                    </h2>
                    <h4 className="md:pt-[27px] font-montserrat not-italic font-medium md:text-2xl tracking-[0.2px]
                  flex-none grow-0 order-0  text-[#737373] ">
                      An account is created with your email and a desired password
                    </h4>
                  </div>
                </div>
              </div>
            )
        }
      </div>
      <div>
        <div className='w-[100%] text-center md:items-center md:flex md:justify-between md:pt-[120px] md:gap-10'>
          <div className='md:w-[70%] md:text-left'>
            <div>
              {
                isMobile ? (<h3 className='font-montserrat not-italic font-bold text-2xl tracking-[0.1px]
           grow-0 order-0 mx-[57.5px] text-[#FA4A0C]'>
                  Explore while shopping
                </h3>)
                  : (
                    <h3 className='font-montserrat not-italic font-bold text-2xl tracking-[0.1px]
            grow-0 order-0 text-[#FA4A0C]'>
                      Explore varieties
                    </h3>
                  )
              }
            </div>
            <h2 className="pt-[40px] md:pt-[17px] font-montserrat not-italic font-bold text-[40px] tracking-[0.2px]
           grow-0 order-0 leading-[57px] ">
              Shop for your favorites meal as e dey hot.
            </h2>
            <h4 className="md:pt-[27px] font-montserrat not-italic font-medium text-[24px] leading-[38px] 
          tracking-[0.2px] grow-0 order-0 mx-[78.5px] text-[#737373] md:mx-0">
              Shop for your favorite meals or dinks and enjoy while doing it.
            </h4>
          </div>
          {
            isMobile ? (<div>
              <img src={Viewapp} alt="" className='mx-auto mt-[-90px]' />
            </div>)
              :
              (
                <div className="">
                  <img src={AppDeskTop} alt="" />
                </div>
              )
          }
        </div>
      </div>
      <div>
        {
          isMobile ? (
            <div className='w-[100%] text-center '>
              <div className='mt-[-130px]'>
                <h3 className='font-montserrat not-italic font-bold text-2xl tracking-[0.1px]
                flex-none grow-0 order-0 text-[#FA4A0C] '>
                  CheckOut
                </h3>
                <h2 className="pt-[40px] font-montserrat not-italic font-bold text-[40px] tracking-[0.2px]
                flex-none grow-0 order-0 leading-[57px] mx-[49px]">
                  When you done check out and get it delivered.
                </h2>
              </div>
              <h4 className="pt-[50px] font-montserrat not-italic font-medium text-2xl tracking-[0.2px]
                flex-none grow-0 order-0 mx-[78.5px] text-[#737373] z-10 ">
                When you done check out and get it delivered with ease.
              </h4>
              <div className="">
                <img src={ViewCheckOut} alt="" className='mx-auto mt-[-90px]' />
              </div>
            </div>)
            :
            (<>
              <div className=''>
                <div className="md:flex md:flex-row md:items-center md:justify-between md:pb-[300px] md:pt-[120px] md:gap-10">
                  <img src={CheckoutDesktop} alt="" className='' />
                  <div className=''>
                    <h3 className='pt-[65px] font-montserrat not-italic font-bold text-2xl track-[0.1px]
                       text-[#FA4A0C] flex-none grow-0 order-0'>
                      CheckOut
                    </h3>
                    <h2 className="pt-[40px] font-montserrat not-italic font-bold text-[40px] track-[0.2px]
               flex-none grow-0 order-0 leading-[57px] md:ml-0 md:pt-[17px]">
                      When you done check out and get it delivered.
                    </h2>
                    <h4 className="pt-[50px] font-montserrat not-italic font-medium text-2xl tracking-[0.2px]
                  flex-none grow-0 order-0 text-[#737373] md:pt-[27px] ">
                      When you done check out and get it delivered with ease.
                    </h4>
                  </div>
                </div>
              </div>

            </>)
        }
      </div>
    </section>
    </div>

  )
}

export default ViewApp;