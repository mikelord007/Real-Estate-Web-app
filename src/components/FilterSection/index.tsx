import React, { useEffect, useReducer, useRef, useState } from 'react'
import { BsCalendarRangeFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { MdAddLocationAlt } from 'react-icons/md';
import { DayPicker } from 'react-day-picker';
import 'webrouk-custom-range'
import 'react-day-picker/dist/style.css';
import './index.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'webrouk-custom-range': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface FilterBools {
  location: boolean,
  date: boolean,
  price: boolean,
  propType: boolean,
}

interface FilterActions {
  type: 'location' | 'date' | 'price' | 'propType' | 'reset',
  value?: boolean
}

const reducer = (state: FilterBools, action: FilterActions) => {
  if (action.type === 'reset'){
    return {location: false, date: false, price: false, propType: false }
  }
  else
  return {...state,[action.type]: action.value}
};

const initialFilterBools = {
  location: false,
  date: false,
  price: false,
  propType: false
}

const FilterSection: React.FC = () => {

  const [showFilters, dispatch] = useReducer(reducer, initialFilterBools);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date);
  const filterRefs = useRef<Array<HTMLUListElement | HTMLDivElement | null>>([])
  const filterBtnRefs = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if( showFilters.location && !filterRefs.current[0]?.contains(e.target) && !filterBtnRefs.current[0]?.contains(e.target) ||
      showFilters.date && !filterRefs.current[1]?.contains(e.target) && !filterBtnRefs.current[1]?.contains(e.target) ||
      showFilters.price && !filterRefs.current[2]?.contains(e.target) && !filterBtnRefs.current[2]?.contains(e.target) ||
      showFilters.propType && !filterRefs.current[3]?.contains(e.target) && !filterBtnRefs.current[3]?.contains(e.target)) {
        dispatch({type: 'reset'})
      }
    }
    document.body.addEventListener('click',clickListener)

    return () => document.body.removeEventListener('click',clickListener)
  },[showFilters])

  return (
    <div className={'search-filters'}>
          <div className='filter-item location'>
            <div className='filter-title'>Location</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                New York, USA
              </span>
              <button ref={(r: any) => filterBtnRefs.current[0] = r} className='filter-symbol' onClick={() => {dispatch({type: 'location', value: !showFilters.location})}}>
                <MdAddLocationAlt className="filter-symbol-icon"/>
              </button>
            </div>
            <ul ref={(r) => filterRefs.current[0] = r} className={`filter-item-values filter-item-multiselect ${showFilters.location?'':'dont-show'}`}>
              <li className="filter-item-value">
                <input id="r1" className="filter-item-checkbox" type="checkbox" />
                <label className="filter-item-label" htmlFor="r1">New York, USA</label>
              </li>
              <li className="filter-item-value">
                <input id="r2" className="filter-item-checkbox" type="checkbox" />
                <label className="filter-item-label" htmlFor="r2">New York, USA</label>
              </li>
              <li className="filter-item-value">
                <input id="r3" className="filter-item-checkbox" type="checkbox" />
                <label className="filter-item-label" htmlFor="r3">New York, USA</label>
              </li>
              <li className="filter-item-value">
                <input id="r4" className="filter-item-checkbox" type="checkbox" />
                <label className="filter-item-label" htmlFor="r4">New York, USA</label>
              </li>
              <li className="filter-item-value">
                <input id="r5" className="filter-item-checkbox" type="checkbox" />
                <label className="filter-item-label" htmlFor="r5">New York, USA</label>
              </li>
            </ul>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item move-in-date'>
            <div className='filter-title'>Move In Date</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                {selectedDate?.toDateString()}
              </span>
              <button ref={(r: any) => filterBtnRefs.current[1] = r} className='filter-symbol' onClick={() => {dispatch({type: 'date', value: !showFilters.date})}}>
                <BsCalendarRangeFill className="filter-symbol-icon calendar-icon"/>
              </button>
            </div>
            <div ref={(r) => filterRefs.current[1] = r} className={`filter-item-values filter-item-dateselect ${showFilters.date?'':'dont-show'}`}>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(d) => {setSelectedDate(d)}}
              />
            </div>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item price'>
            <div className='filter-title'>Price</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                $500 - $2500
              </span>
              <button ref={(r: any) => filterBtnRefs.current[2] = r} className='filter-symbol' onClick={() => {dispatch({type: 'price', value: !showFilters.price})}}>
                <IoIosArrowDown className="filter-symbol-icon"/>
              </button>
            </div>
            <div ref={(r) => filterRefs.current[2] = r} className={`filter-item-values filter-item-rangeSelect ${showFilters.price?'':'dont-show'}`}>
              <webrouk-custom-range start="300" end="7000" from="500" to="3000" prefix-char="$">
                <input type="hidden" />
              </webrouk-custom-range>
            </div>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item prop-type'>
            <div className='filter-title'>Property type</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                Houses
              </span>
              <button ref={(r: any) => filterBtnRefs.current[3] = r} className='filter-symbol' onClick={() => {dispatch({type: 'propType', value: !showFilters.propType})}}>
                <IoIosArrowDown className="filter-symbol-icon"/>
              </button>
              <ul ref={(r) => filterRefs.current[3] = r} className={`filter-item-values filter-item-select ${showFilters.propType?'':'dont-show'}`}>
                <li className="filter-item-value">
                  <input id="rad1" name="propType" className="filter-item-radio" type="radio" />
                  <label className="filter-item-label" htmlFor="rad1">Houses</label>
                </li>
                <li className="filter-item-value">
                  <input id="rad2" name="propType" className="filter-item-radio" type="radio" />
                  <label className="filter-item-label" htmlFor="rad2">Apartments</label>
                </li>
            </ul>
            </div>
          </div>
          <button className='filter-search-button'>Search</button>
        </div>
  )
}

export default FilterSection