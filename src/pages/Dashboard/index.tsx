import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import FilterSection from '../../components/FilterSection'
import SearchBar from '../../components/SearchBar';
import PropertyContainer from '../../components/PropertyContainer';
import {propId, propData} from '../../interfaces'
import states from 'us-state-converter'
import './index.css'

const Dashboard: React.FC<{propData: propData[] | null}> = ({propData}) => {

  const locationOptions = new Set(propData?.map(e => states(e.stateAbbr).name ))

  const [filteredDataIds, setfilteredDataIds] = useState<propId[] | null>(null)

  const propIds = filteredDataIds ? filteredDataIds : Array.from(Array.from({length: 9}, (_, i) => i + 1))

  return (
    <>
      <Navbar/>
      <div className='dashboard page-wrapper'>
        <div className='header'>
          <h1 className='title'>Search Properties to rent</h1>
          <SearchBar />
        </div>
        <FilterSection setfilteredDataIds={setfilteredDataIds} propData={propData} locationOptions = {locationOptions}/>
        <PropertyContainer propData={propData} propIds={propIds}/>
      </div>
    </>
  ) 
}

export default Dashboard