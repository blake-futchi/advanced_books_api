const express = require('express');
const router = express.Router();

/* GET books listing. */
router.get('/', (req, res, next) => {
  res.json({users: [{title: 'The Bible'}]});
});

module.exports = router;
