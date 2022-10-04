const express = require('express');
const loginRequired = require('../middlewares/loginRequired');
const validateTalker = require('../middlewares/validateTalker');
const {
  getAllTalkers,
  getTalkerById,
  addTalker,
  editTalker,
} = require('../controllers/talkerController');

const router = express.Router();

router.get('/', getAllTalkers);

router.get('/:id', getTalkerById);

router.use(loginRequired);

router.post('/', validateTalker, addTalker);

router.put('/:id', validateTalker, editTalker);

module.exports = router;