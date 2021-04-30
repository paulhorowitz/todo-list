export default class Project {
    constructor(name, id, tasks = []) {
        this.name = name;
        this.id = id;
        this.tasks = tasks;
    }

    addTask(taskObject) {
        this.tasks.push(taskObject);
    }
}
