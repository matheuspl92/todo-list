import * as Storage from "./storage";
import Project from "./project";
import imgLogo from "/home/matheus/repos/todo-list/src/tick-mark.png";
import imgAdd from "/home/matheus/repos/todo-list/src/add-icon.png";
import iconTrash from "/home/matheus/repos/todo-list/src/trash-icon.svg";
import iconEdit from "/home/matheus/repos/todo-list/src/edit-icon.svg"
import Todo from "./todo";
import saveData from "./saveData";

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
    label.innerHTML = 'Title:';
    formControl.appendChild(label);

    const projectNameInput = document.createElement('input');
    projectNameInput.id = 'project-name-input';
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.required = true;
    formControl.appendChild(projectNameInput);

    const formControl1 = document.createElement('div');
    formControl1.classList.add('form-control');
    form.appendChild(formControl1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'project-description-textarea');
    label1.innerHTML = 'Description:';
    formControl1.appendChild(label1);

    const projectDescriptionTextArea = document.createElement('textarea');
    projectDescriptionTextArea.id = 'project-description-textarea';
    projectDescriptionTextArea.required = false;
    formControl1.appendChild(projectDescriptionTextArea);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Create project';
    form.appendChild(submitBtn);

    form.addEventListener('submit', () => {
        Storage.addProject(Project(projectNameInput.value, projectDescriptionTextArea.value));
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
        projectContainer.appendChild(projectName);

        const projectDescription = document.createElement('p')
        projectDescription.classList.add('project-description');
        projectDescription.innerHTML = project.getDescription();
        projectContainer.appendChild(projectDescription);

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icon-container');
        projectContainer.appendChild(iconsContainer);

        const editBtn = document.createElement('img');
        editBtn.classList.add('edit-btn');
        editBtn.setAttribute('src', iconEdit);
        iconsContainer.appendChild(editBtn);

        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            editProject(project);
        })

        const trashBtn = document.createElement('img');
        trashBtn.classList.add('trash-btn');
        trashBtn.setAttribute('src', iconTrash);
        iconsContainer.appendChild(trashBtn);

        trashBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteProject(index);
        })
    });
}

function deleteProject(projectIndex) {

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
    modalTitle.innerHTML = 'Delete project?';
    modalContent.appendChild(modalTitle);

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';
    modalContent.appendChild(span);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    modalContent.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.innerHTML = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
        Storage.removeProject(projectIndex);
        loadProjects();
        modal.style.display = "none";
    })

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.innerHTML = 'Cancel';
    btnContainer.appendChild(cancelBtn);

    cancelBtn.addEventListener('click', () => {
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

function editProject(project) {

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
    modalTitle.innerHTML = 'Edit project';
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
    label.innerHTML = 'Title:';
    formControl.appendChild(label);

    const projectNameInput = document.createElement('input');
    projectNameInput.id = 'project-name-input';
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.required = true;
    projectNameInput.value = project.getName();
    formControl.appendChild(projectNameInput);

    const formControl1 = document.createElement('div');
    formControl1.classList.add('form-control');
    form.appendChild(formControl1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'project-description-textarea');
    label1.innerHTML = 'Description:';
    formControl1.appendChild(label1);

    const projectDescriptionTextArea = document.createElement('textarea');
    projectDescriptionTextArea.id = 'project-description-textarea';
    projectDescriptionTextArea.required = false;
    projectDescriptionTextArea.value = project.getDescription();
    formControl1.appendChild(projectDescriptionTextArea);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Edit project';
    form.appendChild(submitBtn);

    form.addEventListener('submit', () => {
        project.editName(projectNameInput.value);
        project.editDescription(projectDescriptionTextArea.value);
        saveData(Storage.getProjects());
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
    addTodo.addEventListener('click', () => {
        createTodo(project);
    })
    contentSettings.appendChild(addTodo);

    const contentBox = document.createElement('div');
    contentBox.id = 'todo-content-box';
    contentContainer.appendChild(contentBox);

    createTodosContent(contentBox, project)
}

function createTodosContent(container, project, typeOfSort, isDecreasing = false) {

    project.getTodoArray().forEach((todo,todoIndex) => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        container.appendChild(todoContainer);

        const todoName = document.createElement('p')
        todoName.classList.add('todo-name');
        todoName.innerHTML = todo.getName();
        todoContainer.appendChild(todoName)

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icon-container');
        todoContainer.appendChild(iconsContainer);

        const editBtn = document.createElement('img');
        editBtn.classList.add('edit-btn');
        editBtn.setAttribute('src', iconEdit);
        iconsContainer.appendChild(editBtn);

        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            editTodo(project, todo);
        })

        const trashBtn = document.createElement('img');
        trashBtn.classList.add('trash-btn');
        trashBtn.setAttribute('src', iconTrash);
        iconsContainer.appendChild(trashBtn);

        trashBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTodo(project, todoIndex);
        })
    });
}

