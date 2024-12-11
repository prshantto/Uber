const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');



router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be 3 characters long"),
    body('email').isEmail().withMessage("Enter a valid email address"),
    body('password').isLength({min:3}).withMessage("Password should be 3 characters long"),
], 
    userController.registerUser
);


module.exports = router;