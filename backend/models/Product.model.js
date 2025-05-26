import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
    },
    description: String,
    price: Number,
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

const Product = mongoose.model("Product", ProductSchema);

export default Product;