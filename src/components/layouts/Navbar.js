import React from 'react'
import deliveroo from './../../assets/logo.svg'
import {FaHome} from 'react-icons/fa'
import {GiHamburgerMenu,GiDutchBike,GiHandBag} from 'react-icons/gi'
import {RiRestaurant2Fill} from 'react-icons/ri'
import {MdOutlineHomeWork} from 'react-icons/md'


function Navbar() {
  return (
    <div>
    <div className="navbar bg-zinc-900">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><img src={deliveroo} alt="" width={120}/></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li tabIndex="0" className=' hidden md:block'>
        <a className=' bg-slate-50 hover:bg-slate-100'>
          Partner With Us
          <svg className="fill-current text-teal-400"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100 mt-1">
          <li><a> <GiDutchBike size={25} className='text-teal-400'/> Riders</a></li>
          <li><a><RiRestaurant2Fill size={25} className='text-teal-400'/>Restaurents </a></li>
          <li><a><GiHandBag size={25} className='text-teal-400'/>Carrers </a></li>
          <li><a><MdOutlineHomeWork size={25} className='text-teal-400'/>Deliveroo for work </a></li>
        </ul>
      </li>
      <li><a className='bg-slate-50 hover:bg-slate-100 ml-2 hidden sm:flex'><FaHome className='text-teal-400'/> Sign up or Login</a></li>
      <li><a className='bg-slate-50 hover:bg-slate-100 ml-2 '> <GiHamburgerMenu className='text-teal-400' />Menu</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
