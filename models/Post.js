const { model, Schema } = require('mongoose')

const Post = new Schema({
    title: {
        type: String,
        required: true
    },
    vendorCode: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufactor: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }
})

module.exports = model('Post', Post)