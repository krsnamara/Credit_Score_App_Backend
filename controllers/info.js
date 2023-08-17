const express = require('express');
const info = express.Router();
const Info = require('../models/infoModel');
const isAuthenticated = require('../utils/isAuth');

info.get('/', isAuthenticated, async (req, res) => {
  try {
    // console.log('hi')
    if (req.user) {
      res.json(await Info.find({ uid: req.user.uid }));
    } else {
      res.json(await Info.find({ uid: null }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

info.post('/', isAuthenticated, async (req, res) => {
  try {
    req.body.uid = req.user.uid;
    const newInfo = await Info.create(req.body);
    res.json(newInfo);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

info.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    res.json(await Info.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

info.put('/:id', isAuthenticated, async (req, res) => {
  try {
    req.body.uid = req.user.uid;
    res.json(
      await Info.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

info.get('/:id', async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    res.json(info);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = info;
