import { changePageContent, closeFullTodo, createProjectelement, createToDoElement, loadTodos, updateTodoElement } from "./dom";
import { addProject } from "./projects";
import { clearData, addTask, setTask } from "./tasks";
import { todoList } from "./todolist";

let currentPage = todoList.projects.at(0);
let currentId = currentPage.id;
let previousId = currentId;

function findCurrentPage(){  
  let index = todoList.projects.findIndex(proj => proj.id == currentId)
  return index;
}

function findSelectedPage(selected){
  let index = todoList.projects.findIndex(proj => proj.id == selected)
  return index;
}
function submitTodo(event){
  event.preventDefault();
  setTask();
  updateTodoElement();
  closeFullTodo();
}

let i = 0;
function addInitialListeners(){
    addNavBarlisteners();
    addFormListeners();
    let addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener('click',openForm);

    let closeTodobtn = document.querySelector(".todo-close-btn");
    closeTodobtn.addEventListener('click', closeFullTodo);

    let editSubmit = document.querySelector(".edit-form-submit");
    editSubmit.addEventListener('click', submitTodo);
}

function addFormListeners(){
  let submitBtn = document.querySelector(".form-submit");
  let closebtn = document.querySelector(".form-close-btn");


  closebtn.addEventListener('click', (event) => {event.preventDefault();
  closeForm();});
  submitBtn.addEventListener('click', (event) => {event.preventDefault();
  submitForm();}); 
  
}

function displayTodoList()
{
  console.log("Todo List");
  todoList.projects.forEach(proj => 
    console.log("name: " + proj.name + " tasks: " + proj.tasks))
}

function openProjectForm(){
  let addProject = document.getElementById("project-input");
  addProject.style.display = "flex";
  addProject.style.flexDirection = "column";
  let btn =document.getElementById("add-project");
  btn.style.display = "none";
}
function closeProjectForm(){
  let addProject = document.getElementById("project-input");
  addProject.style.display = "none";
  let btn =document.getElementById("add-project");
  btn.style.display = "inline";
  clearProjName();
}

function openForm(){
  let content = document.getElementById("pop-up-module");
  content.style.display = "flex";
}


function closeForm(){
   let content = document.getElementById("pop-up-module");
   content.style.display = "none";
   clearData();
}

function submitForm(){
   addTask();
   createToDoElement();
   console.log(currentPage);
   closeForm();
}
function submitProject(){
  addProject();
  createProjectelement();
  closeProjectForm();
  clearProjName();
}

function addNavBarlisteners(){
  let projSubmitBtn = document.getElementById("project-submit");
  let projCancelBtn  = document.getElementById("project-cancel");
  let addProj = document.getElementById("add-project");
  let daily = document.getElementById("today");
  let goals = document.getElementById("goals");


  addProj.addEventListener('click', openProjectForm);
  projCancelBtn.addEventListener('click', closeProjectForm);
  projSubmitBtn.addEventListener('click', submitProject); 
  daily.addEventListener('click', changePage);
  goals.addEventListener('click', changePage);

}
function changePage(event){
  if (event.target.id == "today"){
    if(currentPage != todoList.projects.at(0)){
        currentPage =  todoList.projects.at(0);
        currentId = currentPage.id;
        document.querySelector(`[data-value ='${previousId}']`).style.fontWeight = "normal";
        document.getElementById("today").style.fontWeight = "bold";
        previousId = currentId;
        changePageContent(currentPage);
    }
  }
  else if(event.target.id == "goals"){
    if(currentPage != todoList.projects.at(1)){
       currentPage = todoList.projects.at(1);
       currentId = currentPage.id;
       console.log(previousId);
       document.querySelector(`[data-value ='${previousId}']`).style.fontWeight = "normal";
       document.getElementById("goals").style.fontWeight = "bold";
       previousId = currentId;
       changePageContent(currentPage);
    }
  }
  else if(event.target.getAttribute("data-value") != currentId && event.target.id != "goals" &&  event.target.id != "today")
    {
      let indexProj = findSelectedPage(event.target.getAttribute("data-value"));
      currentPage = todoList.projects.at(indexProj);
      currentId = currentPage.id;
      document.querySelector(`[data-value ='${previousId}']`).style.fontWeight = "normal";
      document.querySelector(`[data-value ='${currentId}']`).style.fontWeight = "bold";
      previousId = currentId;
      changePageContent(currentPage);
    }

}
function clearProjName(){
  document.getElementById("project").value = "";
}

export {displayTodoList, addNavBarlisteners, findCurrentPage, addInitialListeners, currentId, changePage};
