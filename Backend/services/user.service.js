const UserModel = require ('../models/user.model')

module.exports.createUser = async ({fullname, email, password}) => {
    if(!fullname || !email || !password){
        throw new Error('All fields are required')
    }

    const user = await UserModel.create({
        fullname:{
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password
    });

    return user;
}