
const UserModel = require('../models/user.model.js');
const userService = require('../services/user.service.js');
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model.js')

module.exports.registerUser = async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await UserModel.findOne({email: email})
    if(isUserAlready){
        return res.status(400).json({message: "Email already exists"})
    }

    const hashedPassword =await UserModel.hashPassword(password);

    const user = await userService.createUser({
        fullname,
        email,
        password: hashedPassword
    });

    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
}

module.exports.loginUser = async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email}).select('+password');

    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = await user.generateAuthToken();
    res.cookie('token', token);
    res.json({ user, token });
}

module.exports.getUserProfile = async function(req, res){
    res.status(200).json(req.user)
}

module.exports.logoutUser = async function(req, res){
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await BlacklistTokenModel.create({ token });

    res.json({ message: 'Logged out successfully' });
}