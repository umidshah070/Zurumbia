const elProductTemplate = document.querySelector(".product-template");
const elProductList = document.querySelector(".product-list");


const addZero = num => {
  return num < 10 ? "0" + num : num;
}



const createProductRow = (product) => {
 const elProductRow = elProductTemplate.cloneNode(true).content;

//  const elProductImg = elProductRow.querySelector(".product-img")
//  elProductImg.src = product.img;

 const elProductId = elProductRow.querySelector(".card-id")
 elProductId.textContent = product.id;

 const elProductTitle = elProductRow.querySelector(".cardd-title")
 elProductTitle.textContent = product.title;

 const elProductText = elProductRow.querySelector(".product-text")
 elProductText.textContent = product.price;

 const elProductTextt = elProductRow.querySelector(".product-textt")
 elProductTextt.textContent = product.price;

 const elProductDec = elProductRow.querySelector(".product-dec")
 elProductDec.textContent = product.model;

 const elProductMarkedDate = elProductRow.querySelector(".product-marked-date")
  const productMarkedDate = new Date(product.addedDate);
  elProductMarkedDate.textContent = `${addZero(productMarkedDate.getDate())}.${addZero(productMarkedDate.getMonth() + 1)}.${productMarkedDate.getFullYear()} `;

  const elProductOzu = elProductRow.querySelector(".ozu")
  elProductOzu.textContent = product.benefits[0];

  const elProductHard = elProductRow.querySelector(".hard")
  elProductHard.textContent = product.benefits[1];


  const elProductMalu = elProductRow.querySelector(".malumot")
  elProductMalu.textContent = product.benefits[2];

  const elDeleteBtn = elProductRow.querySelector(".btn-danger");
  elDeleteBtn.dataset.id = product.id;


 return elProductRow;


}

const renderProducts = () => {
  elProductList.innerHTML = "";

  products.forEach(product => {
    const elProductRow = createProductRow(product)
    elProductList.appendChild(elProductRow);



  })


}
renderProducts();




const elAddProductForm = document.querySelector(".add-product-form");


elAddProductForm.addEventListener("submit", (evt) =>{

  evt.preventDefault();

  const formElement = evt.target.elements;



  const titleInputValue = formElement[0].value.trim();
  const priceValue = +formElement[1].value.trim();
  const benefitsValue = +formElement[3].value.trim();
  if(titleInputValue && priceValue &&  benefitsValue > 0){
    const addingProduct = {
      id: Math.floor(Math.random() * 1000),
      title: titleInputValue,
      price: priceValue,
      addedDate:new Date().toISOString(),
      benefits: benefitsValue
    }

    products.unshift(addingProduct);

    const elNewProduct = createProductRow(addingProduct);
    elProductList.prepend(elNewProduct);
  }
});

elProductList.addEventListener("click", (evt) => {
  if (evt.target.matches(".btn-danger")) {
    const clickedBtnId = +evt.target.dataset.id;
    const clickedBtnIndex = products.findIndex((product) => {
      return product.id === clickedBtnId;

    });
    products.splice(clickedBtnIndex, 1)

    renderProducts();
  }
})
