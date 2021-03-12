const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

//register user
router.post('/register',user_controller.user_register);

module.exports = router;