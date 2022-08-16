const Todo = (name, description, dueDate, priority, id) => {
  let todoName = name;
  let todoDescription = description;
  let todoDueDate = dueDate;
  let todoPriority = priority;
  const todoId = id;

  return {
    getName: () => todoName,
    getDescription: () => todoDescription,
    getDueDate: () => todoDueDate,
    getPriority: () => todoPriority,
    getId: () => todoId,

    editName: (newName) => { todoName = newName; },
    editDescription: (newDescription) => { todoDescription = newDescription; },
    editDueDate: (newDueDate) => { todoDueDate = newDueDate; },
    editPriority: (newPriority) => { todoPriority = newPriority; },
  };
};

export default Todo;
