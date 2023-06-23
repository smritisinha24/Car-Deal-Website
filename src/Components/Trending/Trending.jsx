import React , {useEffect} from 'react'
import './Trending.css'

// imported icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

// imported images
import car1 from '../../image/car1.webp'
import car2 from '../../image/car2.jpg'
import car3 from '../../image/car3.jpg'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Trending = () => {

 // lets initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 200
      }
  )
  },[])

  return (
    <div className='trending section'>
      <div className="setContainer container">
        <div  data-aos='fade-up' className="setHeading flex">
          <h3 className="setTitle">
            Trending Near You
          </h3>

          <div className="navbtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="carContainer grid">
          {/* 1. Single Car Div */}
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car image" />
            </div>
            <h5 className="carTitle">
             Used 2019 Audi TT coupe
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>
            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
          {/*2. Single Car Div */}
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car image" />
            </div>
            <h5 className="carTitle">
            Chevrolet corvette stingray
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>
            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
          {/*3. Single Car Div */}
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car image" />
            </div>
            <h5 className="carTitle">
            Used ferrari 360 challenge
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>
            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Trending