import {
    createToDoElement
} from './createToDoElement';

//add in a completed paremeter

const toDoList = [];

const toDoFactory = (title, priority, dueDate, id) => {
    return {
        title,
        priority,
        dueDate,
        id,
    };
};

const createToDo = () => {

    let title = document.getElementById('title').value;
    let priority = document.getElementById('priority').value;
    let dueDate = document.getElementById('dueDate').value;
    let id = Date.now();

    let newToDo = toDoFactory(title, priority, dueDate, id);
    toDoList.push(newToDo);
    console.log(toDoList);

    createToDoElement();
};

export {
    toDoFactory,
    createToDo,
    toDoList
};