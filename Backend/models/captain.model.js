const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            required: true,
            type: String,
            minlength: [3, "First name should be atleast 3 characters long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name should be atleast 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: [4, "Password should be atleast 8 characters long"],
        select: false
    },
    vehicle: {
        color:{
            type: String,
            required: true,
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, "Capacity should be atleast 1 person"],
        },
        plate:{
            type: String,
            required: true,
        },
        type:{
            type: String,
            required: true,
            enum: ["Sedan", "SUV", "Van", "Luxury"]
        }
    },
    location: {
        longitude:{
            type: Number,
        },
        latitude:{
            type: Number,
        }
    },
    status:{
        type: String,
        default: "offline",
    }
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

// create model class
const CaptainModel = mongoose.model("Captains", captainSchema)
module.exports = CaptainModel;