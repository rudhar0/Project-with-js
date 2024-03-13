var input = document.querySelector("#geting-todo");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#Submit-button").click();
  }
});

let Tododisplay = document.querySelector(".todo-display");
let Todos = [];
let TodoData = [];
let NewTodoinfo;
let i;
let j;
let bgchnge = 0;
let TododelFromLocal = [];

function editSaver(i) {
  let editInpt;
  let parentTodo;
  let editbutton;
  let editbt;
  let values;
  editInpt = Todos[i].querySelector(`.todo-info-edit`);
  editbutton = Todos[i].querySelector(`.DeleteBtn`);
  editbt = Todos[i].querySelector(`.EditBtn`);
  parentTodo = Todos[i];
  values = editInpt.value;
  editInpt.placeholder = "";
  editInpt.value = `${values}`;
  editInpt.setAttribute("readonly", "");
  console.log(parentTodo);
  parentTodo.style.backgroundColor = null;
  parentTodo.style.borderRadius = null;

  editbutton.style.display = null;
  editbt.setAttribute("value", "✏️");
  editbt.setAttribute("onClick", "TodoEdit(this.id)");
  TodoData[i] = values;
  let arrayString = JSON.stringify(TodoData);
  localStorage.setItem("Todos", arrayString);
}

function TodoEdit(id) {
  i = 0;
  let editInpt;
  let parentTodo;
  let editbutton;
  let editbt;
  for (i = 0; i < Todos.length; i++) {
    let getid = Todos[i].id;
    if (id == getid) {
      editInpt = Todos[i].querySelector(`.todo-info-edit`);
      editbutton = Todos[i].querySelector(`.DeleteBtn`);
      editbt = Todos[i].querySelector(`.EditBtn`);
      parentTodo = Todos[i];
      j = i;
    }
  }

 

  editInpt.removeAttribute("readonly");
  console.log(parentTodo);
  parentTodo.style.backgroundColor = "gray";
  parentTodo.style.borderRadius = "4%";

  editbutton.style.display = "none";
  editbt.setAttribute("value", "✔️");
  editbt.setAttribute("onClick", "editSaver(j)");
}

function TodoDelete(id) {
  for (let i = 0; i < Todos.length; i++) {
    let getid = Todos[i].id;
    if (id == getid) {
      Tododisplay.removeChild(Todos[i]);
      Todos.splice(i, 1);
      TodoData.splice(i, 1);
      console.log(id);
    }
  }

  let arrayString = JSON.stringify(TodoData);
  localStorage.setItem("Todos", arrayString);
}

function CreatingTodolayot(nth, NewTodoinfo) {
  let mathRandom = Todos.length;
  const CreateTodoMainParenet = document.createElement("div");
  CreateTodoMainParenet.setAttribute("class", "todoss");
  CreateTodoMainParenet.setAttribute("id", `${nth}`);

  const CreateTodoParenet = document.createElement("div");
  CreateTodoParenet.id = "parent";

  const CreateTodoChildInput = document.createElement("input");
  CreateTodoChildInput.setAttribute("type", "text");
  CreateTodoChildInput.setAttribute("id", `todo-info-edit${nth}`);
  CreateTodoChildInput.setAttribute("class", "todo-info-edit");
  CreateTodoChildInput.setAttribute("readonly", "");
  CreateTodoChildInput.style.marginRight = "15px";
  CreateTodoChildInput.placeholder = `${NewTodoinfo}`;

  const CreateTodoChildEdit = document.createElement("input");
  CreateTodoChildEdit.setAttribute("type", "button");
  CreateTodoChildEdit.setAttribute("value", "✏️");
  CreateTodoChildEdit.setAttribute("id", `${nth}`);
  CreateTodoChildEdit.setAttribute("class", "EditBtn");
  CreateTodoChildEdit.setAttribute("onClick", "TodoEdit(this.id)");
  CreateTodoChildEdit.style.marginRight = "4px";

  const CreateTodoChildDelete = document.createElement("input");
  CreateTodoChildDelete.setAttribute("type", "button");
  CreateTodoChildDelete.setAttribute("value", "❌");
  CreateTodoChildDelete.setAttribute("id", `${nth}`);
  CreateTodoChildDelete.setAttribute("onClick", "TodoDelete(this.id)");
  CreateTodoChildDelete.setAttribute("class", "DeleteBtn");

  CreateTodoMainParenet.appendChild(CreateTodoParenet);
  CreateTodoParenet.appendChild(CreateTodoChildInput);
  CreateTodoParenet.appendChild(CreateTodoChildEdit);
  CreateTodoParenet.appendChild(CreateTodoChildDelete);

  return CreateTodoMainParenet;
}

function creatingToto(NewTodoinfo) {
  let nth = Todos.length;
  Todos[nth] = CreatingTodolayot(nth, NewTodoinfo);
  Tododisplay.appendChild(Todos[nth]);
  TodoData[nth] = NewTodoinfo;
  let arrayString = JSON.stringify(TodoData);
  localStorage.setItem("Todos", arrayString);
  console.log(arrayString);
}

function OngettingInput() {
  let getteningId = document.querySelector("#geting-todo");
  NewTodoinfo = getteningId.value;
  if (NewTodoinfo == "") {
    alert("Input is empty");
  } else {
    creatingToto(NewTodoinfo);
    getteningId.value = "";
    getteningId.setAttribute("placeholder", "Write todo here");
  }
}

let retrievedString = localStorage.getItem("Todos");
if (retrievedString) {
  let retrievedArray = JSON.parse(retrievedString);
  for (let index = 0; index < retrievedArray.length; index++) {
    creatingToto(retrievedArray[index]);
  }
}

function BackgroundChanger() {
  let inputforbg = document.querySelector(".backgd");
  bgchnge++;
  if (bgchnge == 1) {
    inputforbg.style.background =
      "url(./images/pexels-henry-&-co-1939485.jpg)";

    console.log(inputforbg);
  } else if (bgchnge == 2) {
    inputforbg.style.background =
      "url(./images/pexels-johannes-plenio-1103970.jpg)";
    console.log(2);
    inputforbg.style.backgroundPosition = "center"
  } else if (bgchnge == 3) {
    inputforbg.style.background = "url(./images/pexels-pixabay-36717.jpg)";
    console.log(3);
    inputforbg.style.backgroundPosition = "center"
  }
  else if (bgchnge == 4) {
    inputforbg.style.background = "url(./images/pexels-bri-schneiter-346529.jpg)";
    console.log(4);
    inputforbg.style.backgroundPosition = "center"
  }
  if (bgchnge == 5) {
    bgchnge = 0;
  }
}
