const router = require('express').Router()

//routers
const transactionRouter = require('./transactionRoutes')
router.use('/transaction', transactionRouter)

module.exports = router

