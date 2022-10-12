import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { GiBathtub } from 'react-icons/gi';
import { BiArea } from 'react-icons/bi';
import PropImg from '../../assets/PropertyImgSample.jpg'
import './index.css'

const PropertyCard: React.FC = () => {
  
  return (
    <div className='prop-card'>
      <div className='prop-image-container'>
        <img src={PropImg} className='prop-image' alt="" />
      </div>
      <div className="prop-body">
        <div className="prop-details">
          <div className="prop-price">$2,095<span className="prop-price-month"> /month</span></div>
          <div className="prop-name">Palm Harbor</div>
          <div className="prop-address">2699 Green Valley, Highland Lake, FL</div>
          <button className="heart-prop">
            <AiOutlineHeart className="heart-prop-icon" />
          </button>
        </div>
        <div className="prop-separator"/>
        <div className="quick-specs">
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <BiBed className='quick-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              3 <span className='quick-spec-desc'>Beds</span>
            </div>
          </div>
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <GiBathtub className='quick-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              2 <span className='quick-spec-desc'>Bathrooms</span>
            </div>
          </div>
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <BiArea className='quick-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              5 x 7 m<sup>2</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard