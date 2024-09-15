const express = require('express')
const router = express.Router()
const { listProducts, detail } = require('../controllers/product')


//Lista de productos
router.get('/', listProducts)

//detalle del producto
router.get('/detalle/:id', detail)

module.exports = router