const express = require('express')
const info = express.Router()
const Info = require('../models/infoModel')

info.get('/', async (req, res) => {
  try {
    console.log('hi')
    if (req.user) {
      res.json(await Info.find())
    } else {
      res.json(await Info.find({ uid: null }))
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to get data' })
  }
})

info.post('/', async (req, res) => {
  try {
    const info = await Info.create(req.body)
    res.json(info)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

info.put('/:id', async (req, res) => {
  try {
    const updatedInfo = await Info.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(updatedInfo)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})
info.delete('/:id', async (req, res) => {
  try {
    const deletedInfo = await Info.findByIdAndRemove(req.params.id)
    res.json(deletedInfo)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

info.get('/:id', async (req, res) => {
  try {
    const info = await Info.findById(req.params.id)
    res.json(info)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

module.exports = info
