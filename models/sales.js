const mongoose = require('mongoose')

const SaleSchema = new mongoose.Schema({
    
product_id : String ,
store_id : String,
date : Date ,
sales :Number,
revenue :Number,
stock : Number ,
price:Number,
promo_type_1 : String,
promo_type_2 : String,

})

const SaleModel = mongoose.model('sales',SaleSchema)
module.exports = SaleModel