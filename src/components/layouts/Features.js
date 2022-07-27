import React from 'react'
import m from './../../assets/map-min.jpg'
import apps from './../../assets/apps.jpg'


function Features() {
  return (
    <div className=' bg-white md:flex  mt-4  m-3 shadow-xl rounded-xl items-center '>
      <div className="text flex-1 p-5 leading-10 m-5	">
        <h1 className='font-bold md:text-4xl mb-6 text-2xl '>Track orders to your <br/>door</h1>
        <p className=' md:font-normal font-light'>Get your favourite food delivered in a flash. You’ll see when your rider’s picked up your order, 
          and be able to follow them along the way. You’ll get a notification when they’re nearby, too.</p>
          <img src={apps} alt="apps"width={260} className="mt-2" />
      </div>
      <div className="img flex-1  ">
        <img src={m} alt="map"/>
      </div>
      
    </div>
  )
}

export default Features
