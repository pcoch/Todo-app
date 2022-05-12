(() => {
    "use strict";
    const e = () => {
            const e = document.getElementById("inbox-counter"),
                t = document.getElementById("today-counter"),
                d = document.getElementById("scheduled-counter"),
                n = document.getElementById("all-counter");
            let i = I.filter((function (e) {
                return "Inbox" == e.list
            }));
            e.innerHTML = i.length;
            let l = 6e4 * (new Date).getTimezoneOffset(),
                c = new Date(Date.now() - l).toISOString().split("T")[0],
                o = I.filter((function (e) {
                    return e.dueDate == c
                }));
            t.innerHTML = o.length;
            let s = I.filter((function (e) {
                return e.dueDate > c
            }));
            d.innerHTML = s.length;
            let a = I;
            n.innerHTML = a.length
        },
        t = t => {
            document.getElementById(`${t.target.id}`).remove(), e()
        },
        d = e => {
            if (e.target.checked) {
                let t = I.find((t => t.id == e.target.id));
                t.complete = !0, e.target.nextElementSibling.classList.add("checked"), console.log(t), b()
            }
            if (!e.target.checked) {
                let t = I.find((t => t.id == e.target.id));
                t.complete = !1, console.log(t), e.target.nextElementSibling.classList.remove("checked"), b()
            }
        },
        n = document.getElementById("inbox"),
        i = document.getElementById("today"),
        l = document.getElementById("scheduled"),
        c = document.getElementById("all"),
        o = document.getElementById("todo-list"),
        s = document.getElementById("todo-btn-main"),
        a = document.getElementById("main-title"),
        r = document.querySelector(".sidebar");
    window.onload = function () {
        n.addEventListener("click", h), i.addEventListener("click", v), l.addEventListener("click", g), c.addEventListener("click", p)
    };
    const m = () => {
            for (; o.firstChild;) o.removeChild(o.lastChild)
        },
        u = () => {
            const e = document.querySelectorAll(".removeToDo");
            for (let d = 0; d < e.length; d++) e[d].addEventListener("click", k), e[d].addEventListener("click", t)
        },
        h = e => {
            a.innerHTML = "Inbox", s.classList.remove("hide"), m(), I.filter((function (e) {
                return "Inbox" == e.list
            })).forEach((e => {
                const t = `<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input id="${e.id}" type="checkbox" class="checkbox__input" ${0==e.complete?"":"checked"}><span class="checkbox__inner ${0==e.complete?"":"checked"}"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,
                    d = document.createElement("div");
                d.innerHTML = t, document.getElementById("todo-list").appendChild(d.firstChild)
            }));
            const t = document.querySelectorAll(".checkbox");
            for (let e = 0; e < t.length; e++) t[e].addEventListener("change", d);
            window.matchMedia("(max-width: 720px)").matches && r.classList.remove("show"), u()
        },
        v = e => {
            a.innerHTML = "Today", s.classList.add("hide"), m();
            let t = 6e4 * (new Date).getTimezoneOffset(),
                n = new Date(Date.now() - t).toISOString().split("T")[0];
            I.filter((function (e) {
                return e.dueDate == n
            })).forEach((e => {
                const t = `<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input id="${e.id}" type="checkbox" class="checkbox__input" ${0==e.complete?"":"checked"}><span class="checkbox__inner ${0==e.complete?"":"checked"}"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,
                    d = document.createElement("div");
                d.innerHTML = t, document.getElementById("todo-list").appendChild(d.firstChild)
            }));
            const i = document.querySelectorAll(".checkbox");
            for (let e = 0; e < i.length; e++) i[e].addEventListener("change", d);
            window.matchMedia("(max-width: 720px)").matches && r.classList.remove("show"), u()
        },
        g = e => {
            a.innerHTML = "Scheduled", s.classList.add("hide"), m();
            let t = 6e4 * (new Date).getTimezoneOffset(),
                n = new Date(Date.now() - t).toISOString().split("T")[0];
            I.filter((function (e) {
                return e.dueDate > n
            })).forEach((e => {
                const t = `<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input id="${e.id}" type="checkbox" value="complete" class="checkbox__input" ${0==e.complete?"":"checked"}><span class="checkbox__inner ${0==e.complete?"":"checked"}"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,
                    d = document.createElement("div");
                d.innerHTML = t, document.getElementById("todo-list").appendChild(d.firstChild)
            }));
            const i = document.querySelectorAll(".checkbox");
            for (let e = 0; e < i.length; e++) i[e].addEventListener("change", d);
            window.matchMedia("(max-width: 720px)").matches && r.classList.remove("show"), u()
        },
        p = e => {
            a.innerHTML = "All", s.classList.add("hide"), m(), I.forEach((e => {
                const t = `<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input id="${e.id}" type="checkbox" class="checkbox__input" ${0==e.complete?"":"checked"}><span class="checkbox__inner ${0==e.complete?"":"checked"}"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,
                    d = document.createElement("div");
                d.innerHTML = t, document.getElementById("todo-list").appendChild(d.firstChild)
            }));
            const t = document.querySelectorAll(".checkbox");
            for (let e = 0; e < t.length; e++) t[e].addEventListener("change", d);
            window.matchMedia("(max-width: 720px)").matches && r.classList.remove("show"), u()
        },
        L = e => {
            a.innerHTML = e.target.id, s.classList.remove("hide"), m(), I.filter((function (t) {
                return t.list == e.target.id
            })).forEach((e => {
                const t = `<div class="toDoContainer fadeIn" id="${e.id}"><div class="todo-complete"><label class="checkbox"><input id="${e.id}" type="checkbox" class="checkbox__input" ${0==e.complete?"":"checked"}><span class="checkbox__inner ${0==e.complete?"":"checked"}"></span></label></div><div class="todo-title">${e.title}</div><div class="todo-date">${""==e.dueDate?"No Date":e.dueDate}</div><div class="removeToDo" id="${e.id}"><img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id="${e.id}" alt="delete"></div></div>`,
                    d = document.createElement("div");
                d.innerHTML = t, document.getElementById("todo-list").appendChild(d.firstChild)
            }));
            const t = document.querySelectorAll(".checkbox");
            for (let e = 0; e < t.length; e++) t[e].addEventListener("change", d);
            window.matchMedia("(max-width: 720px)").matches && r.classList.remove("show"), u()
        },
        E = t => {
            t.stopPropagation();
            let d = f.findIndex((e => e == t.target.id));
            f.splice(d, 1), document.getElementById(`${t.target.id}`).remove(), I = I.filter((e => e.list != t.target.id)), console.log(I), console.log(f), document.getElementById("main-title").innerText = "Inbox", e(), h(), b()
        };
    let f = [];
    const y = () => {
            let e = document.getElementById("list-title").value;
            f.push(e), console.log(f);
            const t = document.querySelector(".lists"),
                d = document.createElement("div");
            d.innerHTML = `<div class='list-item fadeIn' id='${e}'><img src="/assets/pushpin_1f4cc.png"><p>${e}</p><img id='${e}' class="remove-list"src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg"></div>`, d.classList.add("list-section"), t.append(d), document.getElementById("todo-btn-main").classList.remove("hide"), document.getElementById("main-title").innerHTML = e, document.querySelector(".list-container").remove();
            const n = document.querySelectorAll(".list-section");
            for (let e = 0; e < n.length; e++) n[e].addEventListener("click", L);
            const i = document.querySelectorAll(".remove-list");
            for (let e = 0; e < i.length; e++) i[e].addEventListener("click", E);
            b()
        },
        b = () => {
            localStorage.setItem("storedToDoList", JSON.stringify(I)), localStorage.setItem("storedLists", JSON.stringify(f))
        };
    window.addEventListener("load", (() => {
        I = JSON.parse(localStorage.getItem("storedToDoList")), null == I && (I = []), console.log(I), f = JSON.parse(localStorage.getItem("storedLists")), null == f && (f = []), h(), e(), (() => {
            const e = document.querySelector(".hamburger"),
                t = document.querySelector(".sidebar");
            e.addEventListener("click", (() => {
                t.classList.toggle("show")
            })), window.matchMedia("(max-width: 720px)").addEventListener("change", (() => {
                window.matchMedia("(max-width: 720px)").matches && t.classList.remove("show")
            }))
        })();
        for (let e = 0; e < f.length; e++) {
            const t = `<div class='list-item' id='${f[e]}'><img src="/assets/pushpin_1f4cc.png"><p>${f[e]}</p><img id='${f[e]}' class="remove-list"src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg"></div>`,
                d = document.createElement("div");
            d.innerHTML = t, document.querySelector(".list-section").appendChild(d.firstChild);
            const n = document.querySelectorAll(".list-section");
            for (let e = 0; e < n.length; e++) n[e].addEventListener("click", L);
            const i = document.querySelectorAll(".remove-list");
            for (let e = 0; e < i.length; e++) i[e].addEventListener("click", E)
        }
        const t = document.querySelectorAll(".checkbox");
        for (let e = 0; e < t.length; e++) t[e].addEventListener("change", d)
    }));
    const k = e => {
        const t = I.findIndex((t => t.id == e.target.id));
        I.splice(t, 1), console.log(I), b()
    };
    let I = [];
    const _ = () => {
            if ("" !== document.getElementById("title").value) {
                let n, i = document.getElementById("title").value,
                    l = document.getElementById("dueDate").value,
                    c = Date.now(),
                    o = !1;
                n = document.getElementById("main-title").innerText;
                let s = ((e, t, d, n, i) => ({
                    title: e,
                    dueDate: t,
                    id: d,
                    complete: n,
                    list: i
                }))(i, l, c, o, n);
                I.push(s), (() => {
                    if ("" !== document.getElementById("title").value) {
                        document.getElementById("todo_form").remove();
                        const e = document.getElementById("todo-list"),
                            d = document.createElement("div"),
                            n = document.createElement("div"),
                            i = document.createElement("div"),
                            l = document.createElement("div"),
                            c = document.createElement("div");
                        e.appendChild(d), d.classList.add("toDoContainer"), d.classList.add("fadeIn"), n.classList.add("todo-title"), i.classList.add("todo-date"), l.classList.add("todo-remove"), c.classList.add("todo-complete"), d.setAttribute("id", `${I[I.length-1].id}`), d.append(c, n, i, l), n.innerHTML = I[I.length - 1].title, c.innerHTML = `<label class='checkbox'><input id='${I[I.length-1].id}' type='checkbox' class='checkbox__input'/><span class='checkbox__inner'></span></label>`, l.innerHTML = `<img src="/assets/close_FILL0_wght700_GRAD0_opsz48.svg" class="delete" id=${I[I.length-1].id} alt="delete">`, l.setAttribute("class", "removeToDo"), l.setAttribute("id", `${I[I.length-1].id}`);
                        const o = document.querySelectorAll(".removeToDo");
                        for (let e = 0; e < o.length; e++) o[e].addEventListener("click", k), o[e].addEventListener("click", t);
                        Date.parse(I[I.length - 1].dueDate) ? NaN !== I[I.length - 1].dueDate && (i.innerHTML = I[I.length - 1].dueDate) : i.innerHTML = "No Date"
                    }
                    const e = document.querySelectorAll(".checkbox");
                    for (let t = 0; t < e.length; t++) e[t].addEventListener("change", d)
                })(), e(), b()
            }
        },
        D = () => {
            if (null === document.getElementById("todo_form")) {
                const e = document.getElementById("todo-list"),
                    t = document.createElement("div");
                t.setAttribute("id", "todo_form"), t.classList.add("fadeIn");
                const d = "<input id='title' placeholder='Add a task' type='text' required><input id='dueDate' type='date' required><button class='submit' id='submit '>Add Task</button>";
                t.innerHTML = d, e.append(t), document.querySelector(".submit").onclick = _, document.getElementById("title").focus()
            } else document.getElementById("title").focus()
        };
    document.getElementById("add_todo").addEventListener("click", D), document.getElementById("todo-btn-main").addEventListener("click", D), document.querySelector(".add-list").addEventListener("click", (() => {
        if (null === document.getElementById("list-title")) {
            const e = document.querySelector(".sidebar"),
                t = document.createElement("div");
            t.classList.add("list-container"), t.classList.add("fadeIn"), t.innerHTML = '<input class="list-input" id="list-title" type="text"><div class="list-container-btns"><div class="list-add button">Add</div><div class="list-cancel button">Cancel</div></div>', e.append(t), document.querySelector(".list-cancel").addEventListener("click", x), document.querySelector(".list-add").addEventListener("click", L), document.querySelector(".list-add").addEventListener("click", y)
        } else document.querySelector(".list-input").focus()
    }));
    const x = () => {
        document.querySelector(".list-container").remove()
    }
})();