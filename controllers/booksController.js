const models = require('../database/models')

const index = async (req, res, next) => {
  const booksIndex = await models.Book.findAll()
  res.json({books: booksIndex})
}

module.exports = { index }