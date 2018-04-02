const _ = require('lodash')

const countries = require('./countries.json')

console.log('')
console.log('Countries visited: ', _.filter(countries, {visited: true}).length)
console.log('Lived in: ', _.filter(countries, {lived: true}).length)
console.log('Passed through airport: ', _.filter(countries, {"airport": true}).length)
console.log('Wants to visit someday: ', _.filter(countries, {"want-to-go": true}).length)
