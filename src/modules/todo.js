const Todo = (name, description, dueDate, priority) => {
    let todoName = name;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;

    return {
        getName: () => {todoName},
        getDescription: () => {todoDescription},
        getDueDate: () => {todoDueDate},
        getPriority: () => {todoPriority},

        editName: (newName) => {todoName = newName},
        editDescription: (newDescription) => {todoDescription = newDescription},
        editDueDate: (newDueDate) => {todoDueDate = newDueDate},
        editPriority: (newPriority) => {todoPriority = newPriority},
    }
}

export default Todo;