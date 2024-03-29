import saveData from './saveData';

let projectsArray = [];

const getProjects = () => projectsArray.slice();

const addProject = (project) => {
  projectsArray.push(project);
  saveData(projectsArray);
};

const removeProject = (projectIndex) => {
  projectsArray.splice(projectIndex, 1);
  saveData(projectsArray);
};

const editProject = (projectIndex, project) => { projectsArray[projectIndex] = project; };

const setProjects = (savedProjectsArray) => { projectsArray = savedProjectsArray; };

const clear = () => { projectsArray.splice(0, projectsArray.length); };

export {
  getProjects, addProject, removeProject, editProject, setProjects, clear,
};
