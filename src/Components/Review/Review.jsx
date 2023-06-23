import React , {useEffect} from 'react'
import './Review.css'

// imported icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

// imported image
import car1 from '../../image/part1.jpg'
import user1 from '../../image/user1.jpg'
import car2 from '../../image/part2.jpg'
import user2 from '../../image/user2.jpg'
import car3 from '../../image/part3.jpg'
import user3 from '../../image/user3.jpg'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Review = () => {
// lets initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
  )
  },[])



  return (
    <div className='review section'>
      <div className="setContainer container">
        <div data-aos='fade-up'className="setHeading flex">
          <h3 className="setTitle">
            Recent Reviews
          </h3>
          
          <div className="navBtns flex">
            <BsArrowLeftShort className= 'icon leftIcon' />
            <BsArrowRightShort classNameicon= 'icon rightIcon'/>
          </div>
        </div>

        {/* review container */}
        <div className="reviewContainer grid">
          {/*1. Single review */}
          <div data-aos='fade-up' className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Cadiallac
            </h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, confortable , and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                <img src={user1} alt="Reviewer Image"/>
                </div>
                 <div className="aboutReviewer">
                 <span className="name">
                  Karen Rose
                  </span>
                  <p>Chief Editor</p>
              </div>
              </div>
            <div className="rightDiv flex">
              <AiFillStar className="icon"/>
              <blockquote>4.84</blockquote>
            </div>
            </div>
          </div>
          {/*2. Single review */}
          <div data-aos='fade-up' className="singleReview grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
            Velocity GT
            </h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, confortable , and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                <img src={user2} alt="Reviewer Image"/>
                </div>
                 <div className="aboutReviewer">
                 <span className="name">
                  Lucas Hoover
                  </span>
                  <p>Manager Atlantis</p>
              </div>
              </div>
            <div className="rightDiv flex">
              <AiFillStar className="icon"/>
              <blockquote>4.84</blockquote>
            </div>
            </div>
          </div>
          {/*3. Single review */}
          <div data-aos='fade-up' className="singleReview grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Apex Aeon
            </h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, confortable , and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                <img src={user3} alt="Reviewer Image"/>
                </div>
                 <div className="aboutReviewer">
                 <span className="name">
                 Daecon Hladynets
                  </span>
                  <p>Analytics Head</p>
              </div>
              </div>
            <div className="rightDiv flex">
              <AiFillStar className="icon"/>
              <blockquote>4.7</blockquote>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review





 

 