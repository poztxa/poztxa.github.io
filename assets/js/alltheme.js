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


// Toggle menu mobile (open/close)
$(".mobile-menu-toggle, .hide-supermag-pro-mobile-menu, .overlay").on("click", function() {
    $("body").toggleClass("nav-active");
});

// Menangani submenu dalam menu mobile
$(".supermag-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>');
$(".supermag-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove();
$(".supermag-pro-mobile-menu ul li .submenu-toggle").on("click", function(e) {
    $(this).parent().toggleClass("show").children(".m-sub").slideToggle(170);
    e.preventDefault();
});

// Menambahkan sosial media dan menu dari topbar untuk mobile
$(".mobile-topbar-social").each(function() {
    var e = $(this), t = $("#topbar-social ul.social").clone();
    t.find("a").addClass("btn");
    t.appendTo(e);
});

$(".mobile-topbar-menu").each(function() {
    var e = $(this);
    $("#topbar-menu ul.link-list").clone().appendTo(e);
});

// Menangani fixed menu saat scroll (jika fixedMenu aktif)
$(".header-inner").each(function() {
    var e = $(this);
    if (1 == fixedMenu && e.length > 0) {
        var t = $(document).scrollTop(),
            a = e.offset().top,
            s = e.height(),
            r = a + s + s;

        $(window).scroll(function() {
            var s = $(document).scrollTop();
            if (s > r) {
                e.addClass("is-fixed");
            } else if (s <= a || s <= 0) {
                e.removeClass("is-fixed");
            }

            // Menangani visibilitas header saat scroll
            s > t ? e.removeClass("show") : e.addClass("show");
            t = s;
        });
    }
});

// Menangani sidebar sticky jika fixedSidebar aktif
fixedSidebarIfy();

// Fungsi untuk memastikan sidebar tetap sticky saat scroll
function fixedSidebarIfy() {
    $("#main-wrapper, #sidebar-wrapper").each(function() {
        if (1 == fixedSidebar) {
            $(this).theiaStickySidebar({
                containerSelector: "#content-wrapper > .container",
                additionalMarginTop: 20,
                additionalMarginBottom: 20
            });
        }
    });
}

// Menambahkan event untuk menutup menu ketika tombol close atau overlay diklik
$(".hide-supermag-pro-mobile-menu, .overlay").on("click", function() {
    $("body").removeClass("nav-active"); // Menghapus kelas 'nav-active' untuk menutup menu
});
