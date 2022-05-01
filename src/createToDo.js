import {
    createToDoElement
} from './createToDoElement';

const toDoList = [];

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

    let title = document.getElementById('title').value;
    let dueDate = document.getElementById('dueDate').value;
    let id = Date.now();
    let complete = false;
    //assinging list to to do object
    let list
    let currentList = document.getElementById('main-title').innerText;
    list = currentList;

    let newToDo = toDoFactory(title, dueDate, id, complete, list);
    toDoList.push(newToDo);
    console.log(toDoList);

    createToDoElement();
};

export {
    toDoFactory,
    createToDo,
    toDoList
};