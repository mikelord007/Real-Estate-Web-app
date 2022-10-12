import React from 'react'
import Navbar from '../../components/Navbar'
import { BsSearch } from 'react-icons/bs';
import PropertyCard from '../../components/PropertyCard'
import FilterSection from '../../components/FilterSection'
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
        <FilterSection />
        <div className='properties'>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
        </div>
      </div>
    </>
  ) 
}

export default Dashboard