const grad = document.getElementById('grad');
const color = document.getElementById('color');



grad.addEventListener("click", function() {
  let x = adjustBackgroundColor(6, '1234567890abcdef')
  let y = adjustBackgroundColor(6, 'abcdef1234567890')
  document.body.style.background = `linear-gradient(#${x}, #${y})`


  document.body.style.height = "100vh"
  document.getElementById("hex").innerText = `#${x} - #${y}`


})





color.addEventListener("click", function() {
  let x = adjustBackgroundColor(6, '1234567890abcdef')

  document.body.style.background = `#${x}`
  document.getElementById("hex").innerText = `#${x}`
})


function adjustBackgroundColor(len, arr) {
  var ans = '';
  for (var i = len; i > 0; i--) {
    ans +=
      arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}
