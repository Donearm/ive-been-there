const _ = require('lodash');
const chalk = require('chalk');

const countries = require('./countries.json');

const visitedCountries = _.filter(countries, {"visited": true});
const livedInCountries = _.filter(countries, {"lived": true});
const airportCountries = _.filter(countries, {"airport": true});
const wantToGoCountries = _.filter(countries, {"want-to-go": true});

console.log('');
console.log('Countries visited: ', chalk.blueBright.bold(visitedCountries.length));
console.log('Lived in: ', chalk.yellowBright.bold(livedInCountries.length));
console.log('Passed through airport: ', chalk.cyanBright.bold(airportCountries.length));
console.log('Wants to visit someday: ', chalk.redBright.bold(wantToGoCountries.length));

if (process.argv[2] === "-v") {
	// Verbose mode
	console.log('--------------------------------------');
	if (visitedCountries.length > 0) {
		console.log('');
		console.log(chalk.whiteBright.bgBlueBright("I've been to:"));
		for (i = 0; i < visitedCountries.length; i++) {
			console.log(visitedCountries[i].name);
		}
	}

	if (livedInCountries.length > 0) {
		console.log('');
		console.log(chalk.black.bgYellowBright("I've lived in:"));
		for (i = 0; i < livedInCountries.length; i++) {
			console.log(livedInCountries[i].name);
		}
	}

	if (airportCountries.length > 0) {
		console.log('');
		console.log(chalk.black.bgCyanBright("I've just passed through one of the airports of:"));
		for (i = 0; i < airportCountries.length; i++) {
			console.log(airportCountries[i].name);
		}
	}

	if (wantToGoCountries.length > 0) {
		console.log('');
		console.log(chalk.whiteBright.bgRed("And I still want to go to:"));
		for (i = 0; i < wantToGoCountries.length; i++) {
			console.log(wantToGoCountries[i].name);
		}
	}
	console.log('');
}
