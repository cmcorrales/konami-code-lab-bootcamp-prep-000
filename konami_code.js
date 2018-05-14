const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let i = 0;
  document.body.addEventListener('keydown', function(e) {
  let keyPressed = e.key;  
      if (keyPressed.toString() == codes[i]) {
        i++;
      }
      else {
        i = 0;
      }
  if (i == codes.length) {
      window.alert("WOO KONAMI CODE");
      i=0;
  }
  });
}

init();