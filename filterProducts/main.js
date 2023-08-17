let items = [...products];
const productContaier = document.querySelector("#product-container");
const input = document.querySelector("#search-bar");
const buttons = document.querySelectorAll('.company-button');

function displayItems() {
  const newItemsString = items.map((item) => {
      return `<article id=${item.id} class="product" data-company="${item.company}">
            <img src="${item.image}" class="img" alt="image">
            <p class="title">${item.title.toUpperCase().slice(0,1)+item.title}</p>
            <p class="price">${item.price}</p>
        </article>`;
    })
    .join("");

  productContaier.innerHTML = newItemsString;
}

function handleClick(text){
    items = products.filter(item => item.company === `${text.toLowerCase()}`);
    displayItems();
}

displayItems();

input.addEventListener("keyup", (e) => {
  const value = e.target.value;
   items = products.filter((item) => {
     return item.title.includes(value);
  });
  
  displayItems();
});


buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        const text = e.target.textContent;
        if(text === 'All'){
            items = products;
            input.value = '';
            displayItems();
        }else{
            handleClick(text);
        }
    })
})

