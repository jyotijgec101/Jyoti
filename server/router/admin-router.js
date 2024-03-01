const express = require("express");
const router = express.Router();
const admin = require("../controller/admin-controller");
const certificate = require("../controller/certificate-controller");
router.route('/users').get(admin.getAllUsers);
router.route('/contacts').get(admin.getAllContacts);
router.route('/users/delete/:id').delete(admin.getuserdeletebyid);
router.route('/service').post(admin.addservices);
router.route('/servicelist').get(admin.getServices);
router.route('/servicelist/delete/:id').delete(admin.deleteService);
router.route('/users/:id').get(admin.getSingleUser);
router.route('/users/update/:id').patch(admin.updateuser);
router.route('/servicelist/:id').get(admin.getSinglenotice);
router.route('/servicelist/update/:id').patch(admin.updatenotice);
router.route('/post_certificate').post(certificate.postcertificate);
router.route('/display_certificate').get(certificate.displayCertificate);
router.route('/delete_certificate/:id').delete(certificate.deletecertificate);
module.exports=router;