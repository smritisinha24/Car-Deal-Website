import React, {useEffect} from 'react'
import './Home.css'
// importing images
import homeimg from '../../image/home1.png'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // lets initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
  )
  },[])

  return (
    <div className='home'>
      <div className="setContainer">
        
        <div data-aos='fade-up' className="homeText">
          <span className="homespan">
            Meet your new car
          </span>
          <h1 className="homeTitle">
          Bentley Continental GT
          </h1>
          <div className="btns flex">
            <button data-aos='fade-right' className="btn">More Details</button>
            <button data-aos='fade-left' className="btn primaryBtn">Test Drive</button>
          </div>
        </div>
      
      <div  data-aos='fade-down-right' className="homeImage">
        <img src={homeimg} alt="car img" />
      </div>
      </div>
    </div>
  )
}

export default Home