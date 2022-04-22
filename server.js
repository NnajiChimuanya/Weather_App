const express = require("express")
const unirest = require("unirest");
const bodyParser = require("body-parser")

const urlencodedParser = bodyParser.urlencoded({ extended: false })

express.json()

const app = express()
app.set("view engine", "ejs")


app.get("/", (req, res) => res.render("home"))

app.get("/place", (req, res) => {
	res.render("place")
})


app.get("/current", urlencodedParser, (req, res) => {

    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather").query({
	"q": req.body.place,
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