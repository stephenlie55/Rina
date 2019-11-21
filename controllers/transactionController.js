const Transaction = require('../models/transaction')
const KategoriBeban = require('../models/kategoriBeban')

class transactionController {
    static getAllTransaction(req, res) {
        Transaction.find()
        .then( (transactions) => {
            res.status(200).json(transactions)
        })
        .catch( (err) => {
            res.status(500).json(err)
        })
    }

    static createTransaction(req, res) {
        console.log(req.body)

        Transaction.find()
            .then( (transactions) => {
                Transaction.create({
                    transactionId: 'PB'+ String(transactions.length+1),
                    datePayment: req.body.datePayment,
                    monthPeriod: req.body.monthPeriod
                })
                .then( (transaction) => {
                    res.status(200).json(transaction)
                })
                .catch( (err) => {
                    res.status(500).json(err)
                })                    
            })
            .catch( (err) => {
                res.status(500).json(err)
            })                    
        
    }

    static updateTransaction(req, res){
        console.log('Masuk updateTransaction', req.body)
        console.log(req.params.transactionId, 'Transaction Id')
        Transaction.find({
            transactionId: req.params.transactionId
        })
        .then( (transaction) =>{
            transaction[0].set(req.body)
            return transaction[0].save()
        })
        .then( (updated) =>{
            res.status(200).json(updated)
        })
        .catch( (err) => {
            res.status(500).json(err)
        })
    }

    static createKategoriBeban(req, res) {
        KategoriBeban.create({
            title: req.body.title,
            value: req.body.value
        })
        .then( (transaction) => {
            res.status(200).json(transaction)
        })
        .catch( (err) => {
            res.status(500).json(err)
        }) 
    }

    static getKategoriBeban(req, res) {
        console.log(req.body)
        KategoriBeban.find()
            .then( (allKategoriBeban) => {
                res.status(200).json(allKategoriBeban)
            })
            .catch( (err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = transactionController