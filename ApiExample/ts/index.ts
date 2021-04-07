import axios from "axios";

const facts = document.getElementById("facts");
const inputFact = document.getElementById("inputFact");
const form = document.getElementById("form");
const errorInput = document.getElementById("errorInput");
const infoFact = document.getElementById("response");

facts.selectedIndex = 0;
let fact = "year";

facts.addEventListener("change", () => {
  fact = facts.options[facts.selectedIndex].value;
  inputFact.value = "";
  infoFact.innerHTML = "";
  switch (fact) {
    case "year":
      inputFact.placeholder = "Enter a year";
      break;
    default:
      inputFact.placeholder = "Enter a number";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNumber = inputFact.value;
  if (fact === "year") {
    if (inputNumber > 0 && inputNumber <= 2021) {
      errorInput.innerHTML = "";
      errorInput.classList.remove("errorInput");
      makeRequest(fact, inputNumber);
    } else {
      errorInput.innerHTML = "Enter a valid year";
      errorInput.classList.add("errorInput");
    }
  } else {
    makeRequest(fact, inputNumber);
  }
});

function makeRequest(fact, number): any {
  let options = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${number}/${fact}`,
    params: { fragment: "true", json: "true" },
    headers: {
      "x-rapidapi-key": "46651a7830msh9bfbd61ae8e1cf1p1ba0edjsn88221db0542a",
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      infoFact.innerHTML = `
      <p id="factNumber">${response.data.number}</p>
      <p id="factType">${response.data.type.toUpperCase()}</p>
      <p id="factText">${response.data.found ? response.data.text : "Nothing particular for that number"}</p>
      `;
    })
    .catch(function (error) {
      console.error(error);
    });
}
