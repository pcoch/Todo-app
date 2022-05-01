import {
    toDoList
} from './createToDo';

import {
    addToDo
} from './addToDo.js'

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

// const updateToDoList = () => {


// };

//if click on inbox
const selectInbox = (e) => {
    titlEl.innerHTML = 'Inbox';
    addToDoBtn.classList.remove('hide');

    let inboxToDos = toDoList.filter(checkInboxToDo)

    function checkInboxToDo(toDo) {
        return toDo.list == 'Inbox';
    };

    console.log(inboxToDos);
    console.log('it worked');

    //when click on list
    //filter the master to do list to just the objects that meet criteria
    //then a for loop to create a dom element for each to do object

    // for (let i = 0; i < inboxToDos.length; i++) {
    // }
};

//if click on today
const selectToday = (e) => {
    titlEl.innerHTML = 'Today';
    addToDoBtn.classList.add('hide');
    removeToDoList();
};

//if click on scheduled 
const selectScheduled = (e) => {
    titlEl.innerHTML = 'Scheduled';
    addToDoBtn.classList.add('hide');
    removeToDoList();
};

//if click on all
const selectAll = (e) => {
    titlEl.innerHTML = 'All';
    addToDoBtn.classList.add('hide');
    removeToDoList();
};

//if click on a list
const selectList = (e) => {
    titlEl.innerHTML = e.target.id;
    addToDoBtn.classList.remove('hide');
    removeToDoList();

    //unfinished code. But this will filter only elements in certain list
    // function checkInboxToDo(toDo) {
    //     return toDo.list == e.target.id;
    // };

};

export {
    selectList,
};