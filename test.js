// Create Header

let header = document.createElement("header");
let mainHeading = document.createElement("h2");
let mainheadingText = document.createTextNode("Elzero");
let menu = document.createElement("ul");

let menuArr = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < menuArr.length; i++) {
  let lists = document.createElement("li");
  let listsText = document.createTextNode(menuArr[i]);
  lists.appendChild(listsText);
  menu.appendChild(lists);
  lists.style.cssText = "padding: 10px;";
}
document.body.prepend(header);
header.appendChild(mainHeading);
mainHeading.appendChild(mainheadingText);
header.appendChild(menu);

// Header Style
document.body.style.cssText =
  "background-color: #EEE; margin: 0px; padding: 0px;";

header.style.cssText =
  "background-color:#FFF; display:flex; justify-content: space-between;";
mainHeading.style.cssText = "color: #019688; padding-left: 15px";
menu.style.cssText = "display: flex; align-items: center; list-style: none;";

// Create Products

let productsContainer = document.createElement("div");
productsContainer.className = "container";
productsContainer.style.cssText =
  "display:grid; grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); gap: 15px; margin: 15px";

for (let i = 0; i < 16; i++) {
  let products = document.createElement("div");
  products.className = "products";
  let productsNumber = document.createElement("h3");
  let productsHeading = document.createTextNode(i + 1);
  let span = document.createElement("span");
  let spanProduct = document.createTextNode(`Product ${i + 1}`);
  // Style
  products.style.cssText =
    "background-color: #fff; display: flex; justify-content: center; align-items: center; flex-direction: column";
  span.style.cssText = "padding-bottom: 20px;";
  // Append Childs
  header.after(productsContainer);
  productsContainer.appendChild(products);
  products.appendChild(productsNumber);
  productsNumber.appendChild(productsHeading);
  products.appendChild(span);
  span.appendChild(spanProduct);
}

// Create Footer

let footer = document.createElement("footer");

let copyRights = document.createElement("p");
let rights = document.createTextNode("Copyrights 2023");

// Style
footer.style.cssText =
  "background-color: #019688; text-align: center; color: #fff; padding: 15px;";

// Appending
copyRights.appendChild(rights);

footer.appendChild(copyRights);
productsContainer.after(footer);
document.title = "Test";
