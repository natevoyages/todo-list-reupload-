import { todoList } from "./todolist";

let id = 0;

function createProject(name){
  const tasks = [];
  id += 1;
  return {name, tasks, id};
}

function addProject(){
  todoList.projects.push(createProject(getProjectName()));
}

function deleteProject(value){
  let index = todoList.projects.findIndex(proj => proj.id == value);
  todoList.projects.splice(index, 1);

}
function getProjectName(){
  let name = document.getElementById("project").value;
  return name;
}

export {createProject, addProject, deleteProject };