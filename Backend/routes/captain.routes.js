const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware')

// Importing routes

router.post('/register', [
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be 3 characters long"),
    body('email').isEmail().withMessage("Enter a valid email address"),
    body('password').isLength({min:3}).withMessage("Password should be 3 characters long"),
],
 captainController.registerCaptain 
);

router.post('/login', [
    body('email').isEmail().withMessage("Enter a valid email address"),
    body('password').isLength({min:3}).withMessage("Password should be 3 characters long"),
], captainController.loginCaptain)

router.get('/profile', authMiddleware.verifyCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.verifyCaptain, captainController.logoutCaptain)

module.exports = router;