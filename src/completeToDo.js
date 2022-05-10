import {
    toDoList
} from './createToDo';

import {
    setStorage,
} from './storage';

const completeToDo = (e) => {

    if (e.target.checked) {

        let toDo = toDoList.find(todo => todo.id == e.target.id);
        toDo.complete = true
        e.target.nextElementSibling.classList.add('checked');

        console.log(toDo)
        setStorage();
    };

    if (!e.target.checked) {

        let toDo = toDoList.find(todo => todo.id == e.target.id);
        toDo.complete = false;
        console.log(toDo)

        e.target.nextElementSibling.classList.remove('checked');

        setStorage();
    };
};

export {
    completeToDo,
};


//everything working fine, except on reload