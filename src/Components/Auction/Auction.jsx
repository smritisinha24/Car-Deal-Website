import React , {useEffect} from 'react'
import './Auction.css'

// imported icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

// imported images
import car1 from '../../image/img1.webp'
import car2 from '../../image/img2.webp'
import car3 from '../../image/img3.webp'
import car4 from '../../image/img4.webp'
import car5 from '../../image/img5.webp'
import car6 from '../../image/img6.jpg'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Auction = () => {

// lets initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
  )
  },[])

  return (
    <div className='auction section'>
      <div className="setContainer container">
        <div data-aos='fade-up'className="setHeading flex">
          <h3 className="setTitle">
            Active Auctions
          </h3>

          <div className="navbtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="carContainer grid" data-aos='fade-up'>
          {/* 1. Single Car Div */}
          <div className="singleCar grid" data-aos='fade-up'>
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
            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buy_Btn">
                Buy Now
              </span>
            </div>
          </div>
          {/*2. Single Car Div */}
          <div className="singleCar grid singleCarActive" data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car2} alt="Car image" />
            </div>
            <h5 className="carTitle">
            2020 Chevrolet corvette stingray
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>
            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buy_Btn">
                Buy Now
              </span>
            </div>
          </div>
          {/*3. Single Car Div */}
          <div className="singleCar grid" data-aos='fade-up'>
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
            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buy_Btn">
                Buy Now
              </span>
            </div>
          </div>
          {/*4. Single Car Div */}
          <div className="singleCar grid singleCarActive" data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car4} alt="Car image" />
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
            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buy_Btn">
                Buy Now
              </span>
            </div>
          </div>
          {/*5. Single Car Div */}
          <div className="singleCar grid " data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car5} alt="Car image" />
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
            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buy_Btn">
                Buy Now
              </span>
            </div>
          </div>
          {/*6. Single Car Div */}
          <div className="singleCar grid singleCarActive" data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car6} alt="Car image" />
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
            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buy_Btn">
                Buy Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auction