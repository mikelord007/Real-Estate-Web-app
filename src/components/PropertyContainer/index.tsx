import React, { useEffect, useState } from 'react'
import PropertyCard from '../PropertyCard'
import {propId, propData} from '../../interfaces'
import './index.css'

const PropertyContainer: React.FC<{propIds: propId[], propData: propData[], setfilteredDataIds?: React.Dispatch<React.SetStateAction<propId[] | null>>}> = ({propIds, propData, setfilteredDataIds}) => {

  const [cachedProps, setcachedProps] = useState<propId[]>(localStorage.getItem('favouriteProps')?JSON.parse(localStorage.getItem('favouriteProps')).favs:[])

  const setCache = (propId: propId, action: 'add' | 'remove') => {

    if(action === 'add'){
      setcachedProps([...cachedProps,propId])
      localStorage.setItem('favouriteProps',JSON.stringify({favs: [...cachedProps,propId]}))
    }
    else {
      setcachedProps(cachedProps.filter(e => (e !== propId)))
      localStorage.setItem('favouriteProps',JSON.stringify({favs: cachedProps.filter(e => (e !== propId))}))
    }

  }

  if(propData?.length === 0){
    return(<div>No Properties to show</div>)
  }

  if(propData)
  return (
    <div className='properties'>
        {propIds.map( id => {
            const {propId, price, propName, address, bathCount, bedCount, breadth, length, availableFrom, category, stateAbbr} = propData?.find( e => e.propId === id)
            return <PropertyCard price={price} propName={propName} address={address} bathCount={bathCount} bedCount={bedCount} breadth={breadth} propId = {propId} length={length} key={propId} availableFrom={availableFrom} category={category} stateAbbr={stateAbbr} cachedProps={cachedProps} setCache={setCache}/>
        })}
    </div>
  )

  else
  return (
    <h1>Loading</h1>
  )
}

export default PropertyContainer