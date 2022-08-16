const Project = (name, description = '', id) => {
  const projectId = id;
  let projectName = name;
  let todoArray = [];
  let projectDescription = description;

  return {
    getId: () => projectId,

    getName: () => projectName,

    editName: (newName) => { projectName = newName; },

    addTodo: (todo) => { todoArray.push(todo); },

    getTodoArray: () => todoArray.slice(),

    removeTodo: (todoIndex) => { todoArray.splice(todoIndex, 1); },

    editTodo: (todoIndex, todo) => { todoArray[todoIndex] = todo; },

    setTodoArray: (newTodoArray) => { todoArray = newTodoArray; },

    getDescription: () => projectDescription,

    editDescription: (newDescription) => { projectDescription = newDescription; },
  };
};

export default Project;
