const listItems = document.querySelectorAll("[id = categories] .item");
console.log(`'У списку ${listItems.length} категорії.'`);

// const title = document.querySelector(".item h2");
// const listEl = document.querySelector(".item li");
// console.log(title.textContent);

listItems.forEach((list) => {
  const titleContent = list.querySelector("h2").textContent;
  const listLength = list.querySelectorAll("li");
  console.log(
    `Caterogy ${titleContent}, Amount of elements ${listLength.length}`
  );
});
