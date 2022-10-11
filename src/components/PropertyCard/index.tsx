import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { GiBathtub } from 'react-icons/gi';
import { BiArea } from 'react-icons/bi';

const PropertyCard: React.FC = () => {
  return (
    <div className='prop-card'>
      <div className='prop-image-container'>
        <img src={'www.exapmle.com'} alt="" />
      </div>
      <div className="prop-body">
        <div className="prop-details">
          <div>$2,095/month</div>
          <div>Palm Harbor</div>
          <div>2699 Green Valley, Highland Lake, FL</div>
          <button className="heart-prop">
            <AiOutlineHeart className="heart-prop-icon" />
          </button>
        </div>
        <div className="quick-specs">
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <BiBed className='quikc-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              3 Beds
            </div>
          </div>
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <GiBathtub className='quikc-spec-icon'/>
            </span>
            <div className='quick-spec-name'>
              2 Bathrooms
            </div>
          </div>
          <div className='quick-spec'>
            <span className='quick-spec-icon-holder'>
              <BiArea className='quikc-spec-icon'/>
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