const input = document.getElementById("input");
const past_input = document.getElementById("past_input");

function clearScreen() {
  input.value = "";
  past_input.innerHTML = "";
}

function Clear() {
  input.value = input.value.slice(0, -1);
}

function display(value) {
  if (input.value) {
    input.value += value;
  } else {
    input.value = value;
  }
}

const calculate = (val = "=") => {
  past_input.innerHTML = input.value;
  past_input.setAttribute("animate", "1");
  setTimeout(() => {
    past_input.setAttribute("animate", "0");
  }, 500);

  input.value = eval(input.value);
};

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  chk.classList.toggle("dark");
});
