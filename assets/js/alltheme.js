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
  $("#main-wrapper, #sidebar-wrapper").theiaStickySidebar({
    containerSelector: "#content-wrapper > .container", 
    additionalMarginTop: 20,
    additionalMarginBottom: 20,
    sidebarBehavior: "modern",
    minWidth: 768, 
  });
});
