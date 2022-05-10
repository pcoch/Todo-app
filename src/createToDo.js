import {
    createToDoElement
} from './createToDoElement';

import {
    updateListCounter
} from './updateListCounter';

import {
    setStorage,
    getStorage,
} from './storage';

let toDoList = [];

const toDoFactory = (title, dueDate, id, complete, list) => {
    return {
        title,
        dueDate,
        id,
        complete,
        list,
    };
};

const createToDo = () => {

    if (document.getElementById('title').value !== '') {

        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('dueDate').value;
        let id = Date.now();
        let complete = false;
        //assinging list to todo object
        let list
        let currentList = document.getElementById('main-title').innerText;
        list = currentList;

        let newToDo = toDoFactory(title, dueDate, id, complete, list);
        toDoList.push(newToDo);

        createToDoElement();
        updateListCounter();
        setStorage();
    };
};

export {
    toDoFactory,
    createToDo,
    toDoList,
};