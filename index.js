const skills = document.querySelector('#skills');
const aboutme = document.querySelector('#aboutme');
const connect = document.querySelector('#connect');

let intro = document.getElementById("intro_text")

skills.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "I know how to use <span id='colored-side'><a href='https://developer.mozilla.org/en-US/docs/web/html' id='hyper'>HTML</a></span>, <span id='colored-side'><a href='https://developer.mozilla.org/en-US/docs/Web/javascript' id='hyper'>JS</a></span> and <span id='colored-side'><a href='https://discord.js.org/#/' id='hyper'>Discord.js</a></span>. About a year ago I used <span id='colored-side'><a href='https://nilpointer-software.github.io/bdfd-wiki/guides/introduction.html' id='hyper'>BDFD</a></span> and then <span id='colored-side'><a href='https://aoi.js.org/docs/' id='hyper'>Aoi.js</a></span>, guess I'm a quick learner. ";
      intro.classList.remove('hide');
    }, 1000);
});

aboutme.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "I'm a huge nerd when it comes to coding. My hobbies mostly revolve around <span id='colored-side'>coding</span>, currently I'm improving my coding skills.";
      intro.classList.remove('hide');
    }, 1000);
});

connect.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "My Discord is <span id='colored-side'><a href='https://discord.com/users/714821119080923177' id='hyper'>Nexus#0783</a></span> & my email is <span id='colored-side'><a href='mailto:nexusptx@gmail.com' id='hyper'>nexusptx@gmail.com</a></span>.";
      intro.classList.remove('hide');
    }, 1000);
});


function home() {
  window.open("index.html")
}

function gallery() {
  window.open("gallery.html")
}