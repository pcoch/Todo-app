import {
    toDoList
} from './createToDo';

const removeToDo = (e) => {

    const index = toDoList.findIndex(item => item.id == e.target.id);
    if (index > -1) {
        toDoList.splice(index, 1);
        console.log(toDoList);
    };
};

export {
    removeToDo
};