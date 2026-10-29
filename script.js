/* Progressive enhancement: all program content works without JavaScript. */
"use strict";
document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const mobileLayout = window.matchMedia("(max-width: 720px)");

function closeMenu(returnFocus = false) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector("span").textContent = "Menu";
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) return closeMenu();
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.querySelector("span").textContent = "Close";
  navigation.classList.add("is-open");
  document.body.classList.add("menu-open");
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    const wasOpen = menuButton.getAttribute("aria-expanded") === "true";
    closeMenu();
    // Keep keyboard focus in the destination after the mobile navigation closes.
    if (wasOpen) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      }
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu(true);
});
document.addEventListener("click", event => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("focusin", event => {
  if (!event.target.closest(".site-header")) closeMenu();
});
mobileLayout.addEventListener("change", () => closeMenu());
