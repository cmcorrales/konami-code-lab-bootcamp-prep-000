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
  let keyPressed = parseInt(e.key);  
  if (keyPressed == codes[i]) {
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