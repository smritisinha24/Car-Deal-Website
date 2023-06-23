import React , {useEffect} from 'react'
import './Footer.css'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

// lets initialise Aos and set the default animation duration
useEffect(()=>{
  Aos.init(
    {
      duration: 2000
    }
)
},[])

  return (
    <div className='footer'>
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/*1. single grid */}
          <div  data-aos='fade-up' className="singleGrid">
            <span className="FooterTitle">
              About
            </span>
            <ul className="footerUI grid">
              <li className="footerLI">
                How it works
              </li>
              <li className="footerLI">
                Careers
              </li>
              <li className="footerLI">
                Affiliates
              </li>
              <li className="footerLI">
                Media
              </li>
            </ul>
          </div>
          {/*2. single grid */}
          <div  data-aos='fade-up' className="singleGrid">
            <span className="FooterTitle">
              Become Seller
            </span>
            <ul className="footerUI grid">
              <li className="footerLI">
                Add Vehicles
              </li>
              <li className="footerLI">
                Resource Center
              </li>
              <li className="footerLI">
                Bonds
              </li>
              <li className="footerLI">
                Release Dates
              </li>
            </ul>
          </div>
          {/*3. single grid */}
          <div  data-aos='fade-up' className="singleGrid">
            <span className="FooterTitle">
              Community
            </span>
            <ul className="footerUI grid">
              <li className="footerLI">
                Reccomendations
              </li>
              <li className="footerLI">
                Gift Cards
              </li>
              <li className="footerLI">
                Top Ups
              </li>
              <li className="footerLI">
                Selling
              </li>
            </ul>
          </div>
          {/*4. single gris */}
          <div  data-aos='fade-up' className="singleGrid">
            <span className="FooterTitle">
              Booking support
            </span>
            <ul className="footerUI grid">
              <li className="footerLI">
                Help Center
              </li>
              <li className="footerLI">
                Careers
              </li>
              <li className="footerLI">
                Garages
              </li>
              <li className="footerLI">
                Trust and Safety
              </li>
            </ul>
          </div>
        </div>

        {/* Footer lower section */}
        <div className="lowerSection grid">
          <p>2023 All right reserved</p>
          <blockquote>Smriti Sinha</blockquote>
        </div>
      </div>
    </div>
  )
}

export default Footer