import {
    selectList,
} from './changeListSelection';

import {
    removeListElement,
} from './removeList';

import {
    setStorage,
} from './storage';

let toDoMasterList = [];

const createList = () => {

    let title = document.getElementById('list-title').value;
    toDoMasterList.push(title);
    console.log(toDoMasterList);

    const myLists = document.querySelector('.lists');
    const listContainer = document.createElement('div');

    listContainer.innerHTML = `<div class='list-item fadeIn' id='${title}'><img src="/assets/pushpin_1f4cc.png"><p>${title}</p><img id='${title}' class="remove-list"src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg"></div>`;
    listContainer.classList.add('list-section');
    myLists.append(listContainer);

    const addToDoBtn = document.getElementById('todo-btn-main');
    addToDoBtn.classList.remove('hide');

    const titlEl = document.getElementById('main-title');
    titlEl.innerHTML = title;

    const addList = document.querySelector('.list-container');
    addList.remove();

    const lists = document.querySelectorAll('.list-section');
    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', selectList);
    };

    const removeLists = document.querySelectorAll('.remove-list');
    for (let i = 0; i < removeLists.length; i++) {
        removeLists[i].addEventListener('click', removeListElement);
    };

    setStorage();
};

export {
    createList,
    toDoMasterList,
};