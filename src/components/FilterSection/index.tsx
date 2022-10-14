import React, { useEffect, useReducer, useRef, useState } from 'react'
import { BsCalendarRangeFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { MdAddLocationAlt } from 'react-icons/md';
import { DayPicker } from 'react-day-picker';
import { propId, propData, FilterFieldsManipulation, FilterManagement } from '../../interfaces';
import { useFilterFieldsManipulation, useFilterManagement } from '../../pages/Dashboard/customFilterHook';
import states from 'us-state-converter'
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

interface FilterSection {
  setfilteredDataIds: React.Dispatch<React.SetStateAction<propId[] | null>>,
  locationOptions: Set<string>,
  propData: propData[],
}

const FilterSection: React.FC<FilterSection> = ({ locationOptions, setfilteredDataIds, propData}) => {

  const {selectedLocations, setSelectedLocations, selectedPriceRange, setselectedPriceRange, selectedDate, setSelectedDate, selectedCategory, setSelectedCategory, priceRangeSlider } = useFilterFieldsManipulation()
  
  const {showFilters, dispatch, filterRefs, filterBtnRefs} = useFilterManagement()
  
  const filterData = () => {
    const filteredIds = propData.filter(prop => {

      if (selectedLocations.size === 0){
        return true
      }

      return selectedLocations.has(states(prop.stateAbbr).name)

    }).
    filter(prop => {

      if(!selectedPriceRange.from)
        return true;

      return (Number(prop.price.slice(1)) >= Number(selectedPriceRange.from) && Number(prop.price.slice(1)) <= Number(selectedPriceRange.to))

    }).
    filter(prop => {

      return(selectedCategory === prop.category)}).
    filter(prop => {

      if(!prop.availableFrom)
        return true

      return selectedDate <= new Date(prop.availableFrom)
    }).
    map((prop) => (prop.propId)).slice(0,9)

    console.log("filtreed: ", filteredIds)

    setfilteredDataIds(filteredIds)
  }
  
  const toggleLocationCheckBox = (value: string) => { 
    if(!selectedLocations.has(value))
      setSelectedLocations(new Set([...selectedLocations, value]));
    else { 
      setSelectedLocations(prev => new Set([...prev].filter(x => x !== value)))
    }} 

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
                {selectedLocations.size !== 0? Array.from(selectedLocations.values()).join(', '): 'Select Location'}
              </span>
              <button ref={(r: any) => filterBtnRefs.current[0] = r} className='filter-symbol' onClick={() => {dispatch({type: 'location', value: !showFilters.location})}}>
                <MdAddLocationAlt className="filter-symbol-icon"/>
              </button>
            </div>
            <ul ref={(r) => filterRefs.current[0] = r} className={`filter-item-values filter-item-multiselect ${showFilters.location?'':'dont-show'}`}>
              {
                Array.from(locationOptions.values()).map( value => (
                  <li className="filter-item-value" key={value} onClick={() => toggleLocationCheckBox(value)}>
                    <input className="filter-item-checkbox" onChange={() => {}} checked={selectedLocations.has(value)} type="checkbox"/>
                    <label className="filter-item-label" >{value}</label>
                  </li>
                ))
              }
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
                {selectedPriceRange.from?`$${selectedPriceRange.from} - $${selectedPriceRange.to}`: 'Select Price'}
              </span>
              <button ref={(r: any) => filterBtnRefs.current[2] = r} className='filter-symbol' onClick={() => {dispatch({type: 'price', value: !showFilters.price})}}>
                <IoIosArrowDown className="filter-symbol-icon"/>
              </button>
            </div>
            <div ref={(r) => filterRefs.current[2] = r} className={`filter-item-values filter-item-rangeSelect ${showFilters.price?'':'dont-show'}`}>
              <webrouk-custom-range ref={priceRangeSlider} onTouchMove={(e) => setselectedPriceRange({from: e.target._fromVal, to: e.target._toVal})} onClick={(e) => setselectedPriceRange({from: e.target._fromVal, to: e.target._toVal})} start="300" end="7000" from="500" to="3000" prefix-char="$">
                <input type="hidden" />
              </webrouk-custom-range>
            </div>
          </div>
          <div className='filter-item-separator' />
          <div className='filter-item prop-type'>
            <div className='filter-title'>Property type</div>
            <div className='filter-value'>
              <span className='filter-value-text'>
                {selectedCategory?selectedCategory:"Select Type"}
              </span>
              <button ref={(r: any) => filterBtnRefs.current[3] = r} className='filter-symbol' onClick={() => {dispatch({type: 'propType', value: !showFilters.propType})}}>
                <IoIosArrowDown className="filter-symbol-icon"/>
              </button>
              <ul ref={(r) => filterRefs.current[3] = r} className={`filter-item-values filter-item-select ${showFilters.propType?'':'dont-show'}`}>
                <li className="filter-item-value" onClick={() => setSelectedCategory('Houses')}>
                  <input id="rad1" name="propType" checked={selectedCategory === 'Houses'} onChange={() => {}} className="filter-item-radio" type="radio" />
                  <label className="filter-item-label" htmlFor="rad1">Houses</label>
                </li>
                <li className="filter-item-value" onClick={() => setSelectedCategory('Apartments')}>
                  <input id="rad2" name="propType" checked={selectedCategory === 'Apartments'} onChange={() => {}} className="filter-item-radio" type="radio" />
                  <label className="filter-item-label" htmlFor="rad2">Apartments</label>
                </li>
              </ul>
              </div>
            </div>
            <button className='filter-search-button' onClick = {() => filterData()}>Search</button>
          </div>
  )
}

export default FilterSection