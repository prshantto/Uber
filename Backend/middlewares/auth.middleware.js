const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
// const BlacklistTokenModel = require('../models/blacklistToken.model')


// middleware to verify user token


module.exports.verifyUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "Unauthorized-invalid token"});
    }

    const isBlacklisted = UserModel.findOne({token : token});
    if(!isBlacklisted){
        return res.status(401).json({message: "Unauthorized-token is blacklisted"});
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        res.status(401).json({message: "Unauthorized-invalidID"});
    }
}