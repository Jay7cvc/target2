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