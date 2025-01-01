document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector('.darkmode-toggle');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('theme') === 'dark') {
      htmlElement.classList.add('is-dark');
    }

    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', function() {
        htmlElement.classList.toggle('is-dark');
        
        if (htmlElement.classList.contains('is-dark')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      });
    }
  });


// Toggle untuk membuka dan menutup menu
$(".mobile-menu-toggle, .hide-supermag-pro-mobile-menu, .overlay").on("click", function() {
    $("body").toggleClass("nav-active");
});

// Menangani klik submenu
$(".supermag-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>');
$(".supermag-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove();
$(".supermag-pro-mobile-menu ul li .submenu-toggle").on("click", function(e) {
    $(this).parent().toggleClass("show").children(".m-sub").slideToggle(170);
    e.preventDefault();
});
