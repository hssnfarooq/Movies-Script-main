"use strict";

// variables for navbar menu toggle
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navbarMenuBtn = document.querySelector(".navbar-menu-btn");
const sidebarMenuBtn = document.querySelector(".sidebar-menu-btn");

// variables for navbar search toggle
const navbarForm = document.querySelector(".navbar-form");
const navbarFormCloseBtn = document.querySelector(".navbar-form-close");
const navbarSearchBtn = document.querySelector(".navbar-search-btn");

// navbar menu toggle function
function navIsActive() {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  // navbarMenuBtn.classList.toggle("active");
}

navbarMenuBtn.addEventListener("click", navIsActive);

sidebarMenuBtn.addEventListener("click", function () {
  nav.classList.remove("active");
});

// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle("active");

navbarSearchBtn.addEventListener("click", searchBarIsActive);
navbarFormCloseBtn.addEventListener("click", searchBarIsActive);

// //////////////////////// modal

/*
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn--download");

const openModal = function () {
  modal.classList.remove("hidden"); // Show the modal
  overlay.classList.remove("hidden"); // Show the overlay

  // Add animation to the modal
  modal.style.animation = "modalPopIn 0.5s ease forwards"; // Add the animation
  overlay.classList.add("show"); // Show overlay smoothly
};

const closeModal = function () {
  modal.classList.add("hidden"); // Hide the modal
  overlay.classList.add("hidden"); // Hide the overlay
  overlay.classList.remove("show");

  // Remove animation after modal is hidden
  modal.style.animation = ""; // Reset animation
};

btnOpenModal.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
*/
const modal = document.querySelector(".modal");
const howto = document.querySelector(".howto");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn--download");
const closeModalButton = document.querySelector(".close-modal");

const openModal = function (modal) {
  modal.classList.remove("hidden"); // Show the modal
  overlay.classList.remove("hidden"); // Show the overlay

  // Add pop-in animation to the modal
  modal.style.animation = "modalPopIn 0.5s ease forwards";
  overlay.classList.add("show"); // Show overlay smoothly
};

const closeModal = function (modal) {
  // Add pop-out animation to the modal and fade-out for overlay
  modal.style.animation = "modalPopOut 0.5s ease forwards";

  // Simultaneously start fading out the overlay
  overlay.style.transition = "opacity 0.5s ease";
  overlay.style.opacity = "0";

  // Wait for the animation to complete before hiding the modal and overlay
  modal.addEventListener("animationend", function handler() {
    modal.classList.add("hidden"); // Hide the modal after animation ends
    overlay.classList.add("hidden"); // Hide the overlay

    // Reset styles
    overlay.style.opacity = ""; // Reset overlay opacity
    overlay.classList.remove("show");
    modal.style.animation = ""; // Reset animation
    modal.removeEventListener("animationend", handler); // Remove the event listener
  });
};

// Close modal only when clicking on the overlay, not the modal itself
overlay.addEventListener("click", function (e) {
  // Check if the click is outside the modal
  if (e.target === overlay) {
    closeModal();
  }
});

closeModalButton.addEventListener("click", function () {
  closeModal();
});

// Open modal on button click
btnOpenModal.addEventListener("click", openModal);

// Close modal on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
