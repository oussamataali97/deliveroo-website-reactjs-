import React from 'react'
import banner from './../../assets/banner.svg'
import img1 from './../../assets/person1.png'
import img2 from './../../assets/pesron2.png'
import img3 from './../../assets/person3.jpg'
import img4 from './../../assets/pesron4.png'
import {WiDirectionRight} from 'react-icons/wi'

function Gallery() {
  return (
    <div className="grid md:grid-cols-2 gap-5 py-3 px-8 mt-5 ">
        <div className="hero h-96 relative rounded-xl shadow-xl" style={{backgroundImage: `url(${img2})`,backgroundSize:'cover'}}>
          
          <div className="hero-content  text-neutral-content absolute bottom-0 left-0">
            <div className="max-w-3xl">
              <h1 className="mb-2 text-3xl md:text-xl font-bold ">Partner with us</h1>
              <p className="mb-5  text-xl md:text-md font-light w-72 ">Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.</p>
            <button className='btn bg-slate-50 text-black font-normal border-none hover:bg-slate-50 '>Get Started <WiDirectionRight size={30} color="cyan"/></button>
            </div>
          </div>
       </div>
       <div className="hero h-96 relative rounded-xl shadow-xl" style={{backgroundImage: `url(${img1})`,backgroundSize:'cover'}}>
          
          <div className="hero-content  text-neutral-content absolute bottom-0 left-0">
            <div className="max-w-3xl">
              <h1 className="mb-2 text-3xl md:text-xl font-bold ">Partner with us</h1>
              <p className="mb-5  text-xl md:text-md font-light w-72 ">Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.</p>
            <button className='btn bg-slate-50 text-black font-normal border-none hover:bg-slate-50 '>Get Started <WiDirectionRight size={30} color="cyan"/></button>
            </div>
          </div>
       </div>
       <div className="hero h-96 relative rounded-xl shadow-xl" style={{backgroundImage: `url(${img3})`,backgroundSize:'cover'}}>
          
          <div className="hero-content  text-neutral-content absolute bottom-0 left-0">
            <div className="max-w-3xl">
              <h1 className="mb-2 text-3xl md:text-xl font-bold ">Partner with us</h1>
              <p className="mb-5  text-xl md:text-md font-light w-72 ">Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.</p>
            <button className='btn bg-slate-50 text-black font-normal border-none hover:bg-slate-50 '>Get Started <WiDirectionRight size={30} color="cyan"/></button>
            </div>
          </div>
       </div>

       <div className="hero h-96 relative rounded-xl shadow-xl" style={{backgroundImage: `url(${img4})`,backgroundSize:'cover'}}>
          <div className="bg-red-900  ">
            <div className="hero-content  text-neutral-content absolute bottom-0 left-0">
              <div className="max-w-3xl">
                <h1 className="mb-2 text-3xl md:text-xl font-bold ">Partner with us</h1>
                <p className="mb-5  text-xl md:text-md font-light w-72 ">Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.</p>
              <button className='btn bg-slate-50 text-black font-normal border-none hover:bg-slate-50 '>Get Started <WiDirectionRight size={30} color="cyan"/> </button>
              </div>
            </div>
          </div>
          
       </div>

    </div>
  
      
 
  )
}

export default Gallery
