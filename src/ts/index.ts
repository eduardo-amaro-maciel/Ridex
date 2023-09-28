'use strict';

/**
 * Navbar toggle
 */

const overlay: HTMLElement | null = document.querySelector("[data-overlay]");
const navbar: HTMLElement | null = document.querySelector("[data-navbar]");
const navToggleBtn: HTMLElement | null = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks: NodeListOf<HTMLElement> = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
   if (navToggleBtn && navbar && overlay) {
      navToggleBtn.classList.toggle("active");
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
   }
}

if (navToggleBtn) {
   navToggleBtn.addEventListener("click", navToggleFunc);
}

if (overlay) {
   overlay.addEventListener("click", navToggleFunc);
}

for (let i = 0; i < navbarLinks.length; i++) {
   if (navbarLinks[i]) {
      navbarLinks[i].addEventListener("click", navToggleFunc);
   }
}

/**
 * Header active on scroll
 */

const header: HTMLElement | null = document.querySelector("[data-header]");

if (header) {
   window.addEventListener("scroll", function () {
      if (header) {
         window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
      }
   });
}