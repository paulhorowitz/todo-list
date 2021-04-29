import flatpickr from "flatpickr";
import MicroModal from 'micromodal';  // es6 module

class Project {
    constructor(name, id, tasks) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }

    addTask(taskObject) {
            this.tasks.push(taskObject);
    }
}

class Task {
    constructor(name, id, comments, dueDate) {
        this.name = name;
        this.id = id;
        this.comments = comments;
        this.dueDate = dueDate;
    }
}

// html DOM element variables

let addProjectButtonEl = document.getElementById("add-project");
let project = document.getElementById("project");
let projectsList = document.getElementById("projects-list");
let projectsMain = document.getElementById("projects-main");
let projectNameEl = document.getElementById("project-name");
let projectViewEl = document.getElementById("project-view");
let modalContentEl = document.getElementById("modal-content");
let modalTitleEl = document.getElementById("modal-1-title");
let modalBodyEl = document.getElementById("modal-body");
let saveModalEl = document.getElementById("save-modal");
let todoMainEl = document.getElementById("todo-main");
let addProjectContainerEl = document.getElementById("add-project-container");
let commentsInputEl = document.getElementById("comments-input");
let modalSaveChangesEl = document.getElementById("modal-save-changes");
let dueDateInputEl = document.getElementById("due-date-input");

// event listeners

addProjectButtonEl.addEventListener("click", addProject);

// variables

let projects = [];
let projectIdIndex = 3;
let taskIdIndex = 0;

// create default project

let defaultProject1 = new Project("Personal", 1);
projects.push(defaultProject1);
let defaultProject2 = new Project("Work", 2);
projects.push(defaultProject2);
updateDomWithProjectList()
displayCurrentProjectTasks(defaultProject1)

function addProject() {

    // hide button
    addProjectButtonEl.style.display = "none";
    let addProjectInputEl = document.createElement("input");

    // add input field for adding project
    projectsMain.appendChild(addProjectInputEl);
    addProjectInputEl.id="add-project-input-box"

    //add "add" and "cancel" buttons below
    let addProjectConfirmEl = document.createElement("button");
    let cancelProjectConfirmEl = document.createElement("button");
    addProjectConfirmEl.innerHTML = "Add";
    cancelProjectConfirmEl.innerHTML = "Cancel";
    addProjectConfirmEl.id="add-project-button";
    cancelProjectConfirmEl.id = "cancel-project-button";
    addProjectContainerEl.appendChild(addProjectConfirmEl);
    addProjectContainerEl.appendChild(cancelProjectConfirmEl)

    // make "add" button work
    addProjectConfirmEl.addEventListener("click", function() {
        let newProjectName = addProjectInputEl.value;
        addProjectInputEl.value = "";
        addProjectToList(newProjectName);
    })

    // revert if cancel button is pressed
    cancelProjectConfirmEl.addEventListener("click", function() {
        addProjectInputEl.parentNode.removeChild(addProjectInputEl);
        cancelProjectConfirmEl.parentNode.removeChild(cancelProjectConfirmEl);
        addProjectConfirmEl.parentNode.removeChild(addProjectConfirmEl);
        addProjectButtonEl.style.display = "inline-block"
    }
)}

function addProjectToList(newProjectName) {
    let projectName = newProjectName;
    let newProject = new Project(projectName, projectIdIndex);
    projectIdIndex += 1;
    projects.push(newProject)
    updateDomWithProjectList()
    displayCurrentProjectTasks(newProject);
}

function updateDomWithProjectList() {
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    }
    
    for (let i = 0; i < projects.length; i++) {
        let projectItem = document.createElement("li");
        projectsList.appendChild(projectItem)
        projectItem.innerHTML = projects[i].name;
        projectItem.addEventListener("click", function() {
            displayCurrentProjectTasks(projects[i])
        })
    }
}

function displayCurrentProjectTasks(currentProject) {
    projectNameEl.innerHTML = currentProject.name;

    while (projectViewEl.firstChild) {
        projectViewEl.removeChild(projectViewEl.firstChild);
    }

    if (currentProject.tasks){
        for (let i = 0; i < currentProject.tasks.length; i++) {
            let todoItemEl = document.createElement("li");
            todoItemEl.id="todo-list"
            projectViewEl.appendChild(todoItemEl);
            todoItemEl.innerHTML = currentProject.tasks[i].name;
            todoItemEl.addEventListener("click", function() {
                renderTaskModal(currentProject.tasks[i])
            })
        }
    }
    renderAddTaskButton(currentProject);
}

function renderAddTaskButton(currentProject) {

    let taskButton = document.createElement("button")
    projectViewEl.appendChild(taskButton)
    taskButton.innerHTML = "+ Add Task";
    taskButton.id = "task-button";
    
    // make add task button work

    taskButton.addEventListener("click", function() {
        
        //remove original add task button
        taskButton.style.display = "none";

        // add input field for adding task
        let addTaskinputEl = document.createElement("input");
        addTaskinputEl.id="task-input"
        projectViewEl.appendChild(addTaskinputEl);

        // add "add" and cancel buttons
        let addTaskConfirmEl = document.createElement("button");
        addTaskConfirmEl.id = "add-task-button"
        projectViewEl.appendChild(addTaskConfirmEl);
        addTaskConfirmEl.innerHTML = "Add";
        addTaskConfirmEl.addEventListener("click", function() {
            let newTaskName = addTaskinputEl.value
            addTaskToProject(newTaskName, currentProject)
            displayCurrentProjectTasks(currentProject)
        })
    })
    
}

function addTaskToProject(newTaskName, currentProject) {
    let newTask = new Task(newTaskName, taskIdIndex);
    taskIdIndex += 1;
    currentProject.addTask(newTask)
}

function renderTaskModal(currentTask) {
    //clear any current comments and due-date
    commentsInputEl.value = "";
    dueDateInputEl.value = "";

    //display saved comments if any
    if (currentTask.comments) {
        commentsInputEl.value = currentTask.comments;
    }

    //display saved due date if applicable
    if (currentTask.dueDate) {
        dueDateInputEl.value = currentTask.dueDate;
    }

    modalTitleEl.innerHTML = currentTask.name;

    //render due date calendar


    //initialise modal
    MicroModal.init();

    //show modal
    MicroModal.show('modal-1');

    //if save changes clicked then save to object
    modalSaveChangesEl.onclick = function() {
        saveModal(currentTask, commentsInputEl.value, dueDateInputEl.value);
    }
}

function saveModal(currentTask, comments, dueDate) {
    currentTask.comments = comments;
    currentTask.dueDate = dueDate;
    console.log(currentTask)
    currentTask.dueDate = dueDate;
}