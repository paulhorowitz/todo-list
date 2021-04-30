/* eslint-disable import/no-cycle */
import { addTaskToProject, renderTaskModal, projects } from '../index';

function displayCurrentProjectTasks(currentProject) {
    const projectViewEl = document.getElementById('project-view');
    const projectNameEl = document.getElementById('project-name');
    projectNameEl.innerHTML = currentProject.name;

    while (projectViewEl.firstChild) {
        projectViewEl.removeChild(projectViewEl.firstChild);
    }

    if (currentProject.tasks) {
        for (let i = 0; i < currentProject.tasks.length; i += 1) {
            const todoListEl = document.createElement('li');
            todoListEl.id = 'todo-list';
            projectViewEl.appendChild(todoListEl);
            todoListEl.innerHTML = currentProject.tasks[i].name;
            todoListEl.addEventListener('click', () => {
                renderTaskModal(currentProject.tasks[i]);
            });
        }
    }
    // eslint-disable-next-line no-use-before-define
    renderAddTaskButton(currentProject);
}

function renderAddTaskButton(currentProject) {
    const projectViewEl = document.getElementById('project-view');
    const taskButton = document.createElement('button');
    projectViewEl.appendChild(taskButton);
    taskButton.innerHTML = '+ Add Task';
    taskButton.id = 'task-button';

    // make add task button work

    taskButton.addEventListener('click', () => {
        // remove original add task button
        taskButton.style.display = 'none';

        // add input field for adding task
        const addTaskinputEl = document.createElement('input');
        addTaskinputEl.id = 'task-input';
        projectViewEl.appendChild(addTaskinputEl);

        // add "add" and cancel buttons
        const addTaskConfirmEl = document.createElement('button');
        addTaskConfirmEl.id = 'add-task-button';
        projectViewEl.appendChild(addTaskConfirmEl);
        addTaskConfirmEl.innerHTML = 'Add';
        addTaskConfirmEl.addEventListener('click', () => {
            const newTaskName = addTaskinputEl.value;
            addTaskToProject(newTaskName, currentProject);
            displayCurrentProjectTasks(currentProject);
        });
    });
}

function updateDomWithProjectList() {
    const projectsList = document.getElementById('projects-list');
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    }

    for (let i = 0; i < projects.length; i += 1) {
        const projectItem = document.createElement('li');
        projectsList.appendChild(projectItem);
        projectItem.innerHTML = projects[i].name;
        projectItem.addEventListener('click', () => {
            displayCurrentProjectTasks(projects[i]);
        });
    }
}

export { renderAddTaskButton, updateDomWithProjectList, displayCurrentProjectTasks };
