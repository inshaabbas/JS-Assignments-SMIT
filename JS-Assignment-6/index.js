//  Nav Fixed Start 
    const navbar = document.getElementById('mainNavbar');
    const navLogo = document.getElementById('navLogo');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        navbar.classList.add('fixed-nav');
        navLogo.src = "./Assets/Logo.jpeg";
      } else {
        navbar.classList.remove('fixed-nav');
        navLogo.src = "./Assets/logo-white.png";
      }
    });
//  Nav Fixed End 

// Link Section

  const linkItems = document.querySelectorAll('.link-item');
  const mainImage = document.getElementById('main-image');

  const imageMap = {
    match: './Assets/link-img-1.avif',
  identify: './Assets/link-img-2.avif',
  pay: './Assets/link-img-3.avif',
  fulfill: './Assets/link-img-4.avif',
  manage: './Assets/link-img-5.avif'
  };

  linkItems.forEach(item => {
    item.addEventListener('click', () => {
      linkItems.forEach(el => el.classList.remove('active'));

      item.classList.add('active');

      const id = item.getAttribute('data-id');
      mainImage.src = imageMap[id];
    });
  });

  // Slider Ends

  function toggleContent() {
  const extra = document.getElementById("extraContent");
  const icon = document.getElementById("toggleIcon").querySelector("i");

  if (extra.style.display === "none") {
    extra.style.display = "block";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    extra.style.display = "none";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
}
