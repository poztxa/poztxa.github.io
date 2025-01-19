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



document.addEventListener("DOMContentLoaded", function() {
  const fixedMenu = 1; // Menentukan apakah menu harus tetap dipasang
  const headerInner = document.querySelector(".header-inner");

  if (fixedMenu === 1 && headerInner) {
    let initialScroll = window.pageYOffset; // Posisi awal scroll
    const headerOffset = headerInner.offsetTop; // Posisi vertikal elemen header
    const headerHeight = headerInner.offsetHeight; // Tinggi elemen header
    const scrollTrigger = headerOffset + headerHeight; // Batas scroll untuk menambah kelas is-fixed

    // Event listener untuk scroll
    window.addEventListener("scroll", function() {
      const currentScroll = window.pageYOffset; // Posisi scroll saat ini

      // Cek jika posisi scroll sudah melewati scrollTrigger
      if (currentScroll > scrollTrigger) {
        headerInner.classList.add("is-fixed");
      } else {
        headerInner.classList.remove("is-fixed");
      }

      // Menambahkan kelas "show" saat scroll naik
      if (currentScroll < initialScroll) {
        headerInner.classList.add("show");
      } else {
        headerInner.classList.remove("show");
      }

      // Update posisi scroll terakhir
      initialScroll = currentScroll;
    });
  }
});




$(document).ready(function() {
  $("#supermag-pro-load-more-link").on("click", function(e) {
    e.preventDefault();
    var loadMoreUrl = $(this).attr("href");
    
    $(this).hide();
    $.ajax({
      url: loadMoreUrl,
      success: function(data) {
        var newPosts = $(data).find(".blog-posts");
        newPosts.find(".index-post").addClass("post-animated post-fadeInUp");
        $(".blog-posts").append(newPosts.html());
        
        var nextPageLink = $(data).find("#supermag-pro-load-more-link");
        if (nextPageLink.length) {
          $("#supermag-pro-load-more-link").attr("href", nextPageLink.attr("href")).show();
        } else {
          $("#supermag-pro-load-more-link").hide();
          $("#blog-pager .no-more").addClass("show");
        }
      },
      beforeSend: function() {
        $("#blog-pager .loading").show();
      },
      complete: function() {
        $("#blog-pager .loading").hide();
      }
    });
  });
});




  $(document).ready(function() {
    // Menambahkan event listener untuk elemen dengan kelas .window-ify
    $(".supermag-pro-share-links .window-ify").on("click", function() {
      var e = $(this), // Menyimpan referensi ke elemen yang diklik
          t = e.data("url"), // Mengambil URL dari data-url
          a = e.data("width"), // Mengambil lebar dari data-width
          s = e.data("height"), // Mengambil tinggi dari data-height
          r = window.screen.width, // Lebar layar
          o = window.screen.height, // Tinggi layar
          i = Math.round(r / 2 - a / 2), // Menghitung posisi horizontal untuk jendela baru
          n = Math.round(o / 2 - s / 2); // Menghitung posisi vertikal untuk jendela baru

      // Membuka jendela baru dengan URL dan ukuran yang ditentukan
      window.open(t, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + a + ",height=" + s + ",left=" + i + ",top=" + n).focus();
    });

    // Menambahkan event listener untuk tombol "Show More"
    $(".supermag-pro-share-links").each(function() {
      var e = $(this);
      e.find(".show-hid a").on("click", function() {
        e.toggleClass("show-hidden"); // Menampilkan atau menyembunyikan elemen berbagi sosial tambahan
      });
    });
  });


!function(o){o.fn.lazyify=function(){return this.each(function(){var t=o(this),a=o(window),n=t.attr("data-image"),e="w"+Math.round(t.width()+t.width()/10)+"-h"+Math.round(t.height()+t.height()/10)+"-p-k-no-nu",r="";n.match("resources.blogblog.com")&&(n=noThumbnail),r=n.match("/s72-c")?n.replace("/s72-c","/"+e):n.match("/w72-h")?n.replace("/w72-h72-p-k-no-nu","/"+e):n.match("=w72-h")?n.replace("=w72-h72-p-k-no-nu","="+e):n,t.is(":hidden")||a.on("load resize scroll",function o(){if(a.scrollTop()+a.height()>=t.offset().top){a.off("load resize scroll",o);var n=new Image;n.onload=function(){t.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},n.src=r}}).trigger("scroll")})}}(jQuery);
