const btn = document.querySelector("#btn");
const dicaTXT = document.querySelector("#dicaTXT");
const numAdvice = document.querySelector("#numAdvice");

function reqApi() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      dicaTXT.innerHTML = `”${data.slip.advice}” `;
      numAdvice.innerHTML = data.slip.id;
    })
    .catch((error) => {
      console.log("Erro ao buscar o conselho:", error);
    });
}

btn.addEventListener("click", () => {
  reqApi();
});
