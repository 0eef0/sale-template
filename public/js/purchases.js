const makePurchase = async () => {
    try {
        const formDOM = document.getElementsByClassName('orderForm');
        const purchasedDOM = document.getElementsByClassName('orderFormQty');
        const userDetails = {};
        for(let i = 0; i < formDOM.length; i++) {
            userDetails[formDOM[i].id] = formDOM[i].value;
        }
        let purchasedItems = [];
        let purchased = false;
        for(let i = 0; i < purchasedDOM.length; i++) {
            let temp = {};
            temp.name = purchasedDOM[i].id;
            temp.quantity = Number(purchasedDOM[i].value);
            temp.price = Number(purchasedDOM[i].dataset.price);
            purchasedItems.push(temp);
            if(temp.quantity) purchased = true; 
        }
        userDetails.purchasedItems = purchasedItems;

        if(purchased) {
        await axios.post('/api/v1/purchases', { userDetails });
        alert('Order Placed!');
        window.location = '/';
        } else {
            alert('Please pick some items')
        }
    } catch (err) {
        console.log(err.response.data)
    }
};
const deletePurchase = async (id) => {
    try {
        await axios.delete(`/api/v1/purchases/${id}`);
        location.reload();
    } catch (error) {
        console.log(error);
    }
};