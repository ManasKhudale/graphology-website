import React from 'react'
import NavbarDark from '../NavbarDark'
import Image from 'next/image'
import Footer from '../Footer'
import NavbarLight from '../NavbarLight'

const Page = () => {
  return (
    <>
    <NavbarLight />
    <div className='journey'>
        <div className='journey-heading'>Shalini Sanoria&apos;s Journey</div>
    </div>
    <div className="about-section-1">
        <div className='photo-left'>
            <Image src="/shalini.jpg" className='photo' alt="Shalini Sanoria" width={486} height={588} />
        </div>
        <div className='about-right'>
        Shalini Sanoria is a dedicated graphologist whose expertise lies in the fascinating art and science of handwriting analysis. With a keen eye and years of experience, she delves into the intricate strokes and nuances of handwriting to uncover insights into personality traits, behaviors, and potential. Shalini&apos;s passion for graphology extends beyond mere analysis; she believes in the profound impact handwriting can have on understanding oneself and others. Through her meticulous approach and deep understanding of the field, Shalini Sanoria helps individuals gain self-awareness, improve communication, and navigate personal and professional relationships more effectively. Her commitment to graphology as a tool for personal growth and development underscores her belief in the power of handwriting as a window to the soul.
        </div>
    </div>
    <div className="about-section-2">
        <div className='about-left'>
        Shalini Sanoria is a dedicated graphologist whose expertise lies in the fascinating art and science of handwriting analysis. With a keen eye and years of experience, she delves into the intricate strokes and nuances of handwriting to uncover insights into personality traits, behaviors, and potential. Shalini&apos;s passion for graphology extends beyond mere analysis; she believes in the profound impact handwriting can have on understanding oneself and others. Through her meticulous approach and deep understanding of the field, Shalini Sanoria helps individuals gain self-awareness, improve communication, and navigate personal and professional relationships more effectively. Her commitment to graphology as a tool for personal growth and development underscores her belief in the power of handwriting as a window to the soul.
        </div>
        <div className='photo-right'>
            <Image src="/shalini2.jpg" className='photo' alt="Shalini Sanoria" width={710} height={499  } />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Page