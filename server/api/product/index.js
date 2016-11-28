const express = require('express');
const router = express.Router();
const productListController = require('./productList.controller');

router.get('/', productListController.listAction);

module.exports = router;
