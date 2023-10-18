import { Task } from "./classTask.js";
import { loadTaskSaved } from "./createNewTask.js";
import { completeTask } from "./completeTask.js";

function saveTaskLocalStorage(task) {
    return localStorage.setItem(`id ${Task.id}`, task.descriptionTask);
}

function loadTasksFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        loadTaskSaved(value)
        completeTask()
    }
}

export { saveTaskLocalStorage, loadTasksFromLocalStorage }

