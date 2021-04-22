(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(9),s=a.n(o),d=a(4),i=a(12),r=(a(21),a(14)),l=(a(22),a(3));var u=function(e){var t=e.todoText,a=e.terminada,c=new Date(e.fecha),n=e.id;return Object(l.jsxs)("div",{className:"elementoLista",children:[Object(l.jsxs)("div",{className:"checkbox-text",children:[Object(l.jsx)("input",{checked:a,type:"checkbox",className:"checkbox",onChange:function(){return function(t){var a=e.getTodo(t);e.updateTodo(t,Object(r.a)(Object(r.a)({},a),{},{terminada:!a.terminada}))}(n)}}),Object(l.jsxs)("div",{className:"tarea-fecha",children:[Object(l.jsx)("h3",{className:"".concat(a&&"tarea-marcada"),itemID:"t".concat(n),children:t}),Object(l.jsx)("h6",{className:"".concat(a&&"tarea-marcada"),children:"".concat(c.getDate(),"/").concat(c.getMonth()+1,"/").concat(c.getFullYear())})]})]}),Object(l.jsxs)("div",{className:"actions-elemento-lista",children:[Object(l.jsx)("i",{id:"edit",className:"fas fa-pencil-alt",onClick:function(){return function(t){return e.openModal(t)}(n)}}),Object(l.jsx)("i",{id:"delete",className:"fas fa-trash-alt",onClick:function(){return function(t){return e.deleteTodo(t)}(n)}})]})]})};var j=function(e){var t=e.todos,a=Object(c.useState)("todas"),n=Object(d.a)(a,2),o=n[0],s=n[1],i=Object(c.useRef)(0);return Object(c.useEffect)((function(){i.current=0})),Object(l.jsxs)("div",{className:"lista",children:[Object(l.jsx)("div",{className:"mostrar-tareas",children:Object(l.jsxs)("select",{onChange:function(e){var t=e.target,a=t.options[t.selectedIndex].value;s(a)},children:[Object(l.jsx)("option",{value:"todas",defaultValue:"selected",children:"Todas"}),Object(l.jsx)("option",{value:"completadas",children:"Completadas"}),Object(l.jsx)("option",{value:"incompletas",children:"No Completadas"})]})}),0===t.size?Object(l.jsx)("p",{id:"vacio",children:"No tienes nada pendiente :)"}):t.map((function(t,a){return"completadas"===o&&!0===t.terminada||"incompletas"===o&&!1===t.terminada||"todas"===o?(i.current=i.current+1,Object(l.jsx)(u,{todoText:t.todoText,terminada:t.terminada,fecha:t.fecha,id:a,deleteTodo:e.deleteTodo,updateTodo:e.updateTodo,getTodo:e.getTodo,openModal:e.openModal},a)):null})),0!==t.size&&0===i.current&&"completadas"===o&&Object(l.jsx)("p",{id:"vacio",children:"No tienes tareas completadas :("}),0!==t.size&&0===i.current&&"incompletas"===o&&Object(l.jsx)("p",{id:"vacio",children:"No tienes tareas incompletadas :)"})]})},f=a(16),b=a.n(f),O=(a(39),function(e){return Object(l.jsx)(b.a,{onChange:e.onChangeDatePicker,value:e.datePickerValue})}),h=(a(40),function(e){var t=new Date,a=Object(c.useState)(t),n=Object(d.a)(a,2),o=n[0],s=n[1],i=Object(c.useRef)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var a=t.target.firstChild.value;a&&a.length>0&&e.addTodo({todoText:a,terminada:!1,fecha:o}),i.current.value=""},children:[Object(l.jsx)("input",{ref:i,className:"tarea",type:"text",id:"texto-tarea",placeholder:"Tarea",autoComplete:"off"}),Object(l.jsx)("div",{className:"date-picker",onBlur:function(){null===o&&s(t)},children:Object(l.jsx)(O,{datePickerValue:o,onChangeDatePicker:s})}),Object(l.jsx)("input",{type:"submit",value:"+",id:"agregar"})]})})}),m=(a(41),a(42),function(e){var t=new Date(e.todo.fecha),a=e.idTodo,n=Object(c.useState)(e.todo.todoText),o=Object(d.a)(n,2),s=o[0],i=o[1],r=Object(c.useState)(t),u=Object(d.a)(r,2),j=u[0],f=u[1],b=Object(c.useRef)();return Object(c.useEffect)((function(){b.current.focus()}),[]),Object(l.jsxs)("div",{className:"modal-container",children:[Object(l.jsx)("div",{className:"modal-header",children:Object(l.jsx)("h3",{children:"EDITING TODO"})}),Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("input",{className:"tarea",ref:b,type:"text",defaultValue:e.todo.todoText,onChange:function(){return i(b.current.value)}}),Object(l.jsx)("div",{className:"date-picker",onBlur:function(){null===j&&f(t)},children:Object(l.jsx)(O,{datePickerValue:j,onChangeDatePicker:f})})]}),Object(l.jsxs)("div",{className:"modal-footer",children:[Object(l.jsx)("button",{id:"cancelUpdate",onClick:function(){e.closeModal()},children:"Cancel"}),Object(l.jsx)("button",{id:"confirmUpdate",onClick:function(){""!==s&&null!==j&&-1!==a&&(e.updateTodo(a,{todoText:s,terminada:!1,fecha:j}),e.closeModal())},children:"Confirm"})]})]})}),x=function(){var e=Object(c.useState)(i.a),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(!1),s=Object(d.a)(o,2),r=s[0],u=s[1],f=Object(c.useState)({}),b=Object(d.a)(f,2),O=b[0],x=b[1],p=Object(c.useState)(-1),v=Object(d.a)(p,2),T=v[0],g=v[1],N=function(e){return a.get(e)},k=function(e,t){var c=S(a.set(e,t));n(c),C(c)},C=function(e){localStorage.setItem("todos",JSON.stringify(e))},S=function(e){return e.sort((function(e,t){var a=new Date(e.fecha),c=new Date(t.fecha);return a<c?-1:a>c?1:0}))};return Object(c.useEffect)((function(){var e=localStorage.getItem("todos");if(e&&e.length>0){var t=JSON.parse(e),a=Object(i.a)();t.forEach((function(e){a=a.push(e)})),n(S(a))}}),[]),Object(l.jsx)("div",{className:"contenedor",children:r?Object(l.jsx)(m,{closeModal:function(){u(!1)},todo:O,idTodo:T,updateTodo:k}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{addTodo:function(e){var t=S(a.push(e));n(t),C(t)}}),Object(l.jsx)(j,{todos:a,deleteTodo:function(e){var t=a.delete(e);n(t),C(t)},updateTodo:k,getTodo:N,openModal:function(e){g(e),u(!0),x(N(e))}})]})})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e7c814cb.chunk.js.map