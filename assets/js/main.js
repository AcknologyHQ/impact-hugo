// ########
// ### AnimateOnScroll - AoS : Initilize
// ########
AOS.init();

// ########
// ### Scroll to top
// ########
const backtotop = document.querySelector("#backtotop");
backtotop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

// ########
// ### Navbar Burger
// ########

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

bulmaCarousel.attach('#carousel-clients', {
  slidesToScroll: 1,
  slidesToShow: 6,
  loop: true,
  autoplay: true,
  duration: 2000,
  autoplaySpeed: 1000,
  infinite: true,
  navigation: false,
  pagination: false,
  navigationKeys: false,
  // pauseOnHover: false,
  timing: 'ease-in-out',
});

// HighlightJS
hljs.highlightAll();