function createTodo(project) {

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
    modalTitle.innerHTML = 'Create new todo';
    modalContent.appendChild(modalTitle);

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';
    modalContent.appendChild(span);

    const form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');
    modalContent.appendChild(form);

    //name field
    const formControl1 = document.createElement('div');
    formControl1.classList.add('form-control');
    form.appendChild(formControl1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'todo-name-input');
    label1.innerHTML = 'Title:';
    formControl1.appendChild(label1);

    const todoNameInput = document.createElement('input');
    todoNameInput.id = 'todo-name-input';
    todoNameInput.setAttribute('type', 'text');
    todoNameInput.required = true;
    formControl1.appendChild(todoNameInput);

    //description field
    const formControl2 = document.createElement('div');
    formControl2.classList.add('form-control');
    form.appendChild(formControl2);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'todo-description-input');
    label2.innerHTML = 'Description:';
    formControl2.appendChild(label2);

    const todoDescriptionInput = document.createElement('textarea');
    todoDescriptionInput.id = 'todo-description-textarea';
    todoDescriptionInput.required = true;
    formControl2.appendChild(todoDescriptionInput);

    //due date field
    const formControl3 = document.createElement('div');
    formControl3.classList.add('form-control');
    form.appendChild(formControl3);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'todo-due-date-input');
    label3.innerHTML = 'Due date:';
    formControl3.appendChild(label3);

    const todoDueDateInput = document.createElement('input');
    todoDueDateInput.id = 'todo-due-date-input';
    todoDueDateInput.setAttribute('type', 'date');
    todoDueDateInput.required = true;
    formControl3.appendChild(todoDueDateInput);

    //priority field
    const formControl4 = document.createElement('div');
    formControl4.classList.add('form-control');
    form.appendChild(formControl4);

    const label4 = document.createElement('label');
    label4.setAttribute('for', 'todo-priority-input');
    label4.innerHTML = 'Priority:';
    formControl4.appendChild(label4);

    const todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.id = 'todo-priority-select';
    todoPrioritySelect.required = true;
    formControl4.appendChild(todoPrioritySelect);

    const priorityOption1 = document.createElement('option');
    priorityOption1.value = 'low';
    priorityOption1.innerHTML = 'Low';
    todoPrioritySelect.appendChild(priorityOption1);

    const priorityOption2 = document.createElement('option');
    priorityOption2.value = 'medium';
    priorityOption2.innerHTML = 'Medium';
    todoPrioritySelect.appendChild(priorityOption2);

    const priorityOption3 = document.createElement('option');
    priorityOption3.value = 'high';
    priorityOption3.innerHTML = 'High';
    todoPrioritySelect.appendChild(priorityOption3);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Create todo';
    form.appendChild(submitBtn);

    form.addEventListener('submit', () => {
        project.addTodo(Todo(todoNameInput.value, todoDescriptionInput.value, todoDueDateInput.value, todoPrioritySelect.value));
        saveData(Storage.getProjects());
        loadProjectTodos(project);
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

function deleteTodo(project, todoIndex) {
   
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
    modalTitle.innerHTML = 'Delete todo?';
    modalContent.appendChild(modalTitle);

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';
    modalContent.appendChild(span);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    modalContent.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.innerHTML = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
        project.removeTodo(todoIndex);
        saveData(Storage.getProjects())
        loadProjectTodos(project);
        modal.style.display = "none";
    })

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.innerHTML = 'Cancel';
    btnContainer.appendChild(cancelBtn);

    cancelBtn.addEventListener('click', () => {
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

function editTodo(project, todo) {

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
    modalTitle.innerHTML = 'Edit todo';
    modalContent.appendChild(modalTitle);

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';
    modalContent.appendChild(span);

    const form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false');
    modalContent.appendChild(form);

    //name field
    const formControl1 = document.createElement('div');
    formControl1.classList.add('form-control');
    form.appendChild(formControl1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'todo-name-input');
    label1.innerHTML = 'Title:';
    formControl1.appendChild(label1);

    const todoNameInput = document.createElement('input');
    todoNameInput.id = 'todo-name-input';
    todoNameInput.setAttribute('type', 'text');
    todoNameInput.required = true;
    todoNameInput.value = todo.getName();
    formControl1.appendChild(todoNameInput);

    //description field
    const formControl2 = document.createElement('div');
    formControl2.classList.add('form-control');
    form.appendChild(formControl2);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'todo-description-input');
    label2.innerHTML = 'Description:';
    formControl2.appendChild(label2);

    const todoDescriptionInput = document.createElement('textarea');
    todoDescriptionInput.id = 'todo-description-textarea';
    todoDescriptionInput.required = false;
    todoDescriptionInput.value = todo.getDescription();
    formControl2.appendChild(todoDescriptionInput);

    //due date field
    const formControl3 = document.createElement('div');
    formControl3.classList.add('form-control');
    form.appendChild(formControl3);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'todo-due-date-input');
    label3.innerHTML = 'Due date:';
    formControl3.appendChild(label3);

    const todoDueDateInput = document.createElement('input');
    todoDueDateInput.id = 'todo-due-date-input';
    todoDueDateInput.setAttribute('type', 'date');
    todoDueDateInput.required = true;
    todoDueDateInput.value = todo.getDueDate();
    formControl3.appendChild(todoDueDateInput);

    //priority field
    const formControl4 = document.createElement('div');
    formControl4.classList.add('form-control');
    form.appendChild(formControl4);

    const label4 = document.createElement('label');
    label4.setAttribute('for', 'todo-priority-input');
    label4.innerHTML = 'Priority:';
    formControl4.appendChild(label4);

    const todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.id = 'todo-priority-select';
    todoPrioritySelect.required = true;
    todoPrioritySelect.value = todo.getPriority();
    formControl4.appendChild(todoPrioritySelect);

    const priorityOption1 = document.createElement('option');
    priorityOption1.value = 'low';
    priorityOption1.innerHTML = 'Low';
    todoPrioritySelect.appendChild(priorityOption1);

    const priorityOption2 = document.createElement('option');
    priorityOption2.value = 'medium';
    priorityOption2.innerHTML = 'Medium';
    todoPrioritySelect.appendChild(priorityOption2);

    const priorityOption3 = document.createElement('option');
    priorityOption3.value = 'high';
    priorityOption3.innerHTML = 'High';
    todoPrioritySelect.appendChild(priorityOption3);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Edit todo';
    form.appendChild(submitBtn);

    form.addEventListener('submit', () => {
        todo.editName(todoNameInput.value);
        todo.editDescription(todoDescriptionInput.value);
        todo.editDueDate(todoDueDateInput.value);
        todo.editPriority(todoPrioritySelect.value);
        saveData(Storage.getProjects());
        loadProjectTodos(project);
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

export {loadPage, loadProjects};