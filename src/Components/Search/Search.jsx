import React, {useEffect} from 'react'
import './Search.css'

// imported icons
import {AiOutlineSearch} from 'react-icons/ai'

// Import Aos from animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

// lets initialise Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
  )
  },[])


  return (
    <div className='search'>
      <div className="setContainer container">
        <h3 data-aos='fade-up' className="title">
          Which vehicle are you looking for?
        </h3>

        <div className="searchDiv grid">
          <input data-aos='fade-up' type="text" name="" placeholder='Type' />
          <input data-aos='fade-up' type="number" name="" placeholder='Year' />
          <input data-aos='fade-up' type="text" name="" placeholder='Model' />
          <input data-aos='fade-up' type="number" name="" placeholder='Price' />
          <button data-aos='fade-up' className="btn primaryBtn flex">
            <AiOutlineSearch className='icon'/>
            <span>
              Search
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search