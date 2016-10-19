const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ message: 'ngAdvancedTraining Web API'});
});

module.exports = router;