const express = require('express');
const router = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

// Model creat a /models/cyclist.js  -- xtoni
const cyclistModel = require('../../models/cyclistModel');

/**
 * Get All
 */
router.get('/', async (req, res) => {
  const foods = await cyclistModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});


/** 
 * Add Post
 */
router.post('/add', async (req, res) => {
  const cyclist = new cyclistModel(req.body);

  try {
    await cyclist.save();
    res.send(cyclist);
  } catch (err) {
    res.status(500).send(err);
  }
});


/**
 * Delete Post
 */
router.delete('/delete/:id', async (req, res) => {
  try {
    const cyclist = await cyclistModel.findByIdAndDelete(req.params.id)

    if (!cyclist) res.status(404).send("No ha trobat aquest item")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
});



module.exports = router


