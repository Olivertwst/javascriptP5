const url = 'http://localhost:3000/api/products';
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItems(data)
    })
    
function displayItems (sofas) {
    const section = document.getElementById ('items')
}