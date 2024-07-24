"use client";
import "./main.css";
import Image from "next/image";
import Footer from "./Footer";
import NavbarLight from "./NavbarLight";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Gallery from "./Gallery";

export default function Home() {
  return (
    //Landing Part
    <>
    <NavbarLight />
      {/*First Section*/}
      <div className="first-section"> 
      <div className="landing-nav">
        {/* LearnGraphology */} 
        {/* <br /> */}
         {/* <Link href="/contactpagefolder"><button className="contact-us">Contact Us</button></Link> */}
        {/* <button className="contact-us"> Contact Us </button> */}
      </div>
      <div className="landing-content">
      <div className="left-content">
      <span className="landing-title">Uncover the secrets hidden</span><br />
      <div className="landing-subtitle">Explore the fascinating world of graphology.</div>
      <button className="read-now-button" onClick={() => alert("Currently not working.")}>Book now</button>
      </div>
      <div className="right-content">
      <Image src="/landingimage.png" className="landing-image" alt="Landing Image" width={600} height={395} />
      </div>
      </div>
      </div>

      {/* Second Section - 3 (grid/flex) */}
      <div className="second-section">
      <div className="card-3-1">
        <Image src="/card1.png" className="card-image" alt="Card Image" width={80} height={80} />
        <div className="2-written">
        <div className="card-title">Graphology Insights</div>
        <div className="card-description">Enhance self-awareness and personality traits.</div>
        </div>
      </div>
      <div className="card-3-1">
      <Image src="/card2.png" className="card-image" alt="Card Image" width={80} height={80} />
      <div className="2-written">
      <div className="card-title">Handwriting Analysis</div>
       <div className="card-description">Decode hidden meanings and gain valuable insights.</div>
       </div>
      </div>
      <div className="card-3-1">
      <Image src="/card3.png" className="card-image" alt="Card Image" width={80} height={80} />
      <div className="2-written">
      <div className="card-title">Personality Traits Revealed</div>
       <div className="card-description">Uncover personality traits and understand behaviour patterns.</div>
       </div>
      </div>
      </div>

      {/* Third Section - 4 reviews (grid/flex) */}
      <div className="third-section">
      
      <div className="third-title">Join the GraphoBlog community and explore the world of graphology</div>
      <div className="review-section">
      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Insightful and Informative Blogs                                                     <br /><br />
      </div>
      <div className="reviewer">
      <div className="reviewer-pic"></div>
      <div className="reviewer-name">Mansi Khudale</div> 
      </div>
      </div>

      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Incredible insights into handwriting analysis!
      </div>
      <div className="reviewer">
      <div className="reviewer-pic"></div>
      <div className="reviewer-name">Samrat Khudale</div> 
      </div>
      </div>

      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Graphology Enthusiast's Haven <br /><br />
      </div>
      <div className="reviewer">
      <div className="reviewer-pic"></div>
      <div className="reviewer-name">Swati Arora</div> 
      </div>
      </div>

      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Discovered Myself Through Graphology     
      </div>
      <div className="reviewer">
      <div className="reviewer-pic"></div>
      <div className="reviewer-name">Sandeep Arora</div> 
      </div>
      </div>
      </div>
      
      </div>
      <Gallery />
      <Footer />
    </>
  );
}
