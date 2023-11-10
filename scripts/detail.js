//*Urldeki arama parametrelerini yönetebilmek için yerleşik bir js classı bulunuyor.
//!URLSearchParams

const params = new URLSearchParams(location.search);

// JS Classını sağladığı get methodu ile parametreye erişme
const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  //* api'den ürünleri alma
  const res = await fetch("../db.json");
  const data = await res.json();

  //*urldeki idye denk gelen ürünü find methodu ile buluruz
  const product = data.menu.find((i) => i.id === Number(paramId));

  renderPage(product);
});

/* arayüzü göndereceğimiz div */
const outlet = document.querySelector("#outlet");

/* bütün arayüzü ekrana basar */
function renderPage(product) {
  outlet.innerHTML = `
<div class="d-flex justify-content-between fs-5">
        <a href="/">
          <img style="width: 40px" src="/images/home.png" />
        </a>
        <div><a style="text-decoration:none; color:unset" href="/">anasayfa</a> /  
        ${product.category} / ${product.title.toLowerCase()}</div>
      </div>
      <h1 class="text-center my-3 shadow rounded p-2">${product.title}</h1>

      <img
        src="${product.img}"
        class="img-fluid rounded object-fit-cover shadow-lg"
        style="max-height: 400px"
      />

      <div>
        <h3 class="mt-4">
          Ürünün kategorisi: <span class="text-success">${
            product.category
          }</span>
        </h3>
        <h3 class="my-2">
          Ürünün fiyatı: <span class="text-success">${(
            product.price * 30
          ).toFixed(2)}₺</span>
        </h3>
      </div>

      <p class="lead fs-3">
      ${product.desc}
      </p>
      `;
}
