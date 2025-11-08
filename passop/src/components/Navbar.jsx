import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-600 ">
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-5 ">

        <div className="logo font-bold text-2xl text-white ">
            <span className='text-purple-900 '>&lt;</span>
            Pass
            <span className='text-purple-900'>OP/&gt;</span>
            
            </div>
        <ul>
            <li className='flex gap-4'>
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
