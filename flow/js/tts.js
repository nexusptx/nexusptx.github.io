let voice = new SpeechSynthesisUtterance()

function speak() {
    let speech = new SpeechSynthesisUtterance()
  let textInput = document.getElementById("textInput")
  let speak = document.getElementById("speak")
  speech.volume = document.getElementById("volume").value
    speech.text = textInput.value
    speech.lang = 'en'
    speech.rate = document.getElementById("speed").value
    window.speechSynthesis.speak(speech)

  } 


  function stop() {
    let speech = new SpeechSynthesisUtterance()
    if(window.speechSynthesis.speaking === false) return alert("The TTS is not playing")
    window.speechSynthesis.cancel(speech)
  } 
  
  function resume() {
    let speech = new SpeechSynthesisUtterance()
    if(window.speechSynthesis.paused === false) return alert("The TTS is already playing")
    window.speechSynthesis.resume(speech)
  } 

  function pause() {
    let speech = new SpeechSynthesisUtterance()
  if(window.speechSynthesis.paused === true) return alert("The TTS is already paused")
    window.speechSynthesis.pause(speech)
  } 


  
 
