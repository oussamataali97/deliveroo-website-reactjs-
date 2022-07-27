import React from 'react'
import background from './../../assets/hero.jpg'

function Header() {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-3xl md:text-5xl font-bold text-center">Restaurant food, takeaway and groceries. <span className='text-cyan-400'> Delivered.</span> </h1>
      <p className="mb-5 ">Enter a postcode to see what we deliver </p>
      <div className="relative ">
      <input type="text" placeholder="Search…" className="input w-full rounded-3xl p-5 text-black " />
      
      <button className="btn btn-rounded bg-cyan-400 border-none rounded-3xl absolute bottom-0 right-0 w-32">
Search    </button>
      </div>
      <p className="mt-2 font-light"> <a href="" className='text-cyan-400'>Log in</a> for your recent adresses </p>

   
    </div>
  </div>
</div>
    </div>
  )
}

export default Header
