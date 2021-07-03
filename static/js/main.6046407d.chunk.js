(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{61:function(e,t,a){e.exports=a(72)},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n,i=a(0),l=a.n(i),r=a(8),o=a.n(r),c=(a(66),a(67),a(24)),s=a(104),u=a(113),d=a(103),O=l.a.memo((function(e){console.log("AddItemForm is calling");var t=Object(i.useState)(""),a=Object(c.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(null),O=Object(c.a)(o,2),b=O[0],m=O[1],f=function(){n.trim()?(e.addItem(n),r("")):m("Title is required")};return l.a.createElement("div",null,l.a.createElement(u.a,{variant:"outlined",value:n,onChange:function(e){return r(e.currentTarget.value)},onKeyPress:function(e){m(null),"Enter"===e.key&&f()},label:"title",error:!!b,helperText:b}),l.a.createElement(d.a,{onClick:f},l.a.createElement(s.a,null)))})),b=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(e.title),s=Object(c.a)(o,2),d=s[0],O=s[1],b=Object(i.useState)(null),m=Object(c.a)(b,2),f=m[0],T=m[1];return n?l.a.createElement(u.a,{color:"primary",variant:"standard",value:d,autoFocus:!0,onChange:function(e){return O(e.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(d?(r(!1),e.changeTitle(d)):T("Title is required"))},onBlur:function(){d?(r(!1),e.changeTitle(d)):T("Title is required")},error:!!f,helperText:f}):l.a.createElement("span",{onDoubleClick:function(){return r(!0)}},e.title)},m=a(114),f=a(106),T=a(105),E=l.a.memo((function(e){console.log("Todolist is calling");var t=Object(i.useCallback)((function(t){e.addTask(t,e.todolistID)}),[e.addTask,e.todolistID]),a=Object(i.useCallback)((function(){return e.setFilterValue("all",e.todolistID)}),[e.setFilterValue,e.todolistID]),n=Object(i.useCallback)((function(){return e.setFilterValue("active",e.todolistID)}),[e.setFilterValue,e.todolistID]),r=Object(i.useCallback)((function(){return e.setFilterValue("completed",e.todolistID)}),[e.setFilterValue,e.todolistID]),o=Object(i.useCallback)((function(t){e.changeTodolistTitle(t,e.todolistID)}),[e.todolistID,e.changeTodolistTitle]),c=e.tasks;return"active"===e.filter&&(c=e.tasks.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(c=e.tasks.filter((function(e){return e.isDone}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement(b,{title:e.title,changeTitle:o}),l.a.createElement(d.a,{onClick:function(){e.removeTodolist(e.todolistID)}},l.a.createElement(T.a,null))),l.a.createElement(O,{addItem:t}),l.a.createElement("ul",{style:{listStyle:"none",padding:0}},c.map((function(t){return l.a.createElement("li",{key:t.id,className:t.isDone?"isDone":""},l.a.createElement(m.a,{color:"primary",checked:t.isDone,onChange:function(a){e.changeStatus(t.id,a.currentTarget.checked,e.todolistID)}}),l.a.createElement(b,{title:t.title,changeTitle:function(a){e.changeTaskTitle(t.id,a,e.todolistID)}}),l.a.createElement(d.a,{onClick:function(){return e.removeTask(t.id,e.todolistID)}},l.a.createElement(T.a,null)))}))),l.a.createElement("div",null,l.a.createElement(f.a,{style:{marginRight:"5px"},color:"primary",variant:"all"===e.filter?"contained":"outlined",onClick:a},"All"),l.a.createElement(f.a,{style:{marginRight:"5px"},color:"primary",variant:"active"===e.filter?"contained":"outlined",onClick:n},"Active"),l.a.createElement(f.a,{style:{marginRight:"5px"},color:"primary",variant:"completed"===e.filter?"contained":"outlined",onClick:r},"Completed")))})),j=a(107),v=a(108),I=a(110),k=a(111),D=a(112),p=a(73),g=a(109),h=a(11),y=a(37),C=a(115),S=Object(C.a)(),A=Object(C.a)(),L=[{id:S,title:"What to learn",filter:"all"},{id:A,title:"What to buy",filter:"all"}],w=a(23),V=(n={},Object(w.a)(n,S,[{id:Object(C.a)(),title:"JS",isDone:!0},{id:Object(C.a)(),title:"CSS",isDone:!0},{id:Object(C.a)(),title:"React",isDone:!1}]),Object(w.a)(n,A,[{id:Object(C.a)(),title:"Milk",isDone:!0},{id:Object(C.a)(),title:"Bread",isDone:!0},{id:Object(C.a)(),title:"Beer",isDone:!1}]),n),F=a(27);var R=function(){console.log("App is calling");var e=Object(F.b)(),t=Object(F.c)((function(e){return e.todolists})),a=Object(F.c)((function(e){return e.tasks})),n=Object(i.useCallback)((function(t,a){var n={type:"REMOVE-TASK",tasksId:t,todolistId:a};e(n)}),[e]),r=Object(i.useCallback)((function(t,a){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistId:t}}(t,a);e(n)}),[e]),o=Object(i.useCallback)((function(t,a){var n=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:t,filter:e}}(t,a);e(n)}),[e]),c=Object(i.useCallback)((function(t,a){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:t,editTitle:e}}(t,a);e(n)}),[e]),s=Object(i.useCallback)((function(t,a,n){var i=function(e,t,a){return{type:"CHANGE-TASK-STATUS",taskId:e,isDone:t,todolistId:a}}(t,a,n);e(i)}),[e]),u=Object(i.useCallback)((function(t,a,n){var i=function(e,t,a){return{type:"CHANGE-TASK-TITLE",taskId:e,title:t,todolistId:a}}(t,a,n);e(i)}),[e]),b=Object(i.useCallback)((function(t){var a={type:"REMOVE-TODOLIST",id:t};e(a)}),[e]),m=Object(i.useCallback)((function(t){var a=function(e){return{type:"ADD-TODOLIST",title:e,todolistId:Object(C.a)()}}(t);e(a)}),[e]);return l.a.createElement("div",{className:"App"},l.a.createElement(j.a,{position:"static"},l.a.createElement(v.a,{style:{justifyContent:"space-between"}},l.a.createElement(d.a,{edge:"start",color:"inherit","aria-label":"menu"},l.a.createElement(g.a,null)),l.a.createElement(I.a,{variant:"h6"},"TodoLists"),l.a.createElement(f.a,{color:"inherit",variant:"outlined"},"Login"))),l.a.createElement(k.a,{fixed:!0},l.a.createElement(D.a,{container:!0,style:{padding:"20px"}},l.a.createElement(O,{addItem:m})),l.a.createElement(D.a,{container:!0,spacing:3},t.map((function(e){var t=a[e.id];return l.a.createElement(D.a,{item:!0,key:e.id},l.a.createElement(p.a,{elevation:2,style:{padding:"10px"}},l.a.createElement(E,{key:e.id,title:e.title,todolistID:e.id,tasks:t,removeTask:n,setFilterValue:o,addTask:r,changeStatus:s,filter:e.filter,removeTodolist:b,changeTaskTitle:u,changeTodolistTitle:c})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(42),N=Object(K.a)({todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":return[{id:t.todolistId,title:t.title,filter:"all"}].concat(Object(y.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{title:t.editTitle}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{filter:t.filter}):e}));default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(h.a)({},e);return a[t.todolistId]=a[t.todolistId].filter((function(e){return e.id!==t.tasksId})),a;case"ADD-TASK":var n={id:Object(C.a)(),title:t.title,isDone:!1};return Object(h.a)(Object(h.a)({},e),{},Object(w.a)({},t.todolistId,[n].concat(Object(y.a)(e[t.todolistId]))));case"CHANGE-TASK-STATUS":var i=Object(h.a)({},e),l=i[t.todolistId].map((function(e){return e.id===t.taskId?Object(h.a)(Object(h.a)({},e),{},{isDone:t.isDone}):e}));return Object(h.a)(Object(h.a)({},e),{},Object(w.a)({},t.todolistId,l));case"CHANGE-TASK-TITLE":var r=Object(h.a)({},e),o=r[t.todolistId],c=o.find((function(e){return e.id===t.taskId}));return c&&(c.title=t.title),r;case"ADD-TODOLIST":var s=Object(h.a)({},e);return s[t.todolistId]=[],s;case"REMOVE-TODOLIST":var u=Object(h.a)({},e);return delete u[t.id],u;default:return e}}}),x=Object(K.b)(N);window.store=x,o.a.render(l.a.createElement(F.a,{store:x},l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.6046407d.chunk.js.map