const Project = (name, id) => {
    const projectId = id;
    let projectName = name;
    let todoArray = [];

    return {
        getId: () => {return projectId},

        getName: () => {return projectName},

        addTodo: (todo) => {todoArray.push(todo)},

        getTodoArray: () => {return todoArray.slice()},

        removeTodo: (todoIndex) => {todoArray.splice(todoIndex, 1)},

        editTodo: (todoIndex, todo) => {todoArray[todoIndex] = todo},

        setTodoArray: (newTodoArray) => {todoArray = newTodoArray},
    }
}

export default Project;