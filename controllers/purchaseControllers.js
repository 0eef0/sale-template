const purchaseModel = require('../models/purchase');

const getAllPurchases = async (req, res) => {
    try {
        const purchases = await purchaseModel.find({});
        res.status(201).json({purchases});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deleteAllPurchases = async (req, res) => {
    try {
        const purchases = await Product.deleteMany({});
        res.status(201).json({purchases});
    } catch (error) { res.status(500).json({msg: error}) }
}

const createPurchase = async (req, res) => {
    try {
        const purchase = await purchaseModel.create(req.body);
        res.status(201).json({purchase});
    } catch (error) { res.status(500).json({msg: error}) }
}

const getPurchase = async (req, res) => {
    try {
        const purchase = await purchaseModel.findById(req.params.id).exec();
        res.status(201).json({purchase});
    } catch (error) { res.status(500).json({msg: error}) }
}

const updatePurchase = async (req, res) => {
    try {
        const {id} = req.params;
        const newPurchase = req.body;
        const purchase = await purchaseModel.findOneAndUpdate({_id: id}, newPurchase);
        res.status(201).json({newPurchase});
    } catch (error) { res.status(500).json({msg: error}) }
}

const deletePurchase = async (req, res) => {
    try {
        const purchase = await purchaseModel.findByIdAndRemove(req.params.id);
        res.status(201).json({purchase});
    } catch (error) { res.status(500).json({msg: error}) }
}

module.exports = { getAllPurchases, deleteAllPurchases, createPurchase, getPurchase, updatePurchase, deletePurchase };