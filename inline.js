const btn = document.getElementById("iframe-btn");
let counterVal = 0;

btn.addEventListener("click", () => {
  const frameParentEl = parent.__counter__;
  frameParentEl.innerText = ++counterVal;
});
