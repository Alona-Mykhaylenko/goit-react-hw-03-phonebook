(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(16),n(11)),i=n(3),l=n(4),u=n(5),b=n(7),d=n(6),m=(n(17),n(21)),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContactProp(t.state.name,t.state.number)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:j.a.formBox,children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,className:j.a.formInput})]})," ",Object(f.jsxs)("label",{className:j.a.label,children:["Number ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",className:j.a.submitButton,children:"Add contact"})]})})}}]),n}(a.Component),O=n(9),x=n.n(O),C=function(t){var e=t.filteredContactsProp,n=t.handleDeleteProp;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:x.a.li,children:[t.name,": ",t.number,Object(f.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},v=function(t){var e=t.filter,n=t.handleChange;return Object(f.jsxs)("label",{children:["Find contacts by name ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},g=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(m.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(m.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(m.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(m.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts"));else{var a={id:Object(m.a)(),name:e,number:n,filter:t.state.filter};t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts)),filter:""}}))}},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Component did mount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase().trim(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{addContactProp:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{handleChange:this.handleChange,filter:this.state.filter}),Object(f.jsx)(C,{filteredContactsProp:e,handleDeleteProp:this.handleDelete})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={formBox:"contactForm_formBox__DSI1k",submitButton:"contactForm_submitButton__4bcMr",label:"contactForm_label__1cLFZ"}},9:function(t,e,n){t.exports={button:"contactList_button__14pAW",li:"contactList_li__2OrWp"}}},[[19,1,2]]]);
//# sourceMappingURL=main.2a97adb6.chunk.js.map