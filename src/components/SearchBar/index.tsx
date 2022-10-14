import React from 'react'
import { BsSearch } from 'react-icons/bs';
import './index.css'

const SearchBar = () => {
  return (
    <div className='search-bar-container'>
        <input className="search-bar" type="text" placeholder='Search with Search Bar'/>
        <span className='search-bar-icon'><BsSearch className='search-bar-icon-bsicon'/></span>
    </div>
  )
}

export default SearchBar