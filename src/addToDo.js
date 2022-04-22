import {
    createToDo
} from './createToDo';

const addToDo = () => {

    if (document.getElementById('todo_form') === null) {
        const toDoList = document.getElementById('todo-list');
        const newForm = document.createElement('div');

        newForm.setAttribute('id', 'todo_form');
        newForm.classList.add('fadeIn')
        const formHtml = "<input id='title' placeholder='Add a task' type='text' required><select name='priority' id='priority' required> <option selected hidden>Priority</option><option value='high'>High</option><option value='medium'>Medium</option><option value='low'>Low</option></select><input id='dueDate' placeholder='dueDate' type='date' required><button class='submit' id='submit '>Add Task</button>"
        newForm.innerHTML = formHtml;
        toDoList.append(newForm);
        document.querySelector('.submit').onclick = createToDo;
    } else {
        document.getElementById('title').focus();
    };
};

const toDoBtn = document.getElementById('add_todo');
toDoBtn.addEventListener('click', addToDo);

const toDoBtnMain = document.getElementById('todo-btn-main');
toDoBtnMain.addEventListener('click', addToDo);

export {
    addToDo
};