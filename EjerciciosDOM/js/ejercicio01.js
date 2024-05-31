// JS-06 DOM Manipulation

//* Exercise #1
//* Modify the style of the paragraph text through javascript code. Sample HTML file:

const text = document.getElementById("text");
const jsstyle = document.getElementById("jsstyle");

function changeStyle(text) {
  text.style.fontFamily = "Arial";
  text.style.color = "red";
  text.style.fontSize = "20px";
}

jsstyle.addEventListener("click", () => {
  changeStyle(text);
});

//* Exercise #2
//* Write a JavaScript function to get the values of First and Last name from the following form.
//* Print out the names to the console.

const form = document.getElementById("form1");

function getValues() {
  //* form.elements es una colección de todos los elementos dentro del formulario
  //   const firstName = form.elements.fname.value;
  //   const lastName = form.elements.lname.value;

  //* busca un elemento de entrada (input) con un atributo name
  const firstName = document.querySelector("input[name='fname']").value;
  const lastName = document.querySelector("input[name='lname']").value;

  console.log(`${firstName} ${lastName}`);
}

getValues();

//* Exercise #3
//* Write a function and call it when clicking a button to show an alert with:

// The number of links on the page
// The first link in the page
// The last link in the page

const button = document.getElementById("btn");

function alerta() {
  const links = document.querySelectorAll("a");
  alert(
    `The number of links on the page is ${links.length}. The first link is ${
      links[0]
    }. The last link is ${links[links.length - 1]}`
  );
}

button.addEventListener("click", () => {
  alerta();
});

//* Exercise #4
// Write the code that will do the following:

//* Select the section with a container id without using querySelector.
// const container = document.getElementById("container");

//* Select the section with a container id using querySelector.
const container = document.querySelector("#container");

//* Select all the items list with a class of "second".

const second = document.querySelectorAll("li[class='second']");
console.log(second);

// const second02 = document.getElementsByClassName("second");
// console.log(second02);

//* Select a list item with a class of third, but only the list item inside of the ol tag.

const third = document.querySelectorAll("ol > li.third");
console.log(third);

//* Give the text "Hello!" to the section with a container id.

container.insertAdjacentHTML("beforeend", "Hello!");

//* Add the main class to the div with a footer class.

const footer = document.querySelector(".footer");
footer.classList.add("main");

//* Remove the main class on the div with a footer class.

footer.classList.remove("main");

//* Create a new li element.

const li = document.createElement("li");

//* Give the li the text "four".

li.insertAdjacentText("beforeend", "four");

//* Append the li to the ul element.

const ul = document.querySelector("ul");
ul.appendChild(li);
