const Project = (name) => {
    let projectName = name;
    const todoArray = [];

    return {
        getName: () => {return projectName},

        addTodo: (todo) => {todoArray.push(todo)},

        getTodoArray: () => {return todoArray.slice()},

        removeTodo: (todoIndex) => {todoArray.splice(todoIndex, 1)},

        editTodo: (todoIndex, todo) => {todoArray[todoIndex] = todo},
    }
}

export default Project;