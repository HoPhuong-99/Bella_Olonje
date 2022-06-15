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
    <section className='bg-[#FAFAFA] md:bg-white md:pt-[80px]'>
      <div className='' id="product">
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
              <>
                <div className='z-[-1] mt-[-120px] flex'>
                  <img src={LoginDesktop} alt="" className='md:pl-[245px] md:pt-[137px]' />
                  <div className='md:pt-[223px] md:pl-[171px]'>
                    <h3 className='pt-[65px] font-montserrat not-italic font-bold text-2xl track-[0.1px]
                       text-[#FA4A0C] flex-none grow-0 order-0'>
                      Create an account
                    </h3>
                    <h2 className="pt-[40px] font-montserrat not-italic font-bold text-[40px] track-[0.2px]
               flex-none grow-0 order-0 leading-[57px] mr-[39.5px] ml-[37px] md:ml-0 md:pt-[17px]">
                      Create/login to an existing account to get started
                    </h2>
                    <h4 className="pt-[50px] font-montserrat not-italic font-medium text-2xl tracking-[0.2px]
                  flex-none grow-0 order-0 mr-[79.5px] ml-[77.5px] text-[#737373] md:ml-0 md:pt-[27px] md:mr-[255px]">
                      An account is created with your email and a desired password
                    </h4>
                  </div>
                </div>
              </>
            )
        }

      </div>
      <div className='w-[100%] text-center md:text-left md:pt-[400px] md:ml-[254px] '>
        <div className='mt-[-130px] '>
          {
            isMobile ? (<h3 className='font-montserrat not-italic font-bold text-2xl tracking-[0.1px]
          flex-none grow-0 order-0 mx-[57.5px] text-[#FA4A0C]'>
              Explore while shopping
            </h3>)
              : (
                <h3 className='font-montserrat not-italic font-bold text-2xl tracking-[0.1px]
           flex-none grow-0 order-0 text-[#FA4A0C]'>
                  Explore varieties
                </h3>
              )
          }
        </div>
        <h2 className="pt-[40px] md:w-[480px] md:pt-[17px] font-montserrat not-italic font-bold text-[40px] tracking-[0.2px]
          flex-none grow-0 order-0 leading-[57px] mr-[43.5px] ml-[37px] md:mx-0 ">
          Shop for your favorites meal as e dey hot.
        </h2>
        <h4 className="pt-[50px] md:w-[462px] md:pt-[27px] font-montserrat not-italic font-medium text-[24px] leading-[38px] 
        tracking-[0.2px] flex-none grow-0 order-0 mx-[78.5px] text-[#737373] md:mx-0">
          Shop for your favorite meals or dinks and enjoy while doing it.
        </h4>
        {
          isMobile ? (<div>
            <img src={Viewapp} alt="" className='mx-auto mt-[-90px]' />
          </div>)
            :
            (
              <div className="md:pl-[700px] md:mt-[-450px] ">
                <img src={AppDeskTop} alt="" className='' />
              </div>
            )
        }

      </div>
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
            <div className="md:flex md:pb-[300px]">
              <img src={CheckoutDesktop} alt="" className='md:pl-[245px] md:pt-[120px]' />
              <div className='md:pt-[210px] md:pl-[171px]'>
                <h3 className='pt-[65px] font-montserrat not-italic font-bold text-2xl track-[0.1px]
                       text-[#FA4A0C] flex-none grow-0 order-0'>
                  CheckOut
                </h3>
                <h2 className="pt-[40px] font-montserrat not-italic font-bold text-[40px] track-[0.2px]
               flex-none grow-0 order-0 leading-[57px] mr-[39.5px] ml-[37px] md:ml-0 md:pt-[17px]">
                  When you done check out and get it delivered.
                </h2>
                <h4 className="pt-[50px] font-montserrat not-italic font-medium text-2xl tracking-[0.2px]
                  flex-none grow-0 order-0 mr-[79.5px] ml-[77.5px] text-[#737373] md:ml-0 md:pt-[27px] md:mr-[255px]">
                  When you done check out and get it delivered with ease.
                </h4>
              </div>
            </div>
          </>)
      }
    </section>
  )
}

export default ViewApp;