import React from 'react'
import Images from './Images'


function Slider() {
  return (
    <div className='slider hidden lg:block'>
      <div className='carousel'>
        <div  className='inner-caroussel  flex gap-2 justify-center items-end p-2'>
        {Images.map((image,index)=>(
          <div  className="slide " key={index}>
            <img src={image} alt="" className='rounded-xl h-20 w-32  ' height={200}/>
          </div>
        ))}
        
        </div>
        
        
        

      </div>
      <div  className='inner-caroussel  flex gap-2 justify-center items-end p-2'>
        {Images.map((image,index)=>(
          <div  className="slide " key={index}>
            <img src={image} alt="" className='rounded-xl h-20 w-32  ' height={200}/>
          </div>
        ))}
        
        </div>

      

      
  
    </div>
  )
}

export default Slider
