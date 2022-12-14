import React,{useState} from 'react'

import logo from './photos/logo.png'
import image1 from './photos/image.png'
import image3 from './photos/image3.png'
import image2 from './photos/image2.png'
import wood1 from './photos/wood1.png'
import wood2 from './photos/wood2.png'
import wood3 from './photos/wood3.png'
import mark from './photos/mark.png'
import cross from './photos/maki_cross.png'
import workimage from './photos/our-work.png'
import video from './photos/video.png'
import about1 from './photos/about1.png'
import about2 from './photos/about2.png'
import about3 from './photos/about3.png'
import realwood from './photos/real-wood.png'
import phone from './photos/phone.png'
import location from './photos/location.png'
import togle from './photos/togle.png';






const Home = () => {

    const [showLinks, setShowLinks] = useState(false)

  return (
    <div >
        <div className='first-div'>
      <header>
        <nav >
            <div className='header'>
                <div className='logo-link'>
                <div className='logo-toggle'>
            <img src={logo} alt='imag' className='logo'/>
            
                <img src={togle} alt='togle' className='nav-toggle' onClick={() => setShowLinks(!showLinks)}/>
                </div>
        
            <div className={`${showLinks?'links-container show-container': 'links-container'}`}>
            <div className='nav-links'>
               <li ><a href='/'>Gallery</a></li>
               <li><a href='/'>Prices for services</a></li>
               <li><a href='/'>About us</a></li>
               <li><a href='/'>Contact</a></li>
               </div>
            </div>
            </div>
            </div>
        </nav>

         <div className='header-box'>
             <div className='intro'>
                <h2>SOLID <br/> WOOd <br/>PRODUCTS</h2>
                <p>Oak, beech, ash from <br/> 1700 CZK perm3</p>
                <button className='order-btn'>Order</button>
             </div>

             <div className='vertical-line'></div>
          
             <div className='header-images'>
                <div className='div-image1'>
                <img src={image1} alt='' className='image1'/>
                </div>
              <div className='div-image2'>
                 <img src={image2} alt='' className='image2'/>
                 </div>
                 <div className='div-image3'>
                  <img src={image3} alt='' className='image3'/>
                  </div>
             </div>
        </div>
         <div className='mobile-header-box'>
             <div className='intro'>
                <h2>SOLID WOOd <br/>PRODUCTS</h2>
                <p>Oak, beech, ash from <br/> 1700 CZK perm3</p>
                <button className='order-btn'>Order</button>
             </div>

             <div className='horizontal-line'></div>
               </div>
          
             <div className='mobile-header-images'>
                
                 <img src={image2} alt='' className='image2-mobile'/>
                
                 
                
                  <img src={image3} alt='' className='image3-mobile'/>
                
              
                <img src={image1} alt='' className='image1-mobile'/>
               
            
             </div>
      
         </header> 
         </div>

       
        <main>
            <h3>THE WOOD WE <br/> WORK WITH</h3>
            <div className='wood-type'>
            <div>
                <img src={wood1} alt='wood'  className='type'/>
                <h4>Oak</h4>
                <div className='wood-characters'>
                  <p><span><img src={mark} alt='mark'/></span>Durability</p>
                <p className='text'><span className='nike'><img src={mark} alt='mark'/></span>Beautiful texture</p>
               <p className='text'><span  className='nike'><img src={mark} alt='mark'/></span>Water resistance</p>
               <p className='text'><span  className='nike'><img src={cross} alt='mark'/></span>Expensive</p>
               </div>
              
            </div>
            <div>
                 <img src={wood2} alt='wood'  className='type'/>
                 <h4>Buk</h4>
                   <p className='text'><span  className='nike'><img src={mark} alt='mark'/></span>Durability</p>
                    <p className='text'><span  className='nike'><img src={cross} alt='mark'/></span>Hard to handle</p>
            </div>
            <div>
                  <img src={wood3} alt='wood'  className='type'/>
                   <h4>Ash</h4>
                    <p className='text'><span  className='nike'><img src={mark} alt='mark'/></span>Durability</p>
                    <p className='text'><span  className='nike'><img src={cross} alt='mark'/></span>Hard to handle</p>
            </div>
            </div>
        </main>

        <section>
            <h3>
                OUR WORK
            </h3>

        <img src={workimage} alt='workimage' className='workimage'/>

        <div className='advantage'>
            <h3>Advantages <br/>
working with us</h3>
<div className='video-p'>
<img src={video} alt='video' className='video'/>

<div className='advantage-div'>
<p>In-house carpentry production</p>
<p>We only treat wood with environmentally friendly and safe products</p>
<p>Prices from the manufacturer, no extra charges</p>
</div>
</div>
<button className='consult-btn'>Receive a consultation</button>

        </div>
        </section>

        <div className='about'>
            <div className='about-div'>
           
            <div className='about-container'>
                <div className='h3-p'>
                 <h3>ABOUT US</h3>
                 <div >
            <p className='about-p'>
                BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
            </p>
            </div>
            </div>

            <div className='about-image'>
                <img src={about1} alt='about1' className='wood1'/>
                <img src={about2} alt='about2' className='wood2'/>
                <img src={about3} alt='about3' className='wood3'/>
            </div>
            </div>
            </div>

        </div>
        <div className='questions'>
        <h3 className='questions-h3'>ANY QUESTIONS?</h3>
        <div className='questions-div'>
            <form>
                <input/>
                <input/>
               <textarea/>
               <button className='form-btn'>send</button>
            </form>
            <div><p className='div-p'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
            <img src={realwood} alt='realwood' className='realwood'/>
            
            </div>

        </div>
        </div>

        <footer>
            <div className='footer'>
            <img src={logo}  alt='logo' className='footer-logo'/>
            <p className='phone'><span><img src={phone} alt='phone' className='phone-logo'/></span>+420 000 000 000</p>
            <p><span><img src={location} alt='phone' className='location-logo'/></span>Na Plze??ce 1166/0
150 00</p>
            </div>
            <small>Privacy Policy</small>
        </footer>
        </div>
  )
}

export default Home
