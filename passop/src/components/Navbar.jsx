import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-700 ">
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-5 ">

        <div className="logo font-bold text-xl text-white ">
            <span className='text-green-600 '>&lt;</span>
            Pass
            <span className='text-green-600'>OP/&gt;</span>
            
            </div>
        <ul>
            <li className='flex gap-4 text-white'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
