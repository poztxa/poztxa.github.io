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


$(document).ready(function() {
  // Menambahkan tombol toggle untuk submenu
  $(".supermag-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>');

  // Menghilangkan tombol toggle untuk mega-menu jika ada
  $(".supermag-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove();

  // Menangani klik pada submenu-toggle untuk membuka atau menutup submenu
  $(".supermag-pro-mobile-menu .has-sub").on("click", function(e) {
    // Hanya tangani klik jika parent memiliki class 'has-sub'
    if ($(this).hasClass("has-sub")) {
      e.preventDefault(); // Menghindari default action dari <a> tag

      // Toggle kelas "show" untuk submenu
      var submenu = $(this).children(".m-sub");

      // Toggle efek slide untuk membuka/menutup submenu
      submenu.stop(true, true).slideToggle(170);

      // Toggle kelas "show" pada elemen 'has-sub'
      $(this).toggleClass("show");
    }
  });

  // Fungsi untuk menangani klik pada overlay atau tombol close untuk menutup menu
  $(".mobile-menu-toggle, .hide-supermag-pro-mobile-menu, .overlay").on("click", function() {
    $("body").toggleClass("nav-active");
  });
});


$(document).ready(function() {
  // Show the search bar when the 'show-search' button is clicked
  $(".show-search").on("click", function() {
    $("body").addClass("search-active"); // Add a class to the body to indicate the search is active
    $("#main-search-wrap").fadeIn(170).find("input").focus(); // Show the search form and focus on the input
  });

  // Hide the search bar when the 'hide-search' button is clicked
  $(".hide-search").on("click", function() {
    $("body").removeClass("search-active"); // Remove the 'search-active' class from the body
    $("#main-search-wrap").fadeOut(170).find("input").val("").blur(); // Hide the search form, clear the input, and blur it
  });
});








  console.log("Applying Theia Sticky Sidebar");  // Cek apakah fungsi dipanggil
  var fixedSidebar = 1;  // Variabel fixedSidebar untuk mengaktifkan sticky sidebar
  $("#main-wrapper, #sidebar-wrapper").each(function() {
      if (1 == fixedSidebar) {
          console.log("Applying to:", this);  // Cek elemen yang diterapkan
          $(this).theiaStickySidebar({
              containerSelector: "#content-wrapper > .container", 
              additionalMarginTop: 20, 
              additionalMarginBottom: 20 
          });
      }
  });
