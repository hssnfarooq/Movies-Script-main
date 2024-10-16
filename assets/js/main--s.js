"use strict";

// variables for navbar menu toggle
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navbarMenuBtn = document.querySelector(".hamburger");
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

const showDropdown = (content, button) => {
  const dropdownContent = document.getElementById(content),
    dropdownButton = document.getElementById(button);

  dropdownButton.addEventListener("click", () => {
    // We add the show-dropdown class, so that the menu is displayed
    dropdownContent.classList.toggle("show-dropdown");
  });
};

showDropdown("dropdown-content", "dropdown-button");

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
const howto = document.querySelector(".btn--click");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn--download");
let closeModalButton = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden"); // Show the modal
  overlay.classList.remove("hidden"); // Show the overlay

  // Add pop-in animation to the modal
  modal.style.animation = "modalPopIn 0.5s ease forwards";
  overlay.classList.add("show"); // Show overlay smoothly
};

const closeModal = function () {
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

// Open modal on button click
btnOpenModal.addEventListener("click", function () {
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <table class="main__table main__table--dash">
    <thead>
      <tr>
        <th>DOWNLOAD LINKS</th>
        <th>QUALITY</th>
        <th>LANGUAGES</th>
        <th class="tb-col-last">SIZE</th>
      </tr>
    </thead>
    <div class="separator-box">
      <div class="separator">&nbsp;</div>
    </div>

    <tbody>
      <tr>
        <td>
          <div
            class="main__table-text main__table-text--green"
          >
            <a
              href="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
              download
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
                />
              </svg>
              Download</a
            >
          </div>
        </td>
        <td>
          <div class="main__table-text">1080p</div>
        </td>
        <td>
          <div class="main__table-text">Malayalam</div>
        </td>
        <td>
          <div class="main__table-text tb-col-last">
            ....
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div
            class="main__table-text main__table-text--green"
          >
            <a
              href="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
              download
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
                />
              </svg>
              Download</a
            >
          </div>
        </td>
        <td>
          <div class="main__table-text">720p</div>
        </td>
        <td>
          <div class="main__table-text">Telugu</div>
        </td>
        <td>
          <div class="main__table-text tb-col-last">
            ....
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div
            class="main__table-text main__table-text--green"
          >
            <a
              href="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
              download
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
                />
              </svg>
              Download</a
            >
          </div>
        </td>
        <td>
          <div class="main__table-text">480p</div>
        </td>
        <td>
          <div class="main__table-text">Tamil</div>
        </td>
        <td>
          <div class="main__table-text tb-col-last">
            ....
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div
            class="main__table-text main__table-text--green"
          >
            <a
              href="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
              download
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
                />
              </svg>
              Download</a
            >
          </div>
        </td>
        <td>
          <div class="main__table-text">360p</div>
        </td>
        <td>
          <div class="main__table-text">Bangla</div>
        </td>
        <td>
          <div class="main__table-text tb-col-last">
            ....
          </div>
        </td>
      </tr>
    </tbody>
  </table>`;
  openModal();
});
howto.addEventListener("click", function () {
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <div class="trailer__img__box">
    <video
      class="my-video"
      width="100%"
      style="border-radius: 25px;"
      controls
      crossorigin
      playsinline
      poster="./assets/iron-man-imgs/youtube-thumbnail.svg"
    >
      <source
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        type="video/mp4"
        size="576"
      />
      <source
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
        type="video/mp4"
        size="720"
      />
      <source
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
        type="video/mp4"
        size="1080"
      />

      <track
        kind="captions"
        label="English"
        srclang="en"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
        default
      />
      <track
        kind="captions"
        label="Français"
        srclang="fr"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
      />
      <a
        href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        download
        >Download</a
      >
    </video>
  </div>`;
  openModal();
  const modalVideo = modal.querySelector("video");
  if (!modalVideo.player) {
    modalVideo.player = new Plyr(modalVideo, { captions: { active: true } });
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-modal")) {
    closeModal();
    const modalVideo = modal.querySelector("video");
    if (modalVideo.player) {
      modalVideo.player.pause();
    }
  }
});

// Close modal on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
