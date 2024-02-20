const url = 'http://localhost:3000/api/products';
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItems(data)
    })

function displayItems(sofas) {
    console.log(sofas);

    const section = document.getElementById('items')
    for (let i = 0; i < sofas.length; i++) {
        const sofa = sofas [i]; 
        section.innerHTML += ''
    }
}