const box01 = document.querySelector(".box01");
const input01 = document.querySelector(".box01 input");
const error01 = document.querySelector(".box01 p");
const button01 = document.querySelector(".box01 button");

const box02 = document.querySelector(".box02");
const heading02 = document.querySelector(".box02 h2");
const input02 = document.querySelector(".box02 input");
const error02 = document.querySelector(".box02 p");
const button02 = document.querySelector(".box02 button");

const box03 = document.querySelector(".box03");
const input03 = document.querySelector(".box03 input");
const error03 = document.querySelector(".box03 p");
const button03 = document.querySelector(".box03 button");

const box04 = document.querySelector(".box04");
const heading04 = document.querySelector(".box02 h2");
const input04 = document.querySelector(".box04 input");
const error04 = document.querySelector(".box04 p");
const button04 = document.querySelector(".box04 button");

const chanceLeft = document.querySelector(".box04 h3");

const box05 = document.querySelector(".box05")
const heading05 = document.querySelector(".box05 h2");
const p05 = document.querySelector(".box05 p");

let chance = 5;

button01.addEventListener("click", function () {
  if (input01.value === "") {
    error01.innerHTML = "Please enter your name";
  } else {
    box01.style.display = "none";
    box02.style.display = "flex";
    heading02.innerHTML = input01.value;
  }
});

button02.addEventListener("click", () => {
  if (input02.value === "") {
    error02.innerHTML = "Please enter a number";
  } else {
    if (input02.value >= 0 && input02.value <= 9) {
      box02.style.display = "none";
      box03.style.display = "flex";
    } else {
      error02.innerHTML = "Please enter a number between 0 to 9";
    }
  }
});

button03.addEventListener("click", function () {
  if (input03.value === "") {
    error03.innerHTML = "Please enter your name";
  } else {
    box03.style.display = "none";
    box04.style.display = "flex";
    heading04.innerHTML = input03.value;
  }
});

button04.addEventListener("click", () => {
  if (input04.value === "") {
    error04.innerHTML = "Guess the number between 0 to 9";
  } else {
    if (input02.value == input04.value) {
      box04.style.display = "none";
      box05.style.display = "flex";

      heading05.innerHTML = `${input03.value} wins`;
    } else {
      chance--;
      chanceLeft.innerHTML = "Chance left " + chance
      if (chance == 0) {
        box04.style.display = "none";
        box05.style.display = "flex";
        heading05.innerHTML = `${input01.value} wins`;
        p05.innerHTML = "player " + input01.value + " number is" + input02.value;
          
      } 
    }
  }
});
