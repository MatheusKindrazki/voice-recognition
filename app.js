const button = document.querySelector('.talk');
const content = document.querySelector(".content");


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = function (event) {
  const current = event.resultIndex;
  
  const transcript = event.results[current][0].transcript;

  content.textContent = transcript;

}

// ! Add the listener to the button 
button.addEventListener('click', () => {
  recognition.start()
})
