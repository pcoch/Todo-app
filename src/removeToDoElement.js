import {
    updateListCounter
} from './updateListCounter'

const removeToDoElement = (e) => {
    const itemToRemove = document.getElementById(`${e.target.id}`);
    itemToRemove.remove();
    updateListCounter();
}

export {
    removeToDoElement
}