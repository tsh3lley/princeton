var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'home' });
});

router.get('/vote_screen', function(req, res, next) {
  	res.render('vote_screen', { title: 'voting' });
});

module.exports = router;
