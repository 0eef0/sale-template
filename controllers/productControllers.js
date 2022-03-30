const productModel = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteAllProducts = async (req, res) => {
    try {
        const products = await Product.deleteMany({});
        res.status(201).json({products});
    } catch (error) { res.status(500).json({msg: error}) }
}

const createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id).exec();
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const newProduct = req.body;
        const product = await productModel.findOneAndUpdate({_id: id}, newProduct);
        res.status(201).json({newProduct});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndRemove(req.params.id);
        res.status(201).json({product});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllProducts, deleteAllProducts, createProduct, getProduct, updateProduct, deleteProduct };