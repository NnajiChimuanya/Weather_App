const express = require("express")
const unirest = require("unirest");

const app = express()





app.get("/", (req, res) => {

    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather").query({
	"q": "London,uk",
	"lat": "0",
	"lon": "0",
	"callback": "test",
	"id": "2172797",
	"lang": "null",
	"units": "imperial",
	"mode": "xml"
}).headers({
	"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
	"X-RapidAPI-Key": "97592c4b5cmsh55ce5da302b5987p1675abjsnde3bd98cedf3",
	"useQueryString": true
}).end(function (result) {
	if (res.error) throw new Error(res.error);
    res.send(result.body)
	console.log(result.body);
});

  
})



app.listen(3000, () => console.log("Listening at port"))