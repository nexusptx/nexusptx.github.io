const skills = document.querySelector('#skills');
const aboutme = document.querySelector('#aboutme');
const connect = document.querySelector('#connect');

let intro = document.getElementById("intro_text")





skills.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "I have a decent understanding of using <span id='colored-side'><a href='https://developer.mozilla.org/en-US/docs/Web/javascript' id='hyper'>JS</a></span>, although I am pretty good at <span id='colored-side'><a href='https://discord.js.org/#/' id='hyper'>discord.js</a></span>.";
      intro.classList.remove('hide');
    }, 1000);
});

aboutme.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "Naturally I'm optimistic, I also happen to love <span id='colored-side'>coding</span>.";
      intro.classList.remove('hide');
    }, 1000);
});

connect.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "My Discord is <span id='colored-side'><a href='https://discord.com/users/714821119080923177' id='hyper'>Nexus#6858</a></span> & my email is <span id='colored-side'><a href='mailto:nexusptx@gmail.com' id='hyper'>nexusptx@gmail.com</a></span>.";
      intro.classList.remove('hide');
    }, 1000);z
});

credits.addEventListener('click', function() {
  
  intro.classList.add('hide');
  setTimeout(function() {
    intro.innerHTML = "The custom cursor is from <span id='colored-side'><a href='https://github.com/PurpleCube/start' id='hyper'>PurpleCube</a></span>, the rest is made by <span id='colored-side'><a href='https://discord.com/users/714821119080923177' id='hyper'>Nexus</a></span>, see the code on <span id='colored-side'><a href='https://github.com/nexusptx/nexusptx.github.io' id='hyper'>Github</a></span>.";
    intro.classList.remove('hide');
  }, 1000);z
});



function gallery() {
  window.location.href = "src/html/gallery.html";
}

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});

document.addEventListener('mouseleave', () => {
  cursor.classList.remove('active');
});
