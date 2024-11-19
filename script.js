let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.value);

    if (e.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector("#screen").value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      document.querySelector("#screen").value = string;
    } else if (e.target.innerHTML === "Del") {
      string = string.slice(0, -1);
      document.querySelector("#screen").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("#screen").value = string;
    }
  });
});
