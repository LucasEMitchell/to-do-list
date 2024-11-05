//document.getElementById("addBtn").addEventListener("click", addListItem())

function addListItem() {
  let itemText = document.getElementById("textEntry").value;

  let listItem = document.createElement("li");
  listItem.innerText = itemText;

  document.getElementById("listBox").appendChild(listItem);

  document.getElementById("textEntry").value = "";

  let deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
  deleteButton.innerHTML = "Delete";

  //li.addEventListener('click', function() {
  //this.parentNode.removeChild(this);
  //});
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
