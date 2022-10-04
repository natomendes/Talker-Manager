const express = require('express');
const { getAllTalkers } = require('../controllers/talker');

const router = express.Router();

router.get('/', getAllTalkers);

module.exports = router;