//!ARAYÜZLE ALAKALI OLANLARI YAN İŞLEMLERİ BURADA TUTACAĞIM. Uİ=ARAYÜZ

import { buttonData } from "./constants.js";

const buttonArea = document.querySelector("#buttons");
// * Ekrana menü elemanlarını basar
export function renderMenuItems(menuItems, menuList) {
  //dizideki her bir eleman için bir menü html oluşturur. bunu ekrana basar
  menuList.innerHTML = menuItems
    .map(
      (item) =>
        `
       <a
          id="card" href="/detail.html?id=${
            item.id
          }"class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
          <img class="rounded shadow img-fluid" src="${item.img}" />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${item.title}</h5>
              <p class="text-success fw-bold">${(item.price * 28).toFixed(
                2
              )}₺</p>
            </div>
            <p class="lead">
            ${item.desc.slice(0, 80) + "..."}
            </p>
          </div>
        </a>
    `
    )
    .join(" ");
}

//*Ekrana butonları basar
export function renderButtons(active) {
  //eski eklenen butonları htmlden temizle çünkü active
  // classı eklediğimizde butonları bir daha render ediyordu
  buttonArea.innerHTML = "";
  //yeni butonları oluşturma
  buttonData.forEach((btn) => {
    // button elementi oluşturma
    const buttonEle = document.createElement("button");
    // class belirleme
    buttonEle.className = "btn btn-outline-dark";

    // data-id belirleme

    buttonEle.dataset.category = btn.value;

    // eğerki eleman actifse bu classı ver
    if (btn.text === active) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    // içindeki yazıyı belirleme
    buttonEle.innerText = btn.text;
    //butonu htmldeki idsi buttons olan div içine gönderdik
    buttonArea.appendChild(buttonEle);
  });
}
