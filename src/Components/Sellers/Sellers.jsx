import React , {useEffect} from 'react'
import './Sellers.css'

// importing images
import img1 from '../../image/com1.png'
import img2 from '../../image/com2.png'
import img3 from '../../image/com3.png'
import img4 from '../../image/com4.png'
import img5 from '../../image/com5.png'
import img6 from '../../image/com6.png'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sellers = () => {

 // lets initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
  )
  },[])

  return (
<div className='sellers section'>
<div className="setContainer container">
  <div  data-aos='fade-up' className="setHeading grid">
    <h3 className="setTitle">
      Explore top sellers in town
    </h3>

    <p>Joseph Samuel Girald holds the Guinness World Record for being the greatest salesman in the world.</p>
  </div>

  <div className="sellersContainer grid">
    {/*1. Single seller */}
    <div data-aos='fade-up'className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={img1} alt="" className='img' />
      </div>
      <span className="info">
        <h4 className="name">
          Toyota
        </h4>
        <p>From $40k</p>
      </span>
    </div>
    {/*2. Single seller */}
    <div data-aos='fade-up' className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={img2} alt="" className='img' />
      </div>
      <span className="info">
        <h4 className="name">
          Audi
        </h4>
        <p>From $40k</p>
      </span>
    </div>
    {/* 3.Single seller */}
    <div data-aos='fade-up' className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={img3} alt="" className='img' />
      </div>
      <span className="info">
        <h4 className="name">
        Mercedes Benz
        </h4>
        <p>From $40k</p>
      </span>
    </div>
    {/* 4. Single seller */}
    <div data-aos='fade-up' className="singleSeller flex">
        <div className="imgDiv flex">
          <img src={img4} alt="" className='img' />
        </div>
        <span className="info">
          <h4 className="name">
          Volkswagen
          </h4>
          <p>From $40k</p>
        </span>
      </div>
    {/*5. Single seller */}
    <div data-aos='fade-up' className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={img5} alt="" className='img' />
      </div>
      <span className="info">
        <h4 className="name">
          Honda
        </h4>
        <p>From $40k</p>
      </span>
    </div>
    {/*6. Single seller */}
    <div data-aos='fade-up' className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={img6} alt="" className='img' />
      </div>
      <span className="info">
        <h4 className="name">
          Nissan
        </h4>
        <p>From $40k</p>
      </span>
    </div>

  </div>
</div>
    </div>
  )
}

export default Sellers




