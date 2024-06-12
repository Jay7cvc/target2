window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})

const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

openPopup.addEventListener('click', function() {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let formData = new FormData(event.target);
  let formDataObj = Object.fromEntries(formData.entries());

  // Здесь можно добавить код для отправки данных на сервер или другую логику обратной связи
  console.log(formDataObj);
  
  event.target.reset();
});

const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000);
