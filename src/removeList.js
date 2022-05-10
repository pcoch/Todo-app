import {
    updateListCounter
} from './updateListCounter';

import {
    toDoMasterList
} from './createList';

import {
    toDoList
} from './createToDo';

import {
    selectInbox
} from './changeListSelection';

import {
    setStorage,
} from './storage';

const removeListElement = (e) => {
    e.stopPropagation();
    //removing list from list array
    let index = toDoMasterList.findIndex(item => item == e.target.id);
    toDoMasterList.splice(index, 1);

    //remove list html
    const itemToRemove = document.getElementById(`${e.target.id}`);
    itemToRemove.remove();

    //removing to dos that where in the list
    toDoList = toDoList.filter(todo => todo.list != e.target.id);
    console.log(toDoList)
    console.log(toDoMasterList);

    //update title
    document.getElementById('main-title').innerText = 'Inbox';

    updateListCounter();
    selectInbox();
    setStorage();
};

export {
    removeListElement
};