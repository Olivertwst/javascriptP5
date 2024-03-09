console.log('hey');
const cartElement = document.getElementById('cart__items');
const totalQuantityELement = document.getElementById('totalQuantity');
const currentTotalPrice = document.getElementById('totalPrice');
const cart = JSON.parse(localStorage.getItem('cart') || "[]");
const cartProducts = [];

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];

    fetch(`http://localhost:3000/api/products/${cartItems.prodcutId}`)
        .then(data => {
            return data.json();
        })
        .then(product => {
            displayProducts(product, cartItem);
        })

}
// TODO GET cart from localstorage
// TODO loop over the cart
// TODO FOR each cartItem get the product info from the back-end using the productID
// TODO INSERT cartItem in page