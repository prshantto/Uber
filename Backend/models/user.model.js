const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            required: true,
            type: String,
            minlenght: [3, "First name should be atleast 3 characters long"]
        },
        lastname: {
            type: String,
            minlenght: [3, "First name should be atleast 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: [4, "Password should be atleast 8 characters long"],
        select: false
    },
    socketID:{
        type: String
    }
});

userSchema.methods.generateAuthToken = function(){
    const Token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return Token;
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;