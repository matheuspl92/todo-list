const saveData = (projectsArray) => {

    localStorage.clear()

    projectsArray.forEach((project, projectIndex) => {
        console.log('saving project: %d', projectIndex)
        localStorage.setItem(`project-${projectIndex}`, JSON.stringify({'projectId': `${projectIndex}`, 'name': project.getName()}));
        project.getTodoArray().forEach((todo, todoIndex) => {
            localStorage.setItem(`todo-${todoIndex}`, JSON.stringify({'parentProjectId': `${projectIndex}`, 'todoId': todoIndex, 'name': todo.getName(), 'description': todo.getDescription(), 'dueDate': todo.getDueDate(), 'priority': todo.getPriority()}));
        });
    });
}

export default saveData;