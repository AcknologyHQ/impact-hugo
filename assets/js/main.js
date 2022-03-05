(() => {
  // <stdin>
  AOS.init();
  var backtotop = document.querySelector("#backtotop");
  backtotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  bulmaCarousel.attach("#carousel-clients", {
    slidesToScroll: 1,
    slidesToShow: 6,
    loop: true,
    autoplay: true,
    duration: 2e3,
    autoplaySpeed: 1e3,
    infinite: true,
    navigation: false,
    pagination: false,
    navigationKeys: false,
    timing: "ease-in-out"
  });
  hljs.highlightAll();
})();
