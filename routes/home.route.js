var express = require('express');
var router = express.Router();

var home_controller = require('../controllers/home.controller');

router.get('/', home_controller.home);

module.exports = router;