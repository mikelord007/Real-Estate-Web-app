import React from 'react'
import Navbar from '../../components/Navbar'
import { BsSearch } from 'react-icons/bs';
import { BsCalendarRangeFill } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { MdAddLocationAlt } from 'react-icons/md';
import PropertyCard from '../../components/PropertyCard'
import './index.css'

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className='dashboard page-wrapper'>
        <div className='header'>
          <h1 className='title'>Search Properties to rent</h1>
          <div className='search-bar-container'>
            <input className="search-bar" type="text" placeholder='Search with Search Bar'/>
            <span className='search-bar-icon'><BsSearch className='search-bar-icon-bsicon'/></span>
          </div>
        </div>
        <div className='search-filters'>
          <div className='filter-item location'>
            <div className='filter-title'>Location</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                New York, USA
              </span>
              <button className='filter-symbol'>
                <MdAddLocationAlt className="filter-symbol-icon"/>
              </button>
            </div>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item move-in-date'>
            <div className='filter-title'>When</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                Select Move-in Date
              </span>
              <button className='filter-symbol'>
                <BsCalendarRangeFill className="filter-symbol-icon calendar-icon"/>
              </button>
            </div>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item price'>
            <div className='filter-title'>Price</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                $500 - $2500
              </span>
              <button className='filter-symbol'>
                <IoIosArrowUp className="filter-symbol-icon"/>
              </button>
            </div>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item prop-type'>
            <div className='filter-title'>Property type</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                Houses
              </span>
              <button className='filter-symbol'>
                <IoIosArrowUp className="filter-symbol-icon"/>
              </button>
            </div>
          </div>
          <button className='filter-search-button'>Search</button>
        </div>
        <div className='properties'>
          <PropertyCard/>
        </div>
      </div>
    </>
  ) 
}

export default Dashboard