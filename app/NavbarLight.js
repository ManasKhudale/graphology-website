"use client";
import React from 'react';
import './main.css';
import Link from 'next/link';
import Page from './contactpagefolder/page';

const NavbarLight = () => {
  return (
    <>
        <div className="navbar-light">
        <div className='navbar-light-heading'> LearnGraphology</div>
        <Link href='/' className='navbar-light-comps' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div > Home </div></Link>
        <div className='navbar-light-comps'> <span onClick={() => alert("Currently not working.")} >Blogs </span> </div>
        <div className='navbar-light-comps'> <span onClick={() => alert("Currently not working.")}>Courses</span> </div>
        <Link href="/aboutpagefolder" style={{ color: 'rgba(3,3,3,255)', textDecoration: 'none' }}><div className='navbar-light-comps'> About</div></Link>
        <Link href="/contactpagefolder"><button className='navbar-light-contact'>Contact</button> </Link> 
        </div>
    </>
  )
}

export default NavbarLight