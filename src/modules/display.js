import * as Storage from "./storage";
import Project from "./project";
import imgLogo from "/home/matheus/repos/todo-list/src/tick-mark.png";
import imgAdd from "/home/matheus/repos/todo-list/src/add-icon.png";
import iconTrash from "/home/matheus/repos/todo-list/src/trash-icon.svg";
import iconEdit from "/home/matheus/repos/todo-list/src/edit-icon.svg"

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

function loadProjects() {
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
    addProject.addEventListener('click', () => {
        createProject();
    })
    contentSettings.appendChild(addProject);

    const contentBox = document.createElement('div');
    contentBox.id = 'content-box';
    contentContainer.appendChild(contentBox);

    createProjectsContent(contentBox);
}

function createProject() {
    console.log("CALLED!!")

    if(document.getElementById('myModal')) {
        document.getElementById('myModal').remove();
    }

    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.innerHTML = 'Create new project';
    modalContent.appendChild(modalTitle);

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';
    modalContent.appendChild(span);

    const form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');
    modalContent.appendChild(form);

    const formControl = document.createElement('div');
    formControl.classList.add('form-control');
    form.appendChild(formControl);

    const label = document.createElement('label');
    label.setAttribute('for', 'project-name-input');
    label.innerHTML = 'Choose a project name:';
    formControl.appendChild(label);

    const projectNameInput = document.createElement('input');
    projectNameInput.id = 'project-name-input';
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.required = true;
    formControl.appendChild(projectNameInput);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Create project';
    form.appendChild(submitBtn);

    form.addEventListener('submit', () => {
        Storage.addProject(Project(projectNameInput.value));
        loadProjects();
        modal.style.display = "none";
    })

    //Functions

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
  
  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
         modal.style.display = "none";
        }
    }
}

function createProjectsContent(container, typeOfSort, isDecreasing = false) {

    Storage.getProjects().forEach((project, index) => {
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

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icon-container');
        projectContainer.appendChild(iconsContainer);

        const editBtn = document.createElement('img');
        editBtn.classList.add('edit-btn');
        editBtn.setAttribute('src', iconEdit);
        iconsContainer.appendChild(editBtn);

        const trashBtn = document.createElement('img');
        trashBtn.classList.add('trash-btn');
        trashBtn.setAttribute('src', iconTrash);
        iconsContainer.appendChild(trashBtn);

        trashBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteProject(index);
            loadProjects();
        })
    });
}

function deleteProject(projectIndex) {
    Storage.removeProject(projectIndex);
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