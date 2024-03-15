const cupsToDrink = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = cupsToDrink.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

const highlightCups = (index) => {
  if (index === 7 && cupsToDrink[index].classList.contains("full")) index--;
  if (
    cupsToDrink[index].classList.contains("full") &&
    !cupsToDrink[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  cupsToDrink.forEach((cup, index2) => {
    if (index2 <= index) cup.classList.add("full");
    else cup.classList.remove("full");
  });
  updateBigCup();
};

cupsToDrink.forEach((cup, index) =>
  cup.addEventListener("click", () => highlightCups(index))
);

updateBigCup();
