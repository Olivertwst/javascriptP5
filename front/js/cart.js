const cartElement = document.getElementById('cart__items');
const totalQuantityElement = document.getElementById('totalQuantity');
const currentTotalPrice = document.getElementById('totalPrice');
const cart = JSON.parse(localStorage.getItem('cart') || "[]");
const cartProducts = [];

insertCartItems();

async function insertCartItems() {
    for (cartItem of cart) {
        console.log(cartItem);
        const productId = cartItem.productId;
        const data = await fetch(`http://localhost:3000/api/products/${productId}`);
        const product = await data.json();
        console.log(product);
        // TODO INSERT cartItem in page
        // TODO update total quantity and total price on page 

    }
}
