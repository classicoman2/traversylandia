const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// / se refereix a directori /api/routes  !!
router.get('/', (req, res) => {
  res.send('hello');
});





module.exports = router;


