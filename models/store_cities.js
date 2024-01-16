const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    store_id : String,
    store_type : String,
    store_size : Number,
    city_id : String,
})

const StoreModel = mongoose.model('store_cities',StoreSchema)
module.exports = StoreModel