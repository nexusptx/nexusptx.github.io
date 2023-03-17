const skills = document.querySelector('#skills');
const aboutme = document.querySelector('#aboutme');
const connect = document.querySelector('#connect');

let intro = document.getElementById("intro_text")





skills.addEventListener('click', function() {
  
    intro.classList.add('hide');
    setTimeout(function() {
      intro.innerHTML = "I have a decent understanding of using <span id='colored-side'><a href='https://developer.mozilla.org/en-US/docs/Web/javascript' id='hyper'>JS</a></span> and I'm pretty good at <span id='colored-side'><a href='https://discord.js.org/#/' id='hyper'>discord.js</a></span>.";
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
    intro.innerHTML = "The gallery layout has been fine tuned by me, still <span id='colored-side'>80%</span> left to fine tune. The rest of this website is made by <a href='https://discord.com/users/714821119080923177' id='hyper'>Nexus</a></span>, see the code on <span id='colored-side'><a href='https://github.com/nexusptx/nexusptx.github.io' id='hyper'>Github</a></span>.";
    intro.classList.remove('hide');
  }, 1000);z
});



function gallery() {
  window.location.href = "src/html/gallery.html";
}
