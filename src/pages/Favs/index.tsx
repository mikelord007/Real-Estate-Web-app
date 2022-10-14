import React, { useEffect, useState } from 'react'
import {propId, propData} from '../../interfaces'
import FilterSection from '../../components/FilterSection'
import Navbar from '../../components/Navbar'
import PropertyContainer from '../../components/PropertyContainer'
import SearchBar from '../../components/SearchBar'
import states from 'us-state-converter'

const Favs: React.FC<{propData: propData[] | null}> = ({propData}) => {
  
  const cachedData = localStorage.getItem('favouriteProps')?JSON.parse(localStorage.getItem('favouriteProps')).favs:[]

  const [favData, setfavData] = useState<propData[] | null>(propData?.filter(e => cachedData.includes(e.propId)))

  const [filteredDataIds, setfilteredDataIds] = useState<propId[] | null>(favData?.map(e => e.propId))

  const [locationOptions, setlocationOptions] = useState(new Set(favData?.map(e => states(e.stateAbbr).name )))

  useEffect(() => {
    const fav = propData?.filter(e => cachedData.includes(e.propId))
    setfavData(fav)
    setfilteredDataIds(fav?.map(e => e.propId))
    setlocationOptions(new Set(fav?.map(e => states(e.stateAbbr).name )))
  },[propData])

  return (
    <>
      <Navbar/>
      <div className='dashboard page-wrapper'>
        <div className='header'>
          <h1 className='title'>Your favourite properties</h1>
          <SearchBar />
        </div>
        <FilterSection setfilteredDataIds={setfilteredDataIds} propData={favData} locationOptions = {locationOptions}/>
        <PropertyContainer setfilteredDataIds={setfilteredDataIds} propData={favData} propIds={filteredDataIds}/>
      </div>
    </>
  )
}

export default Favs