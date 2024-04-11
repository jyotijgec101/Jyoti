const Certificate = require("../model/certificate-model");
const postcertificate = async (req, res) => {
  try {
    const { name, certinumber } = req.body;
    const certificatecreated = await Certificate.create({
      name,
      certinumber,
    });
    res.status(201).json(certificatecreated);
  } catch (error) {
    console.log(error);
  }
};

const getcertificate = async (req, res) => {
  try {
    const  certinumber  = req.params.id;
    const certificates = await Certificate.findOne({ certinumber:certinumber });
    if (!certificates) {
      return res.status(400).json("No Certificate found");
    }
    res.status(200).json(certificates);
  } catch (error) {
    console.log("Internal Server Error");
  }
};

const deletecertificate = async(req,res)=>{
  try {
    const id = req.params.id;
    const deleted = await Certificate.deleteOne({_id:id});
    if(!deleted){
        return res.status(404).send("No user with this id was found.");
    }
    res.status(200).json({msg:"User has been Deleted"})
  } catch (error) {
    console.log(error);
  }
}

const displayCertificate = async(req,res)=>{
  try {
    const display = await Certificate.find();
    if(!display || display.length==0){
      return  res.status(404).json('No Certificates Found');
     }else{
       return res.status(200).json(display);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { postcertificate,getcertificate,displayCertificate,deletecertificate };
