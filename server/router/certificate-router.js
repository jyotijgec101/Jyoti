const express = require("express");
const router = express.Router();
const Certificate = require("../controller/certificate-controller");
router.route('/get_certificate/:id').get(Certificate.getcertificate);
module.exports=router;