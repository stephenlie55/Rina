mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    transactionId: String,
    datePayment: String,
    monthPeriod: String,
    kategoriBeban: String,
    total: Number
})

const Transaction = mongoose.model('Transaction', TransactionSchema)
module.exports = Transaction