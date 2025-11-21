const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviews: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    amenities: [{
        type: String
    }],
    description: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);
