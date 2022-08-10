const Todo = (name, description, dueDate, priority, id) => {
    console.log(name);
    let todoName = name;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;
    let todoId = id;

    return {
        getName: () => {return todoName},
        getDescription: () => {return todoDescription},
        getDueDate: () => {return todoDueDate},
        getPriority: () => {return todoPriority},
        getId: () => {return todoId},

        editName: (newName) => {todoName = newName},
        editDescription: (newDescription) => {todoDescription = newDescription},
        editDueDate: (newDueDate) => {todoDueDate = newDueDate},
        editPriority: (newPriority) => {todoPriority = newPriority},
    }
}

export default Todo;