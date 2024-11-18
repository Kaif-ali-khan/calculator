const inputField = document.getElementById("screen");
const btns = document.querySelectorAll("button");
  
inputField.addEventListener("change", (event) => {
  let input = event.target.value;
  console.log(input);
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click");
  });
});
