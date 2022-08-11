const Project = (name, description = '', id) => {
    const projectId = id;
    let projectName = name;
    let todoArray = [];
    let projectDescription = description;

    return {
        getId: () => {return projectId},

        getName: () => {return projectName},

        editName: (newName) => {projectName = newName},

        addTodo: (todo) => {todoArray.push(todo)},

        getTodoArray: () => {return todoArray.slice()},

        removeTodo: (todoIndex) => {todoArray.splice(todoIndex, 1)},

        editTodo: (todoIndex, todo) => {todoArray[todoIndex] = todo},

        setTodoArray: (newTodoArray) => {todoArray = newTodoArray},

        getDescription: () => {return projectDescription},

        editDescription: (newDescription) => {projectDescription = newDescription}
    }
}

export default Project;