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
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

// html DOM element variables

addProjectButtonEl = document.getElementById("add-project");
let project = document.getElementById("project");
let projectsList = document.getElementById("projects-list");
let projectsMain = document.getElementById("projects-main");
let projectNameEl = document.getElementById("project-name");
let projectViewEl = document.getElementById("project-view");

// event listeners

addProjectButtonEl.addEventListener("click", addProject);

// variables

let projects = [];
let projectIdIndex = 3;
let taskIdIndex = 0;

// create default project

defaultProject1 = new Project("Personal", 1);
projects.push(defaultProject1);
defaultProject2 = new Project("Work", 2);
projects.push(defaultProject2);
console.log(projects)
updateDomWithProjectList()
displayCurrentProject(defaultProject1)

function addProject() {

    (function hideAddProjectButton() {
        // hide button
        addProjectButtonEl.style.display = "none"
        addProjectInputField();
    })()
    
    function addProjectInputField(){
        addProjectInputEl = document.createElement("input");

        // add input field for adding project
        projectsMain.appendChild(addProjectInputEl);

        //add "add" and "cancel" buttons below
        let addProjectConfirmEl = document.createElement("button");
        addProjectConfirmEl.innerHTML = "Add";
        addProjectConfirmEl.id="add-project-button"
        projectsMain.appendChild(addProjectConfirmEl);

        //make "add" button work
        addProjectConfirmEl.addEventListener("click", addProjectToList)
    }

    function addProjectToList() {
        let projectName = addProjectInputEl.value;
        let newProject = new Project(projectName, projectIdIndex);
        projectIdIndex += 1;
        projects.push(newProject)
        addProjectInputEl.value = "";
        updateDomWithProjectList()
        displayCurrentProject(newProject);
    }
}

function updateDomWithProjectList() {
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.firstChild);
    }
    
    for (let i = 0; i < projects.length; i++) {
        let projectItem = document.createElement("li");
        projectsList.appendChild(projectItem)
        projectItem.innerHTML = projects[i].name;
        projectItem.addEventListener("click", function() {displayCurrentProject(projects[i])})
    }
}

function displayCurrentProject(currentProject) {
    console.log(currentProject)
    projectNameEl.innerHTML = currentProject.name;

    while (projectViewEl.firstChild) {
        projectViewEl.removeChild(projectViewEl.firstChild);
    }

    if (currentProject.tasks){
        for (let i = 0; i < currentProject.tasks.length; i++) {
            let todoItemEl = document.createElement("li");
            projectViewEl.appendChild(todoItemEl);
            todoItemEl.innerHTML = currentProject.tasks[i].name;
        }
    }
    addTaskRender(currentProject);
}

function addTaskRender(currentProject) {

    let taskButton = document.createElement("button")
    projectViewEl.appendChild(taskButton)
    taskButton.innerHTML = "Add Task";
    taskButton.id = "task-button";
    // make add task button work

    taskButton.addEventListener("click", function() {
        
        //remove original add task button
        taskButton.style.display = "none";

        // add input field for adding task
        addTaskinputEl = document.createElement("input")
        projectViewEl.appendChild(addTaskinputEl);

        // add "add" and cancel buttons
        let addTaskConfirmEl = document.createElement("button");
        projectViewEl.appendChild(addTaskConfirmEl);
        addTaskConfirmEl.innerHTML = "Add";
        addTaskConfirmEl.addEventListener("click", function() {
            let newTaskName = addTaskinputEl.value
            console.log("new task name is " + newTaskName)
            addTaskToProject(newTaskName, currentProject)
            displayCurrentProject(currentProject)
        })
    })
    
}

function addTaskToProject(newTaskName, currentProject) {
    console.log(currentProject)
    let newTask = new Task(newTaskName, taskIdIndex);
    console.log(newTask)
    taskIdIndex += 1;
    currentProject.addTask(newTask)
    console.log(currentProject)
}
