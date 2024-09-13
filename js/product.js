let container = document.querySelector(".container");

let getproduct = async () => {
  let products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  products.products.map((p) => {
    container.innerHTML += `
        <div class="card">
        <img src=${p.thumbnail} alt=${p.title} />
        <p>${p.title}</p>
         <p> rating: ${p.rating}</p>
        <p>${p.price} EGP</p>
        <a href="../html/single-product.html?id=${p.id}">Show more</a>
        

        </div>
        `;
  });
};

getproduct();
