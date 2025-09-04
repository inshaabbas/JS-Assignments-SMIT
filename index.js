var slides = [
  {
    image: "./Assets/Brownie.jpeg"
  },
  {
    image: "./Assets/Cookies.jpeg"
  },
  {
    image: "./Assets/Cupcake.png"
  },
  {
    image: "./Assets/Donut.jpeg"
  },
  {
    image: "./Assets/Pancake.png"
  },
  {
    image: "./Assets/Red-Velvet-Cake.jpeg"
  },
  {
    image: "./Assets/Waffle.jpeg"
  },
];

var currentImage = document.getElementById("silderImage");
var currentIndex = 0;

function updateSlide() {
  currentImage.src = slides[currentIndex].image;
}

function next() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function prev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

// Thumbnail click
var thumbnails = document.getElementsByClassName('image-bottom')[0].getElementsByTagName('img');

for (var i = 0; i < thumbnails.length; i++) {
  (function(index) {
    thumbnails[index].onclick = function() {
      currentIndex = index;
      updateSlide();
    };
  })(i);
}

// Initial slide
updateSlide();
