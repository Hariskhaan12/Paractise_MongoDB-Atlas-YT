const mangoose = require('mongoose');
const Schema = mangoose.Schema;

// define the structure of document
const itemSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    Description: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    rating: {
        type: String,
        required:true
    }

},{timestamps:true})

const Item = mangoose.model("Item", itemSchema);


module.exports = Item;