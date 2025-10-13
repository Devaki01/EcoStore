const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateSignup, validateSignin } = require('../middleware/validateUser');

// Signup route
router.post('/signup', validateSignup, authController.signup);

// Signin route
router.post('/signin', validateSignin, authController.signin);

module.exports = router;