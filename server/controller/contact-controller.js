const contact = require("../model/contact-model");

const getcontact = async (req,res)=>{
    try {
        const {name, email, telephone, subject, message} = req.body;
        const contactcreated = await contact.create({name,email,telephone,subject,message});
        res.status(201).json({message:"Contact created",data:contactcreated});
    } catch (error) {
        console.log(error);
    }
}
module.exports=getcontact; 