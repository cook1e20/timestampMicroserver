var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Stamp Microserver'});
});

//Check for timestamp
router.get('/:date', function(req, res, next){	
	let returnObject = {"unix":"null", "natural": "null"};
	let ans = req.params.date;
	reg = /\d{8}/g;

// check if unix, if unix time 1000
	if(reg.test(ans)){
	ans = +ans*1000
	}

	let dateTime = new Date(ans)
	//set unix time in object
	let unix = dateTime.getTime()/1000
	if (isNaN(unix)){
		res.json(returnObject);
	} else {
	returnObject.unix = unix


	const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	returnObject.natural = month[dateTime.getMonth()] + " " + dateTime.getDate() +", " + dateTime.getFullYear()


	res.json(returnObject);
	} 
});




module.exports = router;
