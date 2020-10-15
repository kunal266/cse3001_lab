const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type:Number,
        required:true
    },
    soldby:[{
        type:String,
        // type:Schema.Types.ObjectId,
        ref:'Sellers'
    }]
});
const proprice = new Schema({
    productname:{
        type:String,
        required:true
    },
    price: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    }
})
// const sellers = new Schema ({
//     Sname: {

//         type:String,
//         required:true
//     },
//     products:[{
//        type:String
//     }],
//     date: {
//         type: Date,
//         default: Date.now
//     },
// })

module.exports = Item = mongoose.model('item', ItemSchema);
// module.exports = Seller = mongoose.model('Sellers', sellers);