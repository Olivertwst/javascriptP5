(async () => {
    const productId = new
        URLSearchParams(window.location.search).get
        ("id");
    const id = encodeURIComponent(productId);
})