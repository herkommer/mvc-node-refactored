var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product.controller');

//test = Action metod, dvs /products/test är anropet
router.get('/test', product_controller.test);

//skapa en ny post i DB
router.post('/create', product_controller.create);

router.get('/:id', product_controller.details);

router.put('/:id/update', product_controller.update);

module.exports = router;