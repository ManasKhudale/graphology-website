"use client";
import React from 'react'
import '../main.css'
import Image from 'next/image';
import NavbarLight from '../NavbarLight'
import Footer from '../Footer';

const Page = () => {
  return (
    <>
    <NavbarLight />
    <div className="contact-section-page">
    <div className="contact-left">
    <Image src="/contactperson.png" className="contact-image" alt="Contact Image" width={388} height={344} />
    </div>
    <div className="contact-form-right"> 
    <form>
    <div className="form-group">
    <div className="contact-title">Contact Us</div>
    <div className="contact-subtitle">Explore the world of graphology with us. Feel free to reach out.</div>
    <div className="contact-details">
    <Image src="/email.png" className="contact-icon" alt="EmailLogo" width={30} height={30} />
    <div className='contact-info-written'>shalini.graphology@gmail.com </div> <br />
    <Image src="/phone.png" className="contact-icon" alt="PhoneLogo" width={30} height={30} />
    <div className='contact-info-written'> +91 9876543210</div> <br />
    </div>
    <label className="form-label" for="name">Name</label>
    <input className="form-entry" type="text" id="name" name="name" placeholder="Your name.." />
    <label className="form-label" for="email">Email</label>
    <input className="form-entry" type="text" id="email" name="email" placeholder="Your email.." />
    <label className="form-label" for="subject">Message</label>
    <textarea className="form-entry"id="subject" name="subject" placeholder="How can we assist you?"></textarea>
    <input type="submit" className='form-submit' value="Send Message" />
    </div>
    </form>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Page