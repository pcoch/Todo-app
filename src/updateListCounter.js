import {
    toDoList
} from './createToDo';

const updateListCounter = () => {

    const inboxCounter = document.getElementById('inbox-counter');
    const todayCounter = document.getElementById('today-counter');
    const scheduledCounter = document.getElementById('scheduled-counter');
    const allCounter = document.getElementById('all-counter');

    //inbox
    let inboxToDos = toDoList.filter(checkInboxToDo)

    function checkInboxToDo(toDo) {
        return toDo.list == 'Inbox';
    };
    inboxCounter.innerHTML = inboxToDos.length;

    //today
    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let today = (new Date(Date.now() - tzoffset)).toISOString().split('T')[0];

    let todayToDos = toDoList.filter(checkTodayToDo)

    function checkTodayToDo(toDo) {
        return toDo.dueDate == today;
    };

    todayCounter.innerHTML = todayToDos.length;

    //scheduled
    let scheduledToDos = toDoList.filter(checkScheduledToDo)

    function checkScheduledToDo(toDo) {
        return toDo.dueDate > today;
    };

    scheduledCounter.innerHTML = scheduledToDos.length;

    //all
    let allToDos = toDoList;

    function checkAllToDo(toDo) {
        return toDo.list == 'All';
    };

    allCounter.innerHTML = allToDos.length;
};

export {
    updateListCounter
}