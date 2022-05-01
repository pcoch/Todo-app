import {
    createList,
    toDoMasterList
} from './createList';

const createListInput = () => {

    if (document.getElementById('list-title') === null) {
        const sidebar = document.querySelector('.sidebar');
        const listContainer = document.createElement('div');

        listContainer.classList.add('list-container');
        listContainer.innerHTML = '<input class="list-input" id="list-title" type="text"><div class="list-container-btns"><div class="list-add button">Add</div><div class="list-cancel button">Cancel</div></div>';
        sidebar.append(listContainer);

        document.querySelector('.list-cancel').addEventListener('click', cancelListInput);
        document.querySelector('.list-add').addEventListener('click', createList);
    } else {
        document.querySelector('.list-input').focus();
    }
};

const addListBtn = document.querySelector('.add-list');
addListBtn.addEventListener('click', createListInput);

const cancelListInput = () => {
    const listInputEl = document.querySelector('.list-container');
    listInputEl.remove();
};

export {
    createListInput,
    cancelListInput
};