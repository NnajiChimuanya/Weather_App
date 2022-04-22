const unirest = require("unirest");

const req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

req.query({
	"q": "dallas, texas",
	"lat": "0",
	"lon": "0",
	"callback": "test",
	"id": "2172797",
	"lang": "null",
	"units": "imperial",
	"mode": "xml"
});

req.headers({
	"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
	"X-RapidAPI-Key": "97592c4b5cmsh55ce5da302b5987p1675abjsnde3bd98cedf3",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});