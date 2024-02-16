require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authrouter = require("./router/auth-router");
const contactrouter = require("./router/contact-router")
const adminrouter = require("./router/admin-router");
const connectDb = require("./utils/db");
const corsoption = {
    origin : "http://localhost:3000",
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials : true, 
}
app.use(cors(corsoption))
app.use(express.json());
app.use("/api/auth",authrouter);
app.use("/api/form",contactrouter);
app.use("/api/admin",adminrouter);
const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT , ()=>{
        console.log( `Server is running on ${PORT}`);
    })
})
