const url = 'http://localhost:3000/api/products';
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItems(data)
    })
    .catch(err => console.log(err))

function displayItems(sofas) {
    console.log(sofas);

    const section = document.getElementById('items')
    for (let i = 0; i < sofas.length; i++) {
        const sofa = sofas[i];
        console.log(sofa.name)
        // let text = `Welcome ${firstName}, ${lastName}!`;
        section.innerHTML += ` 
        <a href="./product.html?id=${sofa._id}">
        <article>
          <img src=${sofa.imageUrl} alt=${sofa.altTxt}
          <h3 class="productName">${sofa.name}</h3>
          <p class="productDescription">${sofa.description}</p>
        </article>
      </a> `
    }
}