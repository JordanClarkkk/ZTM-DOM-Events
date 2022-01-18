var button1 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var shoppingList = document.getElementsByClassName("boldred")




// ADD TO LIST ON CLICK


button1.addEventListener("click", function()  {

// use conditional to not allow blank additions to the list
	if (input.value.length > 0) {
	// create the li item
	var li = document.createElement("li");
	// add the value that is written in the input variable
	li.appendChild(document.createTextNode(input.value));
	// add to the unordered list
	ul.appendChild(li);
	// clear input
	input.value = ""

	var button =document.createElement("button");
	button.appendChild(document.createTextNode("Done!"));
	li.appendChild(button);
	button.onclick=underlineParent;
}
})


// ADD TO LIST ON KEYPRESS

input.addEventListener("keypress", function(event){
// use conditional to not allow blank additions to the list
// AND then allow enter key to execute the whole function
	if (input.value.length > 0 && event.keyCode === 13)
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""

// CREATE BUTTON TO STRIKEOUT
	var button =document.createElement("button");
	// ADD TEXT TO BUTTON
	button.appendChild(document.createTextNode("Done!"));
	// APPEND TO LI
	li.appendChild(button);
	// INSTRUCTION FOR BUTTON
	button.onclick=underlineParent;

	// CREATE BUTTON TO DELETE
	var button =document.createElement("button"); 
// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete!"));
// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick=removeParent;
}
})

function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 



// TOGGLE CLASS (Strikeout)

// ul.onclick = function(event){
// 	var target = event.target;
// 	target.classList.toggle("done");
// }


