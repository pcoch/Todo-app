import {
    toDoList
} from './createToDo';

import {
    removeToDo
} from './removeToDo';

import {
    removeToDoElement
} from './removeToDoElement';

const createToDoElement = () => {

    //removes input elements
    document.getElementById('todo_form').remove();

    //creates to do DOM elements
    const todoList = document.getElementById('todo-list');
    const toDoContainer = document.createElement('div');
    const toDoTitle = document.createElement('div');
    const toDoPriority = document.createElement('div');
    const toDoDate = document.createElement('div');
    const toDoRemove = document.createElement('div');
    const toDoComplete = document.createElement('div');
    todoList.appendChild(toDoContainer);
    toDoContainer.classList.add('toDoContainer');
    toDoContainer.classList.add('fadeIn');
    toDoTitle.classList.add('todo-title');
    toDoPriority.classList.add('todo-priority');
    toDoDate.classList.add('todo-date');
    toDoRemove.classList.add('todo-remove');
    toDoComplete.classList.add('todo-complete');
    toDoContainer.setAttribute('id', `${toDoList[toDoList.length - 1].id}`);
    toDoContainer.append(toDoComplete, toDoTitle, toDoPriority, toDoDate, toDoRemove);
    toDoTitle.innerHTML = toDoList[toDoList.length - 1].title;
    // toDoPriority.innerHTML = toDoList[toDoList.length - 1].priority;
    toDoPriority.innerHTML = '<img class="priority" src="/dist/assets/triangular-flag_1f6a9.png" alt="priority">';
    // toDoDate.innerHTML = toDoList[toDoList.length - 1].dueDate;
    toDoDate.innerHTML = '<img class="duedate" src="/dist/assets/macos-calendar.png" alt="date">';
    toDoComplete.innerHTML = "<label class='checkbox'><input type='checkbox' class='checkbox__input'/><span class='checkbox__inner'></span></label>";
    toDoRemove.innerHTML = '<img class="delete" src="/dist/assets/delete_white_24dp.svg" alt="delete"></img>';
    toDoRemove.setAttribute('class', 'removeToDo');
    toDoRemove.setAttribute('id', `${toDoList[toDoList.length - 1].id}`);
    const removeBtns = document.querySelectorAll('.removeToDo');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeToDo);
        removeBtns[i].addEventListener('click', removeToDoElement);
    }
};

export {
    createToDoElement,
};