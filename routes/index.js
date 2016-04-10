var express = require('express');
var router = express.Router();

var options = {
	    root: __dirname + '/../public/'
	  };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.htm', options, function (err) {
	    if (err) {
	        console.log(err);
	        res.status(err.status).end();
	      }
	      else {
	        console.log('Sent: index.htm');
	      }
	    });
});

module.exports = router;
