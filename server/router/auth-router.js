const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller");

router.route('/').get(authcontrollers.home);
router.route('/register').post(authcontrollers.register);
router.route('/login').post(authcontrollers.login);
router.route('/user').get(authcontrollers.getUserData);

module.exports = router;