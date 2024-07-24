"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        <div className="footer-section">
        <div className="footer-title"> GraphoBlog </div>
        <div className="footer-nav">
        <Link href='/' style={{color:'red',textDecoration:'none'}}><span className='footer-nav-ele'>Home </span></Link>
           &nbsp; &nbsp; |   &nbsp; &nbsp;  
           <Link href='/aboutpagefolder' style={{color:'red',textDecoration:'none'}}><span className='footer-nav-ele'>About</span></Link>
               &nbsp; &nbsp; |   &nbsp; &nbsp; 
                <span className='footer-nav-ele' onClick={() => alert("Currently not working.")}>Blogs </span>
                  &nbsp; &nbsp;  |   &nbsp; &nbsp; 
                  <Link href='/contactpagefolder' style={{color:'red',textDecoration:'none'}}><span className='footer-nav-ele'> Contact</span></Link>
                   </div>
        <div className="footer-social">Connect with us:</div>
        <div className="footer-icons">&nbsp; &nbsp;&nbsp; &nbsp; 
        {/* Images: Flaticon.com */}
        <Link href="https://www.instagram.com/soothingshalini/" target="_blank">
            <Image src="/instagram.png" className="footer-icon" alt="instagram" width={30} height={30} /></Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
         <Link href="https://www.facebook.com/shalini.sanoria/reels/" target="_blank">
            <Image src="/facebook.png" className="footer-icon" alt="facebook" width={30} height={30} /></Link>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            
            <Image src="/youtube.png" className="footer-icon" alt="Twitter" width={30} height={30} onClick={() => alert("Currently not working.")} />&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <Image src="/whatsapp.png" className="footer-icon" alt="LinkedIn" width={30} height={30} onClick={() => alert("Currently not working.")} />&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </div>
        </div>
    </>
  )
}

export default Footer