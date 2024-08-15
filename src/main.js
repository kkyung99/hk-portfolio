"use strict";

// 헤더 스크롤 스타일
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 시 화살표 버튼 보이기
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (homeHeight / 2 < window.scrollY) {
    arrowUp.classList.add("arrow-up_visible");
  } else {
    arrowUp.classList.remove("arrow-up_visible");
  }
});

// 스크롤 시 페이드 인 효과
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const checkFadeIn = () => {
    const triggerHeight = window.innerHeight * 0.8;
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < triggerHeight && elementBottom > 0) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn(); // 페이지 로드 시 한 번 실행
});

// Navbar 토글버튼 클릭
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭 시 메뉴 닫기
navbarMenu.addEventListener("click", (event) => {
  navbarMenu.classList.remove("open");
});
