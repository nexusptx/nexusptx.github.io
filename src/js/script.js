const introcontainer = document.querySelector('.intro-container');
const minfo = document.getElementById("buttonItem");
let intro = document.getElementById("intro_text");
let timer;

introcontainer.addEventListener('mouseover', function(event) {
  intro.style.transition = 'all 1.5s ease';
  intro.innerHTML = "Hey there, online I go by <span id='colored-side'></span><a href='https://discord.com/users/714821119080923177' id='hyper'>Nexus</a></span>. I'm just an average <span id='colored-side'>nerd</span> who usually breaks code instead fixing it. I'm also very chill and addicted to <span id='green-side'>Spotify</span>";
});

introcontainer.addEventListener('mouseout', function(event) {
  // Check if the mouse pointer is inside the intro container before resetting the intro text
  if (event.clientX >= introcontainer.offsetLeft && event.clientX <= introcontainer.offsetLeft + introcontainer.offsetWidth
    && event.clientY >= introcontainer.offsetTop && event.clientY <= introcontainer.offsetTop + introcontainer.offsetHeight) {
    return;
  }

  intro.style.opacity = 0;
  setTimeout(() => {
    intro.innerHTML = "Hey, I'm <span id='colored-side'>Nexus</span>";
    intro.style.opacity = 1;
  }, 500);
});

minfo.addEventListener('click', function() {
  window.location.href = "src/html/more_info.html";
});


let h1 = '#' + Math.floor(Math.random()*16777215).toString(16);
let h2 = '#' + Math.floor(Math.random()*16777215).toString(16);

document.body.style.backgroundImage = `linear-gradient(to right, ${h1}, ${h2})`;
