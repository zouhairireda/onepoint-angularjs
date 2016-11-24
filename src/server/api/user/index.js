const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/login', authController.loginAction);
router.get('/logout', authController.logoutAction);

module.exports = router;
