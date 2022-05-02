(()=>{"use strict";const e=e=>{const t=n.findIndex((t=>t.id==e.target.id));console.log(t),n.splice(t,1),console.log(n)},t=e=>{document.getElementById(`${e.target.id}`).remove()},d=()=>{const e=document.getElementById("inbox-counter"),t=document.getElementById("today-counter"),d=document.getElementById("scheduled-counter"),i=document.getElementById("all-counter");let l=n.filter((function(e){return"Inbox"==e.list}));e.innerHTML=l.length;let o=6e4*(new Date).getTimezoneOffset(),s=new Date(Date.now()-o).toISOString().split("T")[0],c=n.filter((function(e){return e.dueDate==s}));t.innerHTML=c.length;let a=n.filter((function(e){return e.dueDate>s}));d.innerHTML=a.length;let r=n;i.innerHTML=r.length};window.onload=function(){d()};const n=[],i=()=>{let i,l=document.getElementById("title").value,o=document.getElementById("dueDate").value,s=Date.now();i=document.getElementById("main-title").innerText;let c=((e,t,d,n,i)=>({title:e,dueDate:t,id:d,complete:!1,list:i}))(l,o,s,0,i);n.push(c),console.log(n),(()=>{document.getElementById("todo_form").remove();const d=document.getElementById("todo-list"),i=document.createElement("div"),l=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");d.appendChild(i),i.classList.add("toDoContainer"),i.classList.add("fadeIn"),l.classList.add("todo-title"),o.classList.add("todo-date"),s.classList.add("todo-remove"),c.classList.add("todo-complete"),i.setAttribute("id",`${n[n.length-1].id}`),i.append(c,l,o,s),l.innerHTML=n[n.length-1].title,c.innerHTML="<label class='checkbox'><input type='checkbox' value = 'complete' class='checkbox__input'/><span class='checkbox__inner'></span></label>",s.innerHTML=`<img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id=${n[n.length-1].id} alt="delete">`,s.setAttribute("class","removeToDo"),s.setAttribute("id",`${n[n.length-1].id}`);const a=document.querySelectorAll(".removeToDo");for(let d=0;d<a.length;d++)a[d].addEventListener("click",e),a[d].addEventListener("click",t);Date.parse(n[n.length-1].dueDate)?NaN!==n[n.length-1].dueDate&&(o.innerHTML=n[n.length-1].dueDate):o.innerHTML="No Date"})(),d()},l=()=>{if(null===document.getElementById("todo_form")){const e=document.getElementById("todo-list"),t=document.createElement("div");t.setAttribute("id","todo_form"),t.classList.add("fadeIn");const d="<input id='title' placeholder='Add a task' type='text' required><input id='dueDate' type='date' required><button class='submit' id='submit '>Add Task</button>";t.innerHTML=d,e.append(t),document.querySelector(".submit").onclick=i}else document.getElementById("title").focus()};document.getElementById("add_todo").addEventListener("click",l),document.getElementById("todo-btn-main").addEventListener("click",l);const o=document.getElementById("inbox"),s=document.getElementById("today"),c=document.getElementById("scheduled"),a=document.getElementById("all"),r=document.getElementById("todo-list"),u=document.getElementById("todo-btn-main"),m=document.getElementById("main-title");window.onload=function(){o.addEventListener("click",g),s.addEventListener("click",h),c.addEventListener("click",L),a.addEventListener("click",E)};const v=()=>{for(;r.firstChild;)r.removeChild(r.lastChild)},p=()=>{const d=document.querySelectorAll(".removeToDo");for(let n=0;n<d.length;n++)d[n].addEventListener("click",e),d[n].addEventListener("click",t)},g=e=>{m.innerHTML="Inbox",u.classList.remove("hide"),v(),n.filter((function(e){return"Inbox"==e.list})).forEach((e=>{const t=`<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,d=document.createElement("div");d.innerHTML=t,document.getElementById("todo-list").appendChild(d.firstChild)})),p()},h=e=>{m.innerHTML="Today",u.classList.add("hide"),v();let t=6e4*(new Date).getTimezoneOffset(),d=new Date(Date.now()-t).toISOString().split("T")[0];n.filter((function(e){return e.dueDate==d})).forEach((e=>{const t=`<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,d=document.createElement("div");d.innerHTML=t,document.getElementById("todo-list").appendChild(d.firstChild)})),p()},L=e=>{m.innerHTML="Scheduled",u.classList.add("hide"),v();let t=6e4*(new Date).getTimezoneOffset(),d=new Date(Date.now()-t).toISOString().split("T")[0];n.filter((function(e){return e.dueDate>d})).forEach((e=>{const t=`<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,d=document.createElement("div");d.innerHTML=t,document.getElementById("todo-list").appendChild(d.firstChild)})),p()},E=e=>{m.innerHTML="All",u.classList.add("hide"),v(),n.forEach((e=>{const t=`<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,d=document.createElement("div");d.innerHTML=t,document.getElementById("todo-list").appendChild(d.firstChild)})),p()},b=e=>{m.innerHTML=e.target.id,u.classList.remove("hide"),v(),n.filter((function(t){return t.list==e.target.id})).forEach((e=>{const t=`<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input type="checkbox" value="complete" class="checkbox__input"><span class="checkbox__inner"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/dist/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,d=document.createElement("div");d.innerHTML=t,document.getElementById("todo-list").appendChild(d.firstChild)})),p()},D=[],y=()=>{let e=document.getElementById("list-title").value;D.push(e),console.log(D);const t=document.querySelector(".lists"),d=document.createElement("div");d.innerHTML=`<div class='list-item' id='${e}'> <img src="/dist/assets/macos-calendar.png"><p>${e}</p></div>`,d.classList.add("list-section"),t.append(d),document.getElementById("todo-btn-main").classList.remove("hide"),document.getElementById("main-title").innerHTML=e,document.querySelector(".list-container").remove();const n=document.querySelectorAll(".list-section");for(let e=0;e<n.length;e++)n[e].addEventListener("click",b)};document.querySelector(".add-list").addEventListener("click",(()=>{if(null===document.getElementById("list-title")){const e=document.querySelector(".sidebar"),t=document.createElement("div");t.classList.add("list-container"),t.innerHTML='<input class="list-input" id="list-title" type="text"><div class="list-container-btns"><div class="list-add button">Add</div><div class="list-cancel button">Cancel</div></div>',e.append(t),document.querySelector(".list-cancel").addEventListener("click",f),document.querySelector(".list-add").addEventListener("click",b),document.querySelector(".list-add").addEventListener("click",y)}else document.querySelector(".list-input").focus()}));const f=()=>{document.querySelector(".list-container").remove()}})();