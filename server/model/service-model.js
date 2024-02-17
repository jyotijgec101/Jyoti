const mongoose = require("mongoose");
const ServiceSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    
});


const Service = new mongoose.model("Service",ServiceSchema);
module.exports = Service;