// Selecting the ul
var list = document.getElementById("listContainer")
function add() {
    var inputValue = document.getElementById("inputBox").value
    var listitem = document.createElement("li")
    listitem.innerHTML ='<input type="checkbox">' + inputValue + `<img src="./Assests/material-symbols--delete-sweep.png" height="25px" onclick="deleteitem(event)" alt="">`;
    list.append(listitem)
}

function deleteitem(event) {
    event.target.parentElement.remove()
}
