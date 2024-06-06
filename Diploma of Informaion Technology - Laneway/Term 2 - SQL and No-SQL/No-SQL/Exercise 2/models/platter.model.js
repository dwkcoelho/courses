const mongoose = require('mongoose');
const PlatterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "platter name is required"]
        },
        pieces: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        sashimi: {
            type: String,
            required: false,
        },
        nigiri: {
            type: String,
            required: false,
        },
        uramaki: {
            type: String,
            required: false,
        },
        maki: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

const Platter = mongoose.model("Platter",PlatterSchema);
module.exports = Platter;