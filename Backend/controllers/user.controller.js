
const UserModel = require('../models/user.model.js');
const userService = require('../services/user.service.js');
const { validationResult } = require('express-validator');

module.exports.registerUser = async function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const hashedPassword =await UserModel.hashPassword(password);

    const user = await userService.createUser({
        fullname,
        email,
        password: hashedPassword
    });

    const token = await user.generateAuthToken();
    console.log(user);
    res.status(201).json({ user, token });
}