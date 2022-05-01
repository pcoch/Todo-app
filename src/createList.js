import {
    selectList,
} from './changeListSelection';

const toDoMasterList = [];

const createList = () => {
    let title = document.getElementById('list-title').value;
    toDoMasterList.push(title);
    console.log(toDoMasterList);

    const myLists = document.querySelector('.lists');
    const listContainer = document.createElement('div');

    listContainer.innerHTML = `<div class='list-item' id='${title}'> <img src="/dist/assets/macos-calendar.png"><p>${title}</p></div>`;
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
        lists[i].addEventListener('click', selectList)
    }
};

export {
    createList,
    toDoMasterList
};