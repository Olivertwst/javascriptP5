console.log("I'm a loaded script,ready to server you!")

// TODO get the stuff (this is an array) from the backend API (articles for demo)
fetch('http://localhost:3000/api/products')
    .then(data => {
        return data.json();
    })
    .then(post => {
        console.log(post);
    });
// TODO get the existing element on the page where i can insert cards (i think i saew it in the section tag)
// TODO iterate over the stuff that came fromthe backend API (array of articles for the demo)
// AND get the current element in the array (an article for the demo)
// AND create new car DOM element which willbe inserted into the home page
// AND insert current element's info into new card DOM element
// AND append (child) this new card DOM element to existing element on page(secion tag i believe, got it above all ready)
