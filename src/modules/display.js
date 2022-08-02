import imgLogo from "/home/matheus/repos/todo-list/src/tick-mark.png"

const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.appendChild(mainContainer);

function loadPage(projectsArray) {
    console.log(projectsArray)

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

export {loadPage};