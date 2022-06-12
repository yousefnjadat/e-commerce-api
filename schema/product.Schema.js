const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-Populate');
const findVisible = require('./findVisible');

const ProductsSchema = new mongoose.Schema({
    title: {type:String},
    text: {type:String},
    member: {type:mongoose.Schema.Types.ObjectId,ref:"Members"},
    isVisible:{type: Boolean, default: true},
    createdAt: {type:Date,  default:Date.now},    
})

const Population = [{
        path:'Members',
        match:{isVisible:true}
    }]

    ProductsSchema.pre('find', findVisible(Population));
    ProductsSchema.pre('findOne', findVisible(Population));
    ProductsSchema.pre('findOneAndUpdate', findVisible());
    ProductsSchema.pre('count', findVisible());
    ProductsSchema.pre('countDocumants', findVisible());

    ProductsSchema.plugin(deepPopulate,{})

const Products = mongoose.model('Products',MembersSchema,'Products');
module.exports = Products;