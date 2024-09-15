const express = require('express')
const router = express.Router()
const errorController = require('../controllers/error')

router.get('/', errorController.error404)

module.exports = router