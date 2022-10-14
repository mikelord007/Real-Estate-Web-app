import React,{useState, useRef, useReducer} from 'react'
import { FilterActions, FilterBools } from '../../interfaces';


export const useFilterFieldsManipulation = () => {

  const [selectedLocations, setSelectedLocations] = useState<Set<string>>(new Set([]))
  const [selectedPriceRange, setselectedPriceRange] = useState<{from: null | Number, to: null | Number}>({from: null, to: null})
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date);
  const [selectedCategory, setSelectedCategory] = useState<'Houses' | 'Apartments'>('Houses')
  const priceRangeSlider = useRef(null)

  return {
    selectedLocations,
    setSelectedLocations,
    selectedPriceRange,
    setselectedPriceRange,
    selectedDate,
    setSelectedDate,
    selectedCategory,
    setSelectedCategory,
    priceRangeSlider,
  }
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

export const useFilterManagement = () => {

  const [showFilters, dispatch] = useReducer(reducer, initialFilterBools);
  const filterRefs = useRef<Array<HTMLUListElement | HTMLDivElement | null>>([])
  const filterBtnRefs = useRef<Array<HTMLButtonElement | null>>([])

  return (
    {
      showFilters,
      dispatch,
      filterRefs,
      filterBtnRefs,
    }
  )
}