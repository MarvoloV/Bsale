import { getProducts, getCategory } from "../utils/getData";

const Home = async () => {
  const products = await getProducts();
  const categories = await getCategory();
  console.log("🚀 ~ file: Home.js ~ line 6 ~ Home ~ category", categories);
  const view = `
    <div>
      ${categories.map((category) => `<h1>${category.name}</h1>`)}
    </div>
    <div class="row row-cols-4 m-5">
      ${products
        .map(
          (product) => `
        <div class="col mt-2 mb-2">
          <article class="card" style="width: 18rem; min-height:360px">
              <img src="${product.url_image ? product.url_image : ""}" alt="${
            product.name
          }" class="card-img-top" style=" object-fit: cover">
              <div class="card-body">
                <h2 class="card-title">${product.name}</h2>
                <h2 class="card-text">$${product.price}</h2>
              </div>
              
          </article>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  return view;
};

export default Home;
