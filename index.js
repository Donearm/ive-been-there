const _ = require('lodash')

const countries = require('./countries.json')

const visitedCountries = _.filter(countries, {"visited": true})
const livedInCountries = _.filter(countries, {"lived": true})
const airportCountries = _.filter(countries, {"airport": true})
const wantToGoCountries = _.filter(countries, {"want-to-go": true})

console.log('')
console.log('Countries visited: ', visitedCountries.length)
console.log('Lived in: ', livedInCountries.length)
console.log('Passed through airport: ', airportCountries.length)
console.log('Wants to visit someday: ', wantToGoCountries.length)
