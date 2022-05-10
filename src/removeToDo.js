import {
    toDoList
} from './createToDo';

import {
    setStorage,
} from './storage';

const removeToDo = (e) => {
    const index = toDoList.findIndex(item => item.id == e.target.id);

    toDoList.splice(index, 1);
    console.log(toDoList);

    setStorage();
};

export {
    removeToDo
};