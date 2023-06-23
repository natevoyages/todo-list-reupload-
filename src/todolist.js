import { createProject } from "./projects";
import { createDefaultTask } from "./tasks";
import {createProjectelement} from "./dom";


function createToDoList(){
  let projects = [];
  projects.push(createProject("Today"));
  projects.push(createProject("Goals"));
  projects.push(createProject("Default Project"));

  return { projects }
}


const todoList = createToDoList();
todoList.projects[2].tasks.push(createDefaultTask("Web Devloper!", "Become a Web Devloper", "High", "2023-10-23", "SOON SOOON SOOOOOOOON", false));
createProjectelement();

export {todoList }