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
}

export {loadPage};