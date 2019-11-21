const router = require('express').Router()
const transactionController = require('../controllers/transactionController')

router.get('/test', (req, res) => {
    res.status(200).json({
        message: 'Masuk ke routes answer'
    })
})

router.get('/transaction', transactionController.getAllTransaction)
router.get('/kategoribeban', transactionController.getKategoriBeban)
router.post('/transaction', transactionController.createTransaction)
router.post('/kategoribeban', transactionController.createKategoriBeban)
router.patch('/:transactionId',  transactionController.updateTransaction)

module.exports = router