import {
    toDoList
} from './createToDo';

import {
    removeToDo
} from './removeToDo';

import {
    removeToDoElement
} from './removeToDoElement';

const inboxButton = document.getElementById('inbox');
const todayButton = document.getElementById('today');
const scheduledButton = document.getElementById('scheduled');
const allButton = document.getElementById('all');
const todoList = document.getElementById('todo-list');
const addToDoBtn = document.getElementById('todo-btn-main');
const titlEl = document.getElementById('main-title');

window.onload = function () {
    inboxButton.addEventListener('click', selectInbox);
    todayButton.addEventListener('click', selectToday);
    scheduledButton.addEventListener('click', selectScheduled);
    allButton.addEventListener('click', selectAll);
};

const removeToDoList = () => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
};

const addRemoveListener = () => {
    const removeBtns = document.querySelectorAll('.removeToDo');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeToDo);
        removeBtns[i].addEventListener('click', removeToDoElement);
    }
};

//if click on inbox
const selectInbox = (e) => {
    titlEl.innerHTML = 'Inbox';
    addToDoBtn.classList.remove('hide');
    removeToDoList();

    let inboxToDos = toDoList.filter(checkInboxToDo)

    function checkInboxToDo(toDo) {
        return toDo.list == 'Inbox';
    };

    inboxToDos.forEach(todo => {
        const card = `<div class="toDoContainer fadeIn" id="${todo.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${todo.title}</div><div class="todo-date">${todo.dueDate == '' ? 'No Date' : todo.dueDate}</div><div class="removeToDo" id="${todo.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${todo.id}" alt="delete"></div></div>`;
        const ele = document.createElement('div');
        ele.innerHTML = card;
        document.getElementById('todo-list').appendChild(ele.firstChild);
    });

    addRemoveListener();
};

//if click on today
const selectToday = (e) => {
    titlEl.innerHTML = 'Today';
    addToDoBtn.classList.add('hide');
    removeToDoList();

    // let date = new Date();
    // let today = date.toISOString().split('T')[0];

    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let today = (new Date(Date.now() - tzoffset)).toISOString().split('T')[0];

    let todayToDos = toDoList.filter(checkTodayToDo)

    function checkTodayToDo(toDo) {
        return toDo.dueDate == today;
    };

    todayToDos.forEach(todo => {
        const card = `<div class="toDoContainer fadeIn" id="${todo.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${todo.title}</div><div class="todo-date">${todo.dueDate == '' ? 'No Date' : todo.dueDate}</div><div class="removeToDo" id="${todo.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${todo.id}" alt="delete"></div></div>`;
        const ele = document.createElement('div');
        ele.innerHTML = card;
        document.getElementById('todo-list').appendChild(ele.firstChild);
    });

    addRemoveListener();
};

//if click on scheduled 
const selectScheduled = (e) => {
    titlEl.innerHTML = 'Scheduled';
    addToDoBtn.classList.add('hide');
    removeToDoList();

    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let today = (new Date(Date.now() - tzoffset)).toISOString().split('T')[0];

    let scheduledToDos = toDoList.filter(checkScheduledToDo)

    function checkScheduledToDo(toDo) {
        return toDo.dueDate > today;
    };

    scheduledToDos.forEach(todo => {
        const card = `<div class="toDoContainer fadeIn" id="${todo.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${todo.title}</div><div class="todo-date">${todo.dueDate == '' ? 'No Date' : todo.dueDate}</div><div class="removeToDo" id="${todo.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${todo.id}" alt="delete"></div></div>`;
        const ele = document.createElement('div');
        ele.innerHTML = card;
        document.getElementById('todo-list').appendChild(ele.firstChild);
    });

    addRemoveListener();
};

//if click on all
const selectAll = (e) => {
    titlEl.innerHTML = 'All';
    addToDoBtn.classList.add('hide');
    removeToDoList();

    let allToDos = toDoList;

    function checkAllToDo(toDo) {
        return toDo.list == 'All';
    };

    allToDos.forEach(todo => {
        const card = `<div class="toDoContainer fadeIn" id="${todo.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${todo.title}</div><div class="todo-date">${todo.dueDate == '' ? 'No Date' : todo.dueDate}</div><div class="removeToDo" id="${todo.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${todo.id}" alt="delete"></div></div>`;
        const ele = document.createElement('div');
        ele.innerHTML = card;
        document.getElementById('todo-list').appendChild(ele.firstChild);
    });

    addRemoveListener();
};

//if click on a list
const selectList = (e) => {
    titlEl.innerHTML = e.target.id;
    addToDoBtn.classList.remove('hide');
    removeToDoList();

    let listToDos = toDoList.filter(checkListToDo)

    function checkListToDo(toDo) {
        return toDo.list == e.target.id;
    };

    listToDos.forEach(todo => {
        const card = `<div class="toDoContainer fadeIn" id="${todo.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${todo.title}</div><div class="todo-date">${todo.dueDate == '' ? 'No Date' : todo.dueDate}</div><div class="removeToDo" id="${todo.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${todo.id}" alt="delete"></div></div>`;
        const ele = document.createElement('div');
        ele.innerHTML = card;
        document.getElementById('todo-list').appendChild(ele.firstChild);
    });

    addRemoveListener();
};

export {
    selectInbox,
    selectToday,
    selectScheduled,
    selectAll,
    selectList,
};