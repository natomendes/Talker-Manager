const express = require('express');
const { logUser } = require('../controllers/loginController');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, logUser);

module.exports = router;