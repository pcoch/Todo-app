import {
    toDoList
} from './createToDo';

import {
    toDoMasterList
} from './createList';

import {
    selectInbox,
    selectList
} from './changeListSelection';

import {
    updateListCounter
} from './updateListCounter';

import {
    removeListElement,
} from './removeList';

import {
    completeToDo
} from './completeToDo';

import {
    toggleSideBar
} from './toggleSidebar';

const setStorage = () => {
    localStorage.setItem('storedToDoList', JSON.stringify(toDoList));
    localStorage.setItem('storedLists', JSON.stringify(toDoMasterList));
};

const getStorage = () => {

    toDoList = JSON.parse(localStorage.getItem('storedToDoList'));
    if (toDoList == null) {
        toDoList = [];
    }
    console.log(toDoList);

    toDoMasterList = JSON.parse(localStorage.getItem('storedLists'));
    if (toDoMasterList == null) {
        toDoMasterList = [];
    }

};

window.addEventListener('load', () => {
    getStorage();
    selectInbox();
    updateListCounter();
    toggleSideBar();


    //generate lists
    for (let i = 0; i < toDoMasterList.length; i++) {
        const card = `<div class='list-item' id='${toDoMasterList[i]}'><img src="/assets/pushpin_1f4cc.png"><p>${toDoMasterList[i]}</p><img id='${toDoMasterList[i]}' class="remove-list"src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg"></div>`;
        const ele = document.createElement('div');
        ele.innerHTML = card;
        document.querySelector('.list-section').appendChild(ele.firstChild);

        const lists = document.querySelectorAll('.list-section');
        for (let i = 0; i < lists.length; i++) {
            lists[i].addEventListener('click', selectList);
        };

        const removeLists = document.querySelectorAll('.remove-list');
        for (let i = 0; i < removeLists.length; i++) {
            removeLists[i].addEventListener('click', removeListElement);
        };
    };

    //re-add event listeners
    const checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('change', completeToDo);
    };

});

export {
    setStorage,
    getStorage,
};