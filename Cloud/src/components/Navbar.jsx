import React from 'react';
import { useState } from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'

import {FaBars, FaTimes} from 'react-icons/fa';

const style = {
    cont: 'w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg',
    nav: 'px-2 flex justify-between items-center w-full h-full',
    brand: 'flex items-center',
    brand_text: 'text-3xl font-bold mr-4 sm:text-4xl',

}

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const click = () => setToggle(!toggle);
    const close = () => setToggle(!toggle)
  return (
    <div className={style.cont}>
        <div className={style.nav}>
            <div className={style.brand}>
                <h1 className={style.brand_text}>V-CLOUD.</h1>
                <ul className='hidden md:flex'>
                    <li><Link to="home"  smooth={true} duration={-500}>Home</Link></li>
                    <li><Link to="about"  smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="contact"  smooth={true} offset={-50} duration={500}>Contact</Link></li>
                    <li><Link to="platform"  smooth={true} offset={-100} duration={500}>Platform</Link></li>
                    <li><Link to="pricing"  smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none mr-4 bg-transparent text-black'>Sign In</button>
                <button className='px-8 py-2'>Sign Up</button>
            </div>
            <div onClick={click} className='md:hidden'>
                {!toggle ? <FaBars className='w-5' /> : <FaTimes className='w-5'/> }

            </div>

        </div>
        {/* mobile menu */}
        <ul className={!toggle ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={close} to="home"  smooth={true} duration={500}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={close} to="about"  smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={close} to="contact"  smooth={true} offset={-50} duration={500}>Contact</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={close} to="platform"  smooth={true} offset={-100} duration={500}>Platform</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={close} to="pricing"  smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            
            <div className='flex flex-col my-3'>
                <button className='bg-transparent text-indigo-600 px-8 py-2 mb-4'>Sign In</button>
                <button className='px-8 py-2'>Sign Up</button>
            </div>
        </ul>
        
        
    </div>
  )
}

export default Navbar