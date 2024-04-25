console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newSection = document.createElement("article");
newSection.classList.add("product");

const productBodyDiv = document.createElement("div");
productBodydiv.classList.add("product__body");

const productTextContainerDiv = document.createElement("div");
productTextContainerDiv.classList.add("product__text-container");

const productNameHeadline = document.createElement("h2");
productNameHeadline.classList.add("product__name");
productNameHeadline.textContent = "Clownfish";

const productCategoriesUl = document.createElement("ul");
productCategoriesUl.classList.add("product__categories");

const productCategoryLi = document.createElement("li");
productCategoryLi.classList.add("product__category");
productCategoryLi.textContent = "warmes Wasser";

const productDescriptionParagraph = document.createElement("p");
productDescriptionParagraph.classList.add("product__description");
productDescriptionParagraph.textContent = "alles für die Fische";

const productImageContainer = document.createElement("div");
productImageContainer.classList.add("product__image-container");

const productImage = document.createElement("img");
productImage.classList.add("product__image");
productImage.src =
  "https://unsplash.com/de/fotos/orange-und-weisse-clownfische-x9yfTxHpj5w";

const footer = document.createElement("footer");
footer.classList.add("product__footer");

const footerSpan = document.createElement("span");
footerSpan.classList.add("product__price");
footerSpan.textContent = "14€";

const button = document.createElement("button");
button.classList.add("product__buy-button");

document.body.append(newSection);
newSection.append(productBodyDiv);
newSection.append();
