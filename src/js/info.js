const introcontainer = document.querySelector('.intro-container');
const homebutton = document.querySelector('#homebutton');

let intro = document.getElementById("intro_text");
let timer;

introcontainer.addEventListener('mouseenter', function() {
  intro.style.transition = 'all 1.5s ease';
  intro.innerHTML = "If you ever want to reach out to me do so by emailing me at <a href='mailto:nexusptx@gmail.com' id='hyper'>nexusptx@gmail.com</a>. Also consider checking out the <a href='../html/gallery.html' id='gallery-link'>gallery</a>";
});

introcontainer.addEventListener('mouseleave', function() {
  intro.style.transition = 'all 1.5s ease';
  intro.innerHTML = "More info on <span id='colored-side'>Nexus</span>";
});

homebutton.addEventListener('click', function() {
  window.location.href = "../../index.html";
});

