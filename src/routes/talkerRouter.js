const express = require('express');
const loginRequired = require('../middlewares/loginRequired');
const validateTalker = require('../middlewares/validateTalker');
const {
  getAllTalkers,
  getTalkerById,
  addTalker,
} = require('../controllers/talkerController');

const router = express.Router();

router.get('/', getAllTalkers);

router.get('/:id', getTalkerById);

router.post('/', loginRequired, validateTalker, addTalker);

module.exports = router;