const CaptainModel = require('../models/captain.model');
const BlacklistTokenModel = require('../models/blacklistToken.model')
const CaptainService = require('../services/captain.service');
const { validationResult} = require('express-validator')

module.exports.registerCaptain = async function(req,res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {fullname, email, password, vehicle, status, location} = req.body;

    const isCaptainAlready = await CaptainModel.findOne({email: email})
    if(isCaptainAlready){
        return res.status(400).json({message: "Email already exists"})
    }
    
    const hashedPassword = await CaptainModel.hashPassword(password);

    const captain = await CaptainService.createCaptain({
        fullname,
        email,
        password: hashedPassword,
        vehicle,
        location,
        status
    });

    const token = await captain.generateAuthToken();
    res.status(201).json({ captain, token });
}

module.exports.loginCaptain = async function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, status } = req.body;
    
    const captain = await CaptainModel.findOneAndUpdate({email}, {status : status}).select('+password');
    
    if (!captain ||!(await captain.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = await captain.generateAuthToken();
    res.cookie('token', token);
    res.json({ captain, token });
}

module.exports.getCaptainProfile = function(req, res){
    res.status(200).json(req.captain)
}

module.exports.logoutCaptain = async (req, res) => {
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistTokenModel.create({ token });

    res.json({ message: 'Logged out successfully' });
}