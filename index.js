const chalk = require('chalk');

const countries = require('./countries.json');
const cities = require('./cities.json');

const visitedCountries = countries.filter(country => country.visited === true);
const livedInCountries = countries.filter(country => country.lived === true);
const airportCountries = countries.filter(country => country.airport === true);
const wantToGoCountries = countries.filter(country => country["want-to-go"] === true);

const visitedCities = cities.filter(function(c) {
	return c.Visited;
});

let verbose = false;
let citiesmode = false;

console.log('');
console.log('Countries visited: ', chalk.blueBright.bold(visitedCountries.length));
console.log('Lived in: ', chalk.yellowBright.bold(livedInCountries.length));
console.log('Passed through airport: ', chalk.cyanBright.bold(airportCountries.length));
console.log('Wants to visit someday: ', chalk.redBright.bold(wantToGoCountries.length));


// Check command line arguments
process.argv.forEach((val, index) => {
	if (val === "-v") {
		verbose = true;
	} else if (val === "-c") {
		citiesmode = true;
	} else {
		return true;
	}
});

// if "-v", then enable verbose mode
if (verbose === true) {
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

// if "-c", then enable showing also cities visited
if (citiesmode === true) {
	console.log('--------------------------------------');
	console.log("Cities I've visited, by country:");
	for (i = 0; i < visitedCities.length; i++) {
		console.log(chalk.whiteBright.bgBlueBright(visitedCities[i].Country), "=>", chalk.whiteBright.bgRed(visitedCities[i].Visited.length));
		for (c = 0; c < visitedCities[i].Visited.length; c++) {
			let currentCity = visitedCities[i].Visited[c];
			console.log(currentCity);
		}
		console.log('');
	}
}
