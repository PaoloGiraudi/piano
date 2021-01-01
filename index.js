const keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("click", (e) => playNote(key.dataset.note))
);

document.addEventListener("keydown", (e) => {
  const target = e.key;

  if (target === "z") playNote("C");
  if (target === "s") playNote("Csharp");
  if (target === "x") playNote("D");
  if (target === "d") playNote("Dsharp");
  if (target === "c") playNote("E");
  if (target === "v") playNote("F");
  if (target === "g") playNote("Fsharp");
  if (target === "b") playNote("G");
  if (target === "h") playNote("Gsharp");
  if (target === "n") playNote("A");
  if (target === "j") playNote("Bflat");
  if (target === "m") playNote("B");
});

function playNote(key) {
  const tune = document.getElementById(key);
  tune.play();
}
