const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")
const express = require("express");
const connection = require("./db/connection.db.js");
connection();
const app = express();
const UserRoutes = require("./routes/user.routes.js")
const cookieParser = require("cookie-parser")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/", (req,res)=>{
    res.send("server running...");
})
app.use("/user", UserRoutes)



module.exports = app;