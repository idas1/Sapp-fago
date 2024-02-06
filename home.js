$(document).ready(function () {
  $(".bl6").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 6,
        nav: true,
        loop: true,
      },
    },
  });

  $(".bl8").owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      300: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  });
});

let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");
function updateImage(event) {
  let image = event.target;
  mainPhoto.src = image.src;
}

images.forEach(function (image) {
  image.addEventListener("click", updateImage);
});

let button = document.querySelector('.owl-prev');
button.innerHTML = `
    <span aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fill-rule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10" clip-rule="evenodd"/>
        </svg>
    </span>`;

