const addProduct = async () => {
    try {
        const product = {
            productName: document.getElementById('productName').value,
            productPrice: Number(document.getElementById('productPrice').value),
            productImg: document.getElementById('productImg').value
        };
        await axios.post(`/api/v1/products`, product);
    } catch (err) {
        console.log(err.response.data);
    }
};
document.getElementById('newProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addProduct();
    location.reload();
});

const deleteProduct = async (id) => {
    try {
        await axios.delete(`/api/v1/products/${id}`);
        location.reload();
    } catch (err) {
        console.error(err);
    }
};