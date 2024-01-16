const mongoose = require('mongoose')

const ProductHSchema = new mongoose.Schema({
    
product_id : String,
product_length :Number,
product_depth : Number,
product_width : Number,
hierarchy1_id : String ,
hierarchy2_id : String ,
hierarchy3_id : String ,
hierarchy4_id : String ,
hierarchy5_id : String ,

})

const ProductHModel = mongoose.model('product_heirarchy',ProductHSchema)
module.exports = ProductHModel