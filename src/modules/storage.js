const projectsArray = [];

const getProjects = () => {return projectsArray.slice()}

const addProject = (project) => {projectsArray.push(project)}

const removeProject = (projectIndex) => {projectsArray.splice(projectIndex, 1)}

const editProject = (projectIndex, project) => {projectsArray[projectIndex] = project}

export {getProjects, addProject, removeProject, editProject}