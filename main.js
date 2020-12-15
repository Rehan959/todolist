//Garbing the Html into javascript
const text = document.querySelector("#text");
const submit = document.querySelector("#submit");
//making a aray name todoitems to store data
let todoitems = [];
const ulElm = document.querySelector("ul");
ulElm.addEventListener("click", deleteTodo);
// adding a eventlister to button name submit
submit.addEventListener("click", addToList);
//This is the function for submit button
function addToList() {
  //if the text value is null or blank it will run first statement or the else
  if (text.value === "") {
    alert("plese enter a todo something in todolist");
  } else {
    const liElm = document.createElement("li");
    liElm.innerHTML = `<p><span>${text.value}</span><i class="fa fa-trash m-2"></i></p>`;
    ulElm.appendChild(liElm);
    //if todo items is null then todoitems is empty or text value will be store in todoitems
    if (todoitems === null) {
      todoitems = [];
    } else {
      todoitems.push(text.value);
      localStorage.setItem("todoitems", JSON.stringify(todoitems));
      text.value = "";
    }
  }
}
// getting the items from todoitems
const getTodo = () => {
  //getting the items from local storage
  const data = localStorage.getItem("todoitems");
  todoitems = JSON.parse(data);
  if (todoitems === null) {
    todoitems = [];
  }
  todoitems.forEach((Element) => {
    const liElm = document.createElement("li");
    liElm.innerHTML = `<p><span>${Element}</span><i class="fa fa-trash m-2"></i></p>`;
  });
};
//calling the getTodo function
getTodo();

function deleteTodo(e) {
  const item = e.target;
  if (item.classList[1] === "fa-trash") {
    const value = item.parentElement.childNodes[0].innerHTML;
    const del = item.parentElement.parentElement;
    const todo = JSON.parse(localStorage.getItem("todoitems"));
    const todolist = [];
    todo.forEach((ele) => {
      if (value != ele) {
        todolist.push(ele);
      }
    });
    localStorage.setItem("todoitems", JSON.stringify(todolist));
    del.remove();                                 
  }
}                                      