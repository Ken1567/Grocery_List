const groceries = [
  {
    section: "Meats",
    items: [
      "Fish",
      "Chicken",
      "Pork",
      "Beef"
    ],
  },
  {
    section: "Soaps and Shampoos",
    items: [
        "Head n shoulders",
        "Safeguard",
        "Dove",
        "Rejoice"
    ],
  },
  {
    section: "Vegetables",
    items: [
        "Carrots",
        "Petchay",
        "Talong",
        "Sitaw"
    ],
  },
  {
    section: "Canned goods",
    items: [
        "Corned beef",
        "Sardines",
        "Spam",
        "Beef loaf"
    ],
  }
];

const listContainer = document.getElementById("listContainer")
groceries.forEach(grocery => {
  const list = document.createElement("div")
  list.setAttribute("class", "list")
  list.innerHTML = `<h1>${grocery.section}</h1>`
  grocery.items.forEach(item => {
    list.innerHTML += `<input type='checkbox' name='${item}' id='${item}' value='${item}'><label for='${item}'>${item}</label><br />`
  })
  listContainer.append(list)
})