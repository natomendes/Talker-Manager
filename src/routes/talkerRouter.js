const express = require('express');
const loginRequired = require('../middlewares/loginRequired');
const validateTalker = require('../middlewares/validateTalker');
const {
  getAllTalkers,
  getTalkerById,
  addTalker,
  editTalker,
  deleteTalker,
  searchTalkers,
} = require('../controllers/talkerController');

const router = express.Router();

router.get('/search', loginRequired, searchTalkers);

router.get('/', getAllTalkers);

router.get('/:id', getTalkerById);

router.use(loginRequired);

router.delete('/:id', deleteTalker);

router.post('/', validateTalker, addTalker);

router.put('/:id', validateTalker, editTalker);

module.exports = router;