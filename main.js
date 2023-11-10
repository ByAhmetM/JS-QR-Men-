import { renderMenuItems, renderButtons } from "./scripts/ui.js";

//*HTMLden gelenler

const menuList = document.querySelector("#menu-list");
const buttonsArea = document.getElementById("buttons");

//! Sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", () => {
  fetchMenu();
  renderButtons();
});

//!fetch ile çektiğim dataya dışardan da ulaşmak için global scopeda data tanımladım.
let data;

// menü verilerini json dosyasından çeker
async function fetchMenu() {
  const res = await fetch("./db.json");
  //! dataya dışardan ulaşmak için datayı güncelledim.
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

//Tıklanılan kategoriyi belirleme

buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    renderButtons(e.target.innerText);
    //* seçili kategoriye erişme
    const selected = e.target.dataset.category;

    if (selected === "all") {
      //filtreleme yapma apiden gelen verilerin hepsini ekrana bas
      renderMenuItems(data.menu, menuList);
    } else {
      //seçili kategoriye göre filtrele
      const filtered = data.menu.filter((i) => i.category === selected);
      //filtrelenmiş veriyi ekrana bas
      renderMenuItems(filtered, menuList);
    }
  }
});
