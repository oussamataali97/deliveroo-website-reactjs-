import React from 'react'
import apps from './../../assets/apps.jpg'
import {FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa'


function Footer() {
  return (
    <>
    <div className='mt-10 footer h-3/5 bg-zinc-800 grid grid-cols-1 md:grid-cols-4  gap-5 items-stretch justify-items-center p-5 '>
      <div className="bg-zinc-600 text-white rounded-sm w-full md:w-60  p-5">
      <div className=" flex flex-col">
      <h1 className='font-bold mb-5 text-lg'>Discover Deliveroo</h1>
      <div className="links flex flex-col leading-8">
      <a href="" className='hover:text-cyan-300'>Investors</a>
      <a href="" className='hover:text-cyan-300'>About us</a>
      <a href="" className='hover:text-cyan-300'>Takeaway</a>
      <a href="" className='hover:text-cyan-300'>More</a>
      <a href="" className='hover:text-cyan-300'>Newsroom</a>
      <a href="" className='hover:text-cyan-300'>Foodscene blog</a>
      <a href="" className='hover:text-cyan-300'>Enginering blog</a>
      <a href="" className='hover:text-cyan-300'>Design blog</a>
      <a href="" className='hover:text-cyan-300'>Gift cards</a>
      <a href="" className='hover:text-cyan-300'>Carrers</a>
      <a href="" className='hover:text-cyan-300'>Restaurents signup</a>
      <a href="" className='hover:text-cyan-300'>Become a rider </a>
      </div>
      </div>
      </div>
      <div className="bg-zinc-600 text-white w-full md:w-60 rounded-sm p-5">
      <div className=" flex flex-col">
      <h1 className='font-bold mb-5 text-lg'>Legal</h1>
      <div className="links flex flex-col leading-8">
      <a href="" className='hover:text-cyan-300'>Terms and conditions</a>
      <a href="" className='hover:text-cyan-300'>Privacy</a>
      <a href="" className='hover:text-cyan-300'>Cookies</a>
      <a href="" className='hover:text-cyan-300'>Modern slavery statements</a>
      <a href="" className='hover:text-cyan-300'>Text strategy</a>
      </div>
      
      </div>
      </div>
      <div className="bg-zinc-600 text-white w-full md:w-60 rounded-sm  p-5">
      <div className=" flex flex-col">
      <h1 className='font-bold mb-5 text-lg'>Help</h1>
      <div className="links flex flex-col leading-8 ">

       <a href="" className='hover:text-cyan-300'>Contact</a>
      <a href=""  className='hover:text-cyan-300'>FAQ's</a>
      <a href="" className='hover:text-cyan-300'>Cuisines</a>
      <a href="" className='hover:text-cyan-300'>Brands</a>
      </div>
  
       
        </div>
     
      </div>
      <div className="bg-zinc-600 text-white w-full md:w-60 rounded-sm  p-5">
              <div className=" flex flex-col">
                  <h1 className='font-bold mb-5 text-lg'>Take Deliveroo with you</h1>
                  
                  <img src={apps} alt="apps"width={260} className="mt-2" />
              
              
                </div>
     
      </div>
    
    </div>
    <div className='bg-zinc-800 text-white flex px-16 py-3  justify-between'>
      <div className='flex space-x-5' >
      <a href=""><FaTwitter size={20}/></a>
      <a href=""><FaFacebook size={20}/></a>
      <a href=""><FaInstagram size={20}/></a>
      </div>
      <div>
      &copy; Deliveroo 2022
      </div>

    </div>
    </>
  )
}

export default Footer
