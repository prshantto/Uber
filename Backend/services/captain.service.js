
const CaptainModel = require('../models/captain.model')

module.exports.createCaptain = async function({fullname, email, password, vehicle, location, status}){
    if(!fullname.firstname ||!email ||!password ||!vehicle ){
        throw new Error('All fields are required')
    }

    const captain = await CaptainModel.create({
        fullname:{
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle:{
            color: vehicle.color,
            capacity: vehicle.capacity,
            plate: vehicle.plate,
            type: vehicle.type,
        },
        location,
        status,
    });
    return captain;
}

