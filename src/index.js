import "./style.css";
import * as Display from "./modules/display";
import * as Storage from "./modules/storage";
import Project from "./modules/project";

Storage.addProject(Project('My first project'));
Storage.addProject(Project('My second project'));
Storage.addProject(Project('My third project'));

Display.loadPage(Storage.getProjects());