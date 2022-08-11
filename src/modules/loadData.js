import Project from "./project";
import * as Storage from "./storage";
import Todo from "./todo";

const loadData = () => {
    if (localStorage.length === 0) {return}
    else {
       Storage.clear();

       const loadedProjectsArray = [];
       //Gets all projects from local storage and puts them in a sorted array
       for(let i = 0; i < localStorage.length; i++) {
            const keyArray = localStorage.key(i).split('-');
            if(keyArray[0] === 'project') {
                const loadedProject = JSON.parse(localStorage.getItem(keyArray.join('-')));

                //Gets all todos from local storage of a same parent project and puts them in a sorted array
                const loadedTodosArray = [];
                for(let j = 0; j < localStorage.length; j++) {
                    const keyArray2 = localStorage.key(j).split('-');
                    if(keyArray2[0] === 'todo') {
                        const loadedTodo = JSON.parse(localStorage.getItem(keyArray2.join('-')));
                        if(loadedTodo.parentProjectId === loadedProject.projectId) {
                            loadedTodosArray.push(Todo(loadedTodo.name, loadedTodo.description, loadedTodo.dueDate, loadedTodo.priority, loadedTodo.todoId));
                            console.log(loadedTodo);
                        }
                    }
                }
                console.log(loadedTodosArray);
                loadedTodosArray.sort((a, b) => {
                    if(Number(a.getId()) < Number(b.getId())){
                        return -1;
                    }
                    if(Number(a.getId()) > Number(b.getId())){
                        return 1;
                    }
                    return 0;
                })
                
                const newProjectObj = Project(loadedProject.name, loadedProject.description, loadedProject.projectId);
                newProjectObj.setTodoArray(loadedTodosArray);
                loadedProjectsArray.push(newProjectObj);
            }
       }
       loadedProjectsArray.sort((a, b) => {
        if(Number(a.getId()) < Number(b.getId())){
            return -1;
        }
        if(Number(a.getId()) > Number(b.getId())){
            return 1;
        }
        return 0;
       })
       
       Storage.setProjects(loadedProjectsArray);
    };

}

export default loadData;