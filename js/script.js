function loadComponent(url, targetId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => (document.getElementById(targetId).innerHTML = data));
}

// Carregando os components
loadComponent("./components/header.html", "header-component");
loadComponent("./components/banner.html", "banner-component");
loadComponent("./components/footer.html", "info-footer");
loadComponent("./components/productsBlog.html", "info-products");
loadComponent("./components/infoBlog.html", "info-component");


function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "./img/hamburger.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./img/close_white_36dp.svg";
  }
}

function changeBlog() {
  let infoComponent = document.querySelector("#info-component");
  let bannerProduct = document.querySelector("#banner-component");
  let infoProducts = document.querySelector("#info-products");
  let infoBlog = document.querySelector("#info-blog");

  infoComponent.style.display = "none";
  bannerProduct.style.display = "none";
  infoProducts.style.display = "none";
  infoBlog.style.display = "block";
}

function backIndex() {
  let infoComponent = document.querySelector("#info-component");
  let bannerProduct = document.querySelector("#banner-component");
  let infoProduct = document.querySelector("#info-produtcs");
  let infoBlog = document.querySelector("#info-blog");

  infoComponent.style.display = "block";
  infoProduct.style.display = "block";
  bannerProduct.style.display = "none";
  infoBlog.style.display = "none";
}

const allInfoDivs = document.querySelectorAll(".info-div");
let currentPage = 0;

function showPage(pageNumber) {
  if (pageNumber >= 0 && pageNumber < allInfoDivs.length) {
    allInfoDivs.forEach((div, index) => {
      console.log(index === pageNumber, index, pageNumber);
      div.style.display = index === pageNumber ? "block" : "none";
    });
    currentPage = pageNumber;
  }
}

// selected all filter buttons and filterable cards
document.addEventListener("DOMContentLoaded", function() {
  const filterScript = document.createElement('script');
  filterScript.src = './js/filter.js';
  document.head.appendChild(filterScript);
});

document.addEventListener("DOMContentLoaded", function() {
  const filterScript = document.createElement('script');
  filterScript.src = './js/acessories.js';
  document.head.appendChild(filterScript);
});

