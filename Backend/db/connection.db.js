const mongoose = require("mongoose");


const connection = () => {
    mongoose.connect(process.env.TEMP_DB_STRING).then(()=>{
        console.log("connected to database!")
        
    })
}

module.exports = connection;