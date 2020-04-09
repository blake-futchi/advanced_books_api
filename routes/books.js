const express = require('express');
const router = express.Router();
const models = require('../database/models/index')

/* GET books listing. */
router.get('/', async (req, res, next) => {
  const books = await models.Book.findAll()
  res.json({books: books});
});

module.exports = router;
