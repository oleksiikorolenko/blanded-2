import { form, button, taskList } from "./refs";
import { renderTask } from "./tasks";
import { saveTaskLocalStorage, deleteTaskFromLocalStorage, renderTaskFromLocalStorage } from "./local-storage-api";

renderTaskFromLocalStorage();
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskName = e.target.taskName.value.trim();
    const taskDescription = e.target.taskDescription.value.trim();

    console.log(taskName);
    console.log(taskDescription);
    if (!taskName || !taskDescription ) {
        return alert('Заповніть всі поля форми!');
        
    }
    renderTask({ title: taskName, description: taskDescription });
    saveTaskLocalStorage({ title: taskName, description: taskDescription });
    form.reset();
})

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-list-item-btn')) {
        const taskItem = e.target.closest('.task-list-item');
        console.log(taskItem);
        const indexEl = [...taskList.children].indexOf(taskItem);
        deleteTaskFromLocalStorage(indexEl);
        taskItem.remove();
    }
});





