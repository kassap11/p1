let param = new URLSearchParams(window.location.search);
let pid = param.get("id");
let container = document.querySelector(".container"); 

let getproduct = async () => {
  let product = await fetch("https://dummyjson.com/products/"+pid).then((res) =>
    res.json()
  );
  container.innerHTML = `
         <img src=${product.thumbnail} alt=${product.title} />
        <div>
          <p>${product.title}</p>
          <p>${product.description}</p>
          <p>${product.price} EGP</p>
       

        </div>
  `;
};

getproduct();
