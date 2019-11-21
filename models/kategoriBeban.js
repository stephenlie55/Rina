mongoose = require('mongoose')

const KategoriBebanSchema = new mongoose.Schema({
    title: String,
    value: Number,
})

const KategoriBeban = mongoose.model('KategoriBeban', KategoriBebanSchema)
module.exports = KategoriBeban