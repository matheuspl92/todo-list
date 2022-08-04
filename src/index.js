import "./style.css";
import * as Display from "./modules/display";
import * as Storage from "./modules/storage";
import Project from "./modules/project";
import Todo from "./modules/todo";

const firstProj = Project("My first Project")
firstProj.addTodo(Todo('first todo', "template todo description bla bla bla ...", '21/12/2022', 'high'))
firstProj.addTodo(Todo('first todo', "template todo description bla bla bla ...", '21/12/2022', 'high'))
firstProj.addTodo(Todo('first todo', "template todo description bla bla bla ...", '21/12/2022', 'high'))

Storage.addProject(firstProj);
Storage.addProject(Project('My second project'));
Storage.addProject(Project('My third project'));

Display.loadPage();
Display.loadProjects(Storage.getProjects())