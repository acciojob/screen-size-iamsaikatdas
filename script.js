//your JS code here. If required.
let width = window.innerWidth;
let height = window.innerHeight;

console.log("Initial window width:", width);
console.log("Initial window height:", height);

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  
  console.log("New window width:", width);
  console.log("New window height:", height);
});
