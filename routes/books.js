const express = require('express');
const router = express.Router();
const {index} = require('../controllers/booksController')

/* GET books listing. */
router.get('/', index);

module.exports = router;
