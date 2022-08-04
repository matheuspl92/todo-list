const Todo = (name, description, dueDate, priority) => {
    console.log(name);
    let todoName = name;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;

    return {
        getName: () => {return todoName},
        getDescription: () => {return todoDescription},
        getDueDate: () => {return todoDueDate},
        getPriority: () => {return todoPriority},

        editName: (newName) => {todoName = newName},
        editDescription: (newDescription) => {todoDescription = newDescription},
        editDueDate: (newDueDate) => {todoDueDate = newDueDate},
        editPriority: (newPriority) => {todoPriority = newPriority},
    }
}

export default Todo;