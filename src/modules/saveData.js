import { formatISO } from 'date-fns';

const saveData = (projectsArray) => {
  localStorage.clear();

  let todoIndex = 0;
  projectsArray.forEach((project, projectIndex) => {
    localStorage.setItem(`project-${projectIndex}`, JSON.stringify({ projectId: `${projectIndex}`, name: project.getName(), description: project.getDescription() }));
    project.getTodoArray().forEach((todo) => {
      localStorage.setItem(`todo-${todoIndex}`, JSON.stringify({
        parentProjectId: `${projectIndex}`, todoId: todoIndex, name: todo.getName(), description: todo.getDescription(), dueDate: formatISO(todo.getDueDate()), priority: todo.getPriority(),
      }));
      todoIndex += 1;
    });
  });
};

export default saveData;
