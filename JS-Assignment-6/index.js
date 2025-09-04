//  Nav Fixed Start 
    const navbar = document.getElementById('mainNavbar');
    const navLogo = document.getElementById('navLogo');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        navbar.classList.add('fixed-nav');
        navLogo.src = "./Assets/Logo.jpeg";
      } else {
        navbar.classList.remove('fixed-nav');
        navLogo.src = "./Assets/Logo.jpeg";
      }
    });
//  Nav Fixed End 