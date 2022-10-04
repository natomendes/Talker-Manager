const express = require('express');

const router = express.Router();

router.post('/', logUser);

module.exports = router;