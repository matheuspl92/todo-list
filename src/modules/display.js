import * as Storage from "./storage";
import imgLogo from "/home/matheus/repos/todo-list/src/tick-mark.png"
import imgAdd from "/home/matheus/repos/todo-list/src/add-icon.png"

const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.appendChild(mainContainer);

function _clearContentContainer() {
    const contentContainer = document.getElementById('content-container');
    while(contentContainer.hasChildNodes()){
        contentContainer.firstChild.remove();
    }
}

function loadPage() {

    //Create basic containers
    const sideMenu = document.createElement('div');
    sideMenu.id = 'side-menu';
    mainContainer.appendChild(sideMenu);

    const contentContainer = document.createElement('div');
    contentContainer.id = 'content-container';
    mainContainer.appendChild(contentContainer);

    //Create side menu elements
    const logoContainer = document.createElement('div');
    logoContainer.id = 'logo-container';
    sideMenu.appendChild(logoContainer);

    const logoImg = document.createElement('img');
    logoImg.id = 'logo-img';
    logoImg.setAttribute('src', imgLogo);
    logoContainer.appendChild(logoImg);

    const logoTitle = document.createElement('h1');
    logoTitle.id = 'logo-title';
    logoTitle.innerHTML = 'TiddyDo';
    logoContainer.appendChild(logoTitle);

    const selectionContainer = document.createElement('div');
    selectionContainer.id = 'selection-container';
    sideMenu.appendChild(selectionContainer);

    
    const myProjects = document.createElement('h2');
    myProjects.id = 'my-projects';
    myProjects.innerHTML = 'My projects';
    myProjects.addEventListener('click', () => {loadProjects(Storage.getProjects())})
    selectionContainer.appendChild(myProjects);

    const myTodos = document.createElement('h2');
    myTodos.id = 'my-todos';
    myTodos.innerHTML = 'My todos';
    selectionContainer.appendChild(myTodos);

    const todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';
    selectionContainer.appendChild(todoContainer);

    const todayTodos = document.createElement('p');
    todayTodos.id = 'today-todos';
    todayTodos.classList.add('todo-selection');
    todayTodos.innerHTML = 'Today';
    todoContainer.appendChild(todayTodos);

    const weekTodos = document.createElement('p');
    weekTodos.id = 'week-todos';
    weekTodos.classList.add('todo-selection');
    weekTodos.innerHTML = 'Week';
    todoContainer.appendChild(weekTodos);

    const monthTodos = document.createElement('p');
    monthTodos.id = 'month-todos';
    monthTodos.classList.add('todo-selection');
    monthTodos.innerHTML = 'Month';
    todoContainer.appendChild(monthTodos);

    const allTodos = document.createElement('p');
    allTodos.id = 'all-todos';
    allTodos.classList.add('todo-selection');
    allTodos.innerHTML = 'All';
    todoContainer.appendChild(allTodos);

    const footer = document.createElement('p');
    footer.id = 'footer';
    footer.innerHTML = 'Made by ';
    sideMenu.appendChild(footer);

    const footerLink = document.createElement('a');
    footerLink.id = 'footer-link';
    footerLink.setAttribute('href', 'https://github.com/matheuspl92/todo-list')
    footerLink.setAttribute('target', '_blank')
    footerLink.innerHTML = 'matheuspl92';
    footer.appendChild(footerLink);
}

function loadProjects(projectsArray) {
    _clearContentContainer();

    const contentContainer = document.getElementById('content-container');

    const contentTitle = document.createElement('div');
    contentTitle.id = 'content-title';
    contentTitle.innerHTML = 'Projects'
    contentContainer.appendChild(contentTitle);

    const contentSettings = document.createElement('div');
    contentSettings.id = 'content-settings';
    contentContainer.appendChild(contentSettings);

    //Use when projects have priorities or due dates to sort by
    /*const sortText = document.createElement('p');
    sortText.id = 'sort-text';
    sortText.innerHTML = 'Sort by'
    contentSettings.appendChild(sortText);

    const sortDate = document.createElement('button');
    sortDate.id = 'sort-date-btn';
    sortDate.classList.add('sort-btn');
    sortDate.innerHTML = "Date";
    contentSettings.appendChild(sortDate);

    const sortPriority = document.createElement('button');
    sortPriority.id = 'sort-priority-btn';
    sortPriority.classList.add('sort-btn');
    sortPriority.innerHTML = "Priority";
    contentSettings.appendChild(sortPriority);*/

    const addProject = document.createElement('img');
    addProject.setAttribute('src', imgAdd)
    addProject.id = 'add-project-btn';
    addProject.classList.add('add-btn');
    addProject.innerHTML = "Add";
    contentSettings.appendChild(addProject);

    const contentBox = document.createElement('div');
    contentBox.id = 'content-box';
    contentContainer.appendChild(contentBox);

    createProjectsContent(contentBox, projectsArray);
}

function createProjectsContent(container, projectsArray, typeOfSort, isDecreasing = false) {

    projectsArray.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        container.appendChild(projectContainer);

        projectContainer.addEventListener('click', () => {
            loadProjectTodos(project);
        })

        const projectName = document.createElement('h3')
        projectName.classList.add('project-name');
        projectName.innerHTML = project.getName();
        projectContainer.appendChild(projectName)
    });
}

function loadProjectTodos(project) {
    _clearContentContainer();

    const contentContainer = document.getElementById('content-container');

    const contentTitle = document.createElement('div');
    contentTitle.id = 'content-title';
    contentTitle.innerHTML = project.getName();
    contentContainer.appendChild(contentTitle);

    const contentSettings = document.createElement('div');
    contentSettings.id = 'content-settings';
    contentContainer.appendChild(contentSettings);

    const addTodo = document.createElement('img');
    addTodo.setAttribute('src', imgAdd)
    addTodo.id = 'add-todo-btn';
    addTodo.classList.add('add-btn');
    addTodo.innerHTML = "Add";
    contentSettings.appendChild(addTodo);

    const contentBox = document.createElement('div');
    contentBox.id = 'todo-content-box';
    contentContainer.appendChild(contentBox);

    createTodosContent(contentBox, project.getTodoArray())
}

function createTodosContent(container, todosArray, typeOfSort, isDecreasing = false) {

    todosArray.forEach(todo => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        container.appendChild(todoContainer);

        const todoName = document.createElement('p')
        todoName.classList.add('todo-name');
        todoName.innerHTML = todo.getName();
        todoContainer.appendChild(todoName)
    });
}

export {loadPage, loadProjects};