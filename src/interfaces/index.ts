export interface propId {
    propId: Number
  }
  
export interface propData extends propId{
    propName: string,
    price: string,
    stateAbbr: string,
    address: string,
    bedCount: number,
    bathCount: number,
    length: number,
    breadth: number,
    category: 'Houses' | 'Apartments',
    availableFrom: Date
  }

export interface FilterBools {
    location: boolean,
    date: boolean,
    price: boolean,
    propType: boolean,
  }
  
export interface FilterActions {
    type: 'location' | 'date' | 'price' | 'propType' | 'reset',
    value?: boolean
  }

export interface FilterFieldsManipulation {
  selectedLocations: Set<string>,
  setSelectedLocations: React.Dispatch<React.SetStateAction<Set<string>>>,
  selectedPriceRange: {from: null | Number, to: null | Number},
  setselectedPriceRange: React.Dispatch<React.SetStateAction<{from: null | Number, to: null | Number}>>,
  selectedDate: Date | undefined,
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
  selectedCategory: 'Houses' | 'Apartments' | null,
  setSelectedCategory: React.Dispatch<React.SetStateAction<'Houses' | 'Apartments' | null>>,
  priceRangeSlider: React.MutableRefObject<null>,
}