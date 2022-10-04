const express = require('express');
const { getAllTalkers, getTalkerById } = require('../controllers/talkerController');

const router = express.Router();

router.get('/', getAllTalkers);

router.get('/:id', getTalkerById);

module.exports = router;