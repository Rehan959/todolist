const text = document.querySelector("#text");
const submit = document.querySelector("#submit");
let todoitems = [];
const ulElm = document.querySelector("ul");
submit.addEventListener("click", addToList);
function addToList() {
  if (text.value === "") {
    alert("plese enter a todo something in todolist");
  } else {
    const liElm = document.createElement("li");
    liElm.innerHTML = text.value;
    ulElm.appendChild(liElm);
    todoitems.push(text.value);
    localStorage.setItem("todoitems", JSON.stringify(todoitems));
    text.value = "";
  }
}
const getTodo = () => {
  const data = localStorage.getItem("todoitems");
  todoitems = JSON.parse(data);
  todoitems.forEach((element) => {
    const liElm = document.createElement("li");
    liElm.innerHTML = element;
    ulElm.appendChild(liElm);
  });
};
getTodo();