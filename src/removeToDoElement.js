const removeToDoElement = (e) => {
    const itemToRemove = document.getElementById(`${e.target.id}`);
    itemToRemove.remove();
}

export {
    removeToDoElement
}