//document.getElementById("addBtn").addEventListener("click", addListItem())

function addListItem() {
  let itemText = document.getElementById("textEntry").value;

  let itemContainer = document.createElement("div");
  itemContainer.classList.add("row");
  let listItemContainer = document.createElement("div");
  listItemContainer.classList.add("col");
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("col");
  let listItem = document.createElement("li");
  listItem.innerText = itemText;
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("ms-auto");
  deleteButton.classList.add("btn-dark");
  deleteButton.classList.add("btn");
  buttonContainer.appendChild(deleteButton);
  listItemContainer.appendChild(listItem);

  itemContainer.appendChild(listItemContainer);
  itemContainer.appendChild(buttonContainer);
  document.getElementById("listBox").appendChild(itemContainer);

  document.getElementById("textEntry").value = "";

  deleteButton.addEventListener("click", function () {
    itemContainer.remove();
  });
  deleteButton.innerHTML = "Delete";
}

//function addItem() {
// Get the value from the text box
//const itemText = document.getElementById("textEntry").value;

// Create a new list item element
//const listItem = document.createElement("li");
//listItem.textContent = itemText;

// Add the new list item to the list
//document.getElementById("listBox").appendChild(listItem);

// Clear the text box
//document.getElementById("itemText").value = "";
//}
