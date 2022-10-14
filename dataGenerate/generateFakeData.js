import { faker } from '@faker-js/faker';
import fs from 'fs'

//To generate: 
//prop name
//price
//address: number street, area, state
//bed count
//bath count
//length
//breadth

let id = 1;

const generateFakeData = () => {
    const propId = id++;
    const propName = faker.address.streetName()
    const price = faker.finance.amount(300, 7000, 0, '$')
    const stateAbbr = faker.address.stateAbbr()
    const address = [faker.address.streetAddress(false),faker.address.cityName(),stateAbbr].join(', ')
    const bedCount = faker.datatype.number({ max: 5, min: 2})
    const bathCount = faker.datatype.number({ max: bedCount, min: 2})
    const length = faker.datatype.number({ max: 10, min: 3})
    const breadth = faker.datatype.number({ max: length, min: 2})
    const category = faker.datatype.number({ max: 1, min: 0})?'Houses':'Apartments'
    const availableFrom = faker.date.between('2022-10-14T00:00:00.000Z', '2022-10-24T00:00:00.000Z')

    return {
        propId,
        propName,
        price,
        stateAbbr,
        address,
        bedCount,
        bathCount,
        length,
        breadth,
        category,
        availableFrom,
    }
}

const arrayOfProps = Array.from({length: 80}, generateFakeData)

// console.log(arrayOfProps)

fs.writeFile('../src/data/fakePropData.json', JSON.stringify({props: arrayOfProps}), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})