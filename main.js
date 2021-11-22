"use strict";
const loader = document.querySelector(".loader");
const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile_menu");
window.onload = function () {
  setTimeout(function () {
    loader.classList.add("hidden");
  }, 2500);
};
function menuOpen(el, options) {
  el.classList.toggle(options);
}
ham.addEventListener("click", () => {
  menuOpen(ham, "open");
  if (!nav.classList.contains("open")) {
    nav.classList.toggle("open");
    
  } else {
    nav.classList.add("close");
    nav.classList.remove("open");
  }
  if(nav.classList.contains("close")) {
    setTimeout(() => {
      nav.classList.remove("close");
    },3000);
  }
});
//スワイパー
document.addEventListener("DOMContentLoaded", () => {
  const hero = new HeroSlider(".swiper");
});
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        960: {
          slidesPerView: 2,
        },
      },
      autoplay: {
        delay:4000,
        disableOnInteraction: false,

      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
}
//アコーディオン
const accordion = document.querySelector('.accordion');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  accordion.classList.add('appear');
  btn.classList.add('hidden');
});

//ワークスのモアボタン
const spanBtn = document.querySelector('.works_detail');
const worksImg = document.querySelector('.works_img');
spanBtn.addEventListener('click', () => {
  worksImg.classList.add('appear');
})