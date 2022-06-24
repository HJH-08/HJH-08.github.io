const NavToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

NavToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.getElementById("nav__items--home").addEventListener("mouseover", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/homebackground.jpg)";
  }, false);

document.getElementById("nav__items--home").addEventListener("mouseout", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/defaultbackground.jpg)";
  }, false);

document.getElementById("nav__items--aboutme").addEventListener("mouseover", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/aboutme.jpg)";
  }, false);

document.getElementById("nav__items--aboutme").addEventListener("mouseout", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/defaultbackground.jpg)";
  }, false);

  document.getElementById("nav__items--services").addEventListener("mouseover", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/myservices.jpg)";
  }, false);

document.getElementById("nav__items--services").addEventListener("mouseout", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/defaultbackground.jpg)";
  }, false);

document.getElementById("nav__items--work").addEventListener("mouseover", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/mywork.jpg)";
  }, false);

document.getElementById("nav__items--work").addEventListener("mouseout", function() {
    document.querySelector('.nav').style.backgroundImage = "url(img/defaultbackground.jpg)";
  }, false);

