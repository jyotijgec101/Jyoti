const mongoose = require("mongoose");
const certificateSchema = mongoose.Schema(
    {
        name : {
            type:String,
            required:true,
        },
        certinumber: {
            type:Number,
            required: true ,
        },
        // printed: {
        //     type:Boolean,
        //     required: true,
        // }
    }
)
const  Certificate= mongoose.model('Certificate',certificateSchema);
module.exports=Certificate;