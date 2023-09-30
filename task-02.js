const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const listElements = document.createElement("ul");
const listElement = ingredients.forEach((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listElements.appendChild(listEl);
});

console.log(listElements);
document.body.appendChild(listElements);
