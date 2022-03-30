const express = require('express');
const navigation = express.Router();
const axios = require('axios');

const people = [
    {
        name: 'Person Name',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Person Name',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Person Name',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Person Name',
        img: 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
];
const purchaseFields = [
    {
        name: 'Full Name',
        id: 'userFullName',
        type: 'text',
    },
    {
        name: 'Email',
        id: 'userEmail',
        type: 'email',
    },
    {
        name: 'Select 1',
        id: 'userSelectOne',
        type: 'select',
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ]
    },
    {
        name: 'Select 2',
        id: 'userSelectTwo',
        type: 'select',
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ]
    },
];

const ensureAuthenticated = require('../Middleware/auth');
//const {ensureAuthenticated} = require('connect-ensure-authenticated');

navigation.get('/', (req, res) => {
    res.render('./pages/index');
});
navigation.get('/about', (req, res) => {
    res.render('./pages/about', {
        people
    });
});
navigation.get('/products', async (req, res) => {
    try {
        const { data: { products } } = await axios.get('http://localhost:5000/api/v1/products');
        await res.render('./pages/products', {
            products
        });
    } catch (err) {
        console.error(err);
    }
});
navigation.get('/store', async (req, res) => {
    try {
        const { data: { products } } = await axios.get('http://localhost:5000/api/v1/products');
        await res.render('./pages/store', {
            products,
            purchaseFields
        });
    } catch (err) {
        console.error(err);
    }
});
navigation.get('/login', (req, res) => {
    res.render('./pages/adminLogin');
});
navigation.get('/adminProducts', ensureAuthenticated, async (req, res) => {
    try {
        const { data: { products } } = await axios.get('http://localhost:5000/api/v1/products');
        const deleteProduct = async (id) => {
            try {
                await axios.delete(`/api/v1/products/${id}`);
                location.reload();
            } catch (error) {
                console.log(error);
            }
        };
        await res.render('./pages/adminProducts', {
            products,
            deleteProduct
        });
    } catch (err) {
        console.error(err);
    }
});
navigation.get('/adminSales', ensureAuthenticated, async (req, res) => {
    try {
        const { data: { purchases } } = await axios.get('http://localhost:5000/api/v1/purchases');
        const deletePurchase = async (id) => {
            try {
                await axios.delete(`/api/v1/purchases/${id}`);
                location.reload();
            } catch (error) {
                console.log(error);
            }
        };
        await res.render('./pages/adminSales', {
            purchases,
            deletePurchase
        });
    } catch (err) {
        console.error(err);
    }
});


module.exports = navigation;