import React from 'react'
import banner from './../../assets/banner.svg'
import bannerAds from './../../assets/banner-ads.svg'

function Discount() {
  return (
    <div className="hero h-96 relative" style={{backgroundImage: `url(${banner})`,backgroundSize:'cover'}}>
    <div className="hero-overlay bg-opacity-0"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-3xl">
        <h1 className="mb-5  text-3xl md:text-6xl font-bold text-center">Up to 25% off - Meal Deals
 </h1>
        <p className="mb-5 px-5 text-xl md:text-2xl font-semi-bold ">Need a midweek pick-me-up, a break from cooking for the family or just fancy your favourite restaurant?</p>
       
        <p className="mt-2 mb-5 px-8 font-light text-md md:text-lg">Service and delivery fees, Subject to availability. Participating Restaurants Only. Ts&Cs apply. <a href="" className='underline'>Terms.</a></p>
  
     
      </div>
      <img src={bannerAds} alt=""  className='absolute bottom-0 h-16 w-full md:h-auto'/>
    </div>
  </div>
  )
}

export default Discount
