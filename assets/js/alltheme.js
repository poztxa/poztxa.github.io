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


document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.has-sub > a');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Menghindari link untuk navigasi
      const subMenu = item.nextElementSibling;
      if (subMenu.style.display === 'none' || subMenu.style.display === '') {
        subMenu.style.display = 'block';
      } else {
        subMenu.style.display = 'none';
      }
    });
  });

  // Menutup menu saat klik di luar menu
  document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.supermag-pro-mobile-menu').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  });
});
