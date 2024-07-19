// Change menu style on scroll
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#ff7e5f'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
  
  // Change menu item style on hover
  var menuItems = document.querySelectorAll('#navbar ul li a');
  menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      this.style.color = '#feb47b'; // Change font color on hover
    });
    item.addEventListener('mouseleave', function() {
      this.style.color = 'white';
    });
  });
  