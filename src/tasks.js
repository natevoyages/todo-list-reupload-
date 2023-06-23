import { todoList } from "./todolist";
import { currentId } from "./ui";
let id = 0;
let taskId = null;

function createTask(){
  let title = getTitle();
  let description = getDescription();
  let priority = getPriority();
  let dueDate = getDueDate();
  let note = getNotes();
  let done = false;
  id += 1;
  return {title, description, priority, dueDate, note, done, id}
}

function setTask(){
  let projId = currentId;
  let index = todoList.projects.findIndex(proj => proj.id == projId);
  let taskIndex = todoList.projects[index].tasks.findIndex(task => task.id ==taskId)
  todoList.projects[index].tasks[taskIndex].title = getEditTitle();
  todoList.projects[index].tasks[taskIndex].description = getEditDescription();
  todoList.projects[index].tasks[taskIndex].priority = getEditPriority();
  todoList.projects[index].tasks[taskIndex].dueDate = getEditDueDate();
  todoList.projects[index].tasks[taskIndex].note = getEditNotes();
}

function createDefaultTask(title, description, priority, dueDate, note, done = false){
  id += 1;
  return {title, description, priority, dueDate, note, done, id}
}

function addTask(){
  let projId = currentId;
  let index = todoList.projects.findIndex(proj => proj.id == projId);
  todoList.projects[index].tasks.push(createTask());

}
function deleteTask(taskId){
  let projId = currentId;
  let index = todoList.projects.findIndex(proj => proj.id == projId);
  let taskI = todoList.projects.at(index).tasks.findIndex(task => task.id == taskId);;
  todoList.projects.at(index).tasks.splice(taskI, 1);
}

function getNotes(){
  let notes = document.getElementById("notes").value;
  return notes; 
}

function getTitle(){
   let title = document.getElementById("title").value;
   return title;
}

function getDescription(){
  let description = document.getElementById("description").value;
  return description;
}

function getDueDate(){
  let dueDate = document.getElementById("due-date").value;
  return dueDate;
}

function getPriority(){
  let priority = document.getElementById("priority").value;
  return priority;
}

function getEditNotes(){
  let notes = document.getElementById("edit-notes").value;
  return notes;
}

function getEditTitle(){
   let title = document.getElementById("edit-title").value;
   return title;
}

function getEditDescription(){
  let description = document.getElementById("edit-description").value;
  return description;
}

function getEditDueDate(){
  let dueDate = document.getElementById("edit-due-date").value;
  return dueDate;
}

function getEditPriority(){
  let priority = document.getElementById("edit-priority").value;
  return priority;
}

function clearData(){
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "Medium";
}
export {addTask, deleteTask,createDefaultTask, createTask, clearData,setTask, taskId};