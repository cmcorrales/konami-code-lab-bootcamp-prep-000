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
  let keyPressed = parseInt(e.which);  
  if (keyPressed === codes[i]) {
    i++;
    if (i === codes.length) {
      window.alert("Hurray!");
      i=0;
    }
  }
   else {
    i = 0;
  }
  });
}

init();