import {
    toDoList
} from './createToDo';

import {
    removeToDo
} from './removeToDo';

import {
    removeToDoElement
} from './removeToDoElement';

import {
    completeToDo
} from './completeToDo';

const createToDoElement = () => {

    if (document.getElementById('title').value !== '') {

        //removes input elements
        document.getElementById('todo_form').remove();

        //creates to do DOM elements
        const todoListEl = document.getElementById('todo-list');
        const toDoContainer = document.createElement('div');
        const toDoTitle = document.createElement('div');
        const toDoDate = document.createElement('div');
        const toDoRemove = document.createElement('div');
        const toDoComplete = document.createElement('div');

        todoListEl.appendChild(toDoContainer);
        toDoContainer.classList.add('toDoContainer');
        toDoContainer.classList.add('fadeIn');
        toDoTitle.classList.add('todo-title');
        toDoDate.classList.add('todo-date');
        toDoRemove.classList.add('todo-remove');
        toDoComplete.classList.add('todo-complete');
        toDoContainer.setAttribute('id', `${toDoList[toDoList.length - 1].id}`);
        toDoContainer.append(toDoComplete, toDoTitle, toDoDate, toDoRemove);
        toDoTitle.innerHTML = toDoList[toDoList.length - 1].title;
        toDoComplete.innerHTML = `<label class='checkbox'><input id='${toDoList[toDoList.length - 1].id}' type='checkbox' class='checkbox__input'/><span class='checkbox__inner'></span></label>`;

        toDoRemove.innerHTML = `<img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id=${toDoList[toDoList.length - 1].id} alt="delete">`;
        toDoRemove.setAttribute('class', 'removeToDo');
        toDoRemove.setAttribute('id', `${toDoList[toDoList.length - 1].id}`);
        const removeBtns = document.querySelectorAll('.removeToDo');
        for (let i = 0; i < removeBtns.length; i++) {
            removeBtns[i].addEventListener('click', removeToDo);
            removeBtns[i].addEventListener('click', removeToDoElement);
        }

        if (!Date.parse(toDoList[toDoList.length - 1].dueDate)) {
            toDoDate.innerHTML = 'No Date';
        } else if (toDoList[toDoList.length - 1].dueDate !== NaN) {
            toDoDate.innerHTML = toDoList[toDoList.length - 1].dueDate;
        };
    };

    const checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('change', completeToDo);
    };
};

export {
    createToDoElement,
};