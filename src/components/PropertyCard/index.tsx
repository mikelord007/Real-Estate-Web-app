import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { GiBathtub } from 'react-icons/gi';
import { BiArea } from 'react-icons/bi';
import PropImg from '../../assets/PropertyImgSample.jpg'
import {propData, propId} from '../../interfaces'
import './index.css'

interface PropertyCard extends propData{
  cachedProps: propId[],
  setCache: React.Dispatch<React.SetStateAction<propId[]>>
}

const PropertyCard: React.FC<PropertyCard> = ({price, propName, address, bathCount, bedCount, breadth, length, propId, cachedProps, setCache}) => {
  
  return (
    <div className='prop-card'>
      <div className='prop-image-container'>
        <img src={PropImg} className='prop-image' alt="" loading="lazing" />
      </div>
      <div className="prop-body">
        <div className="prop-details">
          <div className="prop-price">{price}<span className="prop-price-month"> /month</span></div>
          <div className="prop-name">{propName}</div>
          <div className="prop-address">{address}</div>
          <button className="heart-prop" onClick={() => {cachedProps.includes(propId)?setCache(propId,'remove'):setCache(propId,'add')}} >
            {cachedProps.includes(propId)?<AiFillHeart className="heart-prop-icon"/>:<AiOutlineHeart className="heart-prop-icon" />}
          </button>
        </div>
        <div className="prop-separator"/>
        <div className="quick-specs">
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <BiBed className='quick-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              {bedCount} <span className='quick-spec-desc'>Beds</span>
            </div>
          </div>
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <GiBathtub className='quick-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              {bathCount} <span className='quick-spec-desc'>Bathrooms</span>
            </div>
          </div>
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <BiArea className='quick-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              {length} x {breadth} m<sup>2</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard