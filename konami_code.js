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
  if (keyPressed.toString() === codes[i]) {
    i++;
    if (i === codes.length-1) {
      alert("Hurray!");
      i=0;
    }
  }
   else {
    i = 0;
  }
  });
}

init();