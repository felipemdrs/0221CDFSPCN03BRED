var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Felipe Vet',
    pets: require('../arquivo.json')
  });
});

module.exports = router;
