import React from 'react';
import './main.css';
import Link from 'next/link';
import Page from './contactpagefolder/page';

const NavbarLight = () => {
  return (
    <>
        <div className="navbar-dark">
        <div className='navbar-dark-heading'> LearnGraphology</div>
        <div className='navbar-dark-comps'> Home </div>
        <div className='navbar-dark-comps'> Blogs </div>
        <div className='navbar-dark-comps'> Courses </div>
        <div className='navbar-dark-comps' > <Link href="/aboutpagefolder" style={{ color: 'white', textDecoration: 'none' }}>About</Link></div>
        <Link href="/contactpagefolder"><button className='navbar-dark-contact'>Contact Us</button> </Link> 
        </div>
    </>
  )
}

export default NavbarLight