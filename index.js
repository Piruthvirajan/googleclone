//button and i creation
const xbutton = document.createElement("button");
const xmark = document.createElement("i");
xmark.className = "fa-solid fa-xmark";
xbutton.appendChild(xmark);

//DOM div tag extraction
const div = document.querySelector(".buttons");

//Trigger Conditions for buttonAppearance
const inputSearch = document.getElementById("input");
inputSearch.addEventListener("input", buttonAppearance);

// to CREATE SINGLE BUTTON (even if i remove it, it doesn't display cuz of Dom does'nt allow duplication,
//  but creation of multiple buttons leads to (performance issues))
let isButton = false;

//buttonAppearance Function
function buttonAppearance() {
  if (inputSearch.value != "" && !isButton) {
    //linking it to DOM
    div.appendChild(xbutton);
    const firstChild = div.firstChild;
    div.insertBefore(xbutton, firstChild);
    isButton = true;

    //Trigger condition for text deletion by click
    xbutton.addEventListener("click", deleteValue);
    function deleteValue() {
      inputSearch.value = "";
      xbutton.remove();
      isButton = false;
    }
  } else if (inputSearch.value == "") {
    xbutton.remove();
    isButton = false;
  }
}
