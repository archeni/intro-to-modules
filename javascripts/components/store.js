const bookInfo = {
    price: 19.99,
    title: "Ranger's Apprentice",
    image: "./assets/images/book.jpg",
}

const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
};

const addToCartEvent = () => {
    console.log('added to cart');
}

const makeStore = () => {
    let stringDom = '<h2>Our only book:</h2>';
    stringDom +='<p>Buy it now:</p>';
    stringDom +=`<h3>$${bookInfo.price}</h3>`;
    stringDom +=`<img src=${bookInfo.image} alt="book cover"/>`;
    stringDom +='<button id="cart-button" class="btn btn-danger col-12">Add to cart</button>'

    printToDom(`store-container`, stringDom);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);

};

export default { makeStore };