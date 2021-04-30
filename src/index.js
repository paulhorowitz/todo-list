/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import MicroModal from 'micromodal';// es6 module
import { displayCurrentProjectTasks, updateDomWithProjectList } from './render/render';
import Project from './storage/project';
import Task from './storage/task';

// html DOM element variables

const addProjectButtonEl = document.getElementById('add-project');
const projectsMain = document.getElementById('projects-main');
const modalTitleEl = document.getElementById('modal-1-title');
const addProjectContainerEl = document.getElementById('add-project-container');
const commentsInputEl = document.getElementById('comments-input');
const modalSaveChangesEl = document.getElementById('modal-save-changes');
const dueDateInputEl = document.getElementById('due-date-input');

function addProject() {
    // hide button
    addProjectButtonEl.style.display = 'none';
    const addProjectInputEl = document.createElement('input');

    // add input field for adding project
    projectsMain.appendChild(addProjectInputEl);
    addProjectInputEl.id = 'add-project-input-box';

    // add "add" and "cancel" buttons below
    const addProjectConfirmEl = document.createElement('button');
    const cancelProjectConfirmEl = document.createElement('button');
    addProjectConfirmEl.innerHTML = 'Add';
    cancelProjectConfirmEl.innerHTML = 'Cancel';
    addProjectConfirmEl.id = 'add-project-button';
    cancelProjectConfirmEl.id = 'cancel-project-button';
    addProjectContainerEl.appendChild(addProjectConfirmEl);
    addProjectContainerEl.appendChild(cancelProjectConfirmEl);

    // make "add" button work
    addProjectConfirmEl.addEventListener('click', () => {
        const newProjectName = addProjectInputEl.value;
        addProjectInputEl.value = '';
        // eslint-disable-next-line no-use-before-define
        addProjectToList(newProjectName);
    });

    // revert if cancel button is pressed
    cancelProjectConfirmEl.addEventListener('click', () => {
        addProjectInputEl.parentNode.removeChild(addProjectInputEl);
        cancelProjectConfirmEl.parentNode.removeChild(cancelProjectConfirmEl);
        addProjectConfirmEl.parentNode.removeChild(addProjectConfirmEl);
        addProjectButtonEl.style.display = 'inline-block';
    });
}
// event listeners

addProjectButtonEl.addEventListener('click', addProject);

// variables

const projects = [];
let projectIdIndex = 3;
let taskIdIndex = 0;

// create default project

if (localStorage.getItem('projects') === null) {
    const defaultProject1 = new Project('Personal', 1);
    projects.push(defaultProject1);
    const defaultProject2 = new Project('Work', 2);
    projects.push(defaultProject2);
    localStorage.setItem('projects', JSON.stringify(projects));
} else {
    let localProjects = localStorage.getItem('projects');
    localProjects = JSON.parse(localProjects);
    for (let i = 0; i < localProjects.length; i += 1) {
        const newProject = new Project(localProjects[i].name,
            localProjects[i].id, localProjects[i].tasks);
        projects.push(newProject);
    }
}

updateDomWithProjectList();
displayCurrentProjectTasks(projects[0]);

function addProjectToList(newProjectName) {
    const projectName = newProjectName;
    const newProject = new Project(projectName, projectIdIndex);
    projectIdIndex += 1;
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    updateDomWithProjectList();
    displayCurrentProjectTasks(newProject);
}

function addTaskToProject(newTaskName, currentProject) {
    const newTask = new Task(newTaskName, taskIdIndex);
    taskIdIndex += 1;
    currentProject.addTask(newTask);
    localStorage.setItem('projects', JSON.stringify(projects));
}

function renderTaskModal(currentTask) {
    // clear any current comments and due-date
    commentsInputEl.value = '';
    dueDateInputEl.value = '';

    // display saved comments if any
    if (currentTask.comments) {
        commentsInputEl.value = currentTask.comments;
    }

    // display saved due date if applicable
    if (currentTask.dueDate) {
        dueDateInputEl.value = currentTask.dueDate;
    }

    modalTitleEl.innerHTML = currentTask.name;

    // render due date calendar

    // initialise modal
    MicroModal.init();

    // show modal
    MicroModal.show('modal-1');

    // if save changes clicked then save to object
    modalSaveChangesEl.onclick = () => {
        // eslint-disable-next-line no-use-before-define
        saveModal(currentTask, commentsInputEl.value, dueDateInputEl.value);
    };
}

function saveModal(currentTask, comments, dueDate) {
    currentTask.comments = comments;
    currentTask.dueDate = dueDate;
    currentTask.dueDate = dueDate;
}

export { addTaskToProject, renderTaskModal, projects };
