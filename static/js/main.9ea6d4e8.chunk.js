(this.webpackJsonpusermanagementsystem=this.webpackJsonpusermanagementsystem||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(9),l=s.n(r),i=(s(14),s(2)),c=s(3),d=s(6),o=s(5),u=s(8),m=(s(15),s(0));function h(e){var t=e.username,s=e.email,a=e.handleUserDelete,n=e.id;return Object(m.jsxs)("div",{className:"user-card",children:[Object(m.jsx)("div",{className:"btn-div",children:Object(m.jsx)("button",{className:"delete-btn",onClick:function(){return a(n)},children:Object(m.jsx)("i",{className:"fas fa-trash-alt"})})}),Object(m.jsx)("div",{className:"avatar",children:Object(m.jsx)("img",{src:"https://avatars.dicebear.com/api/human/".concat(t,".svg"),alt:""})}),Object(m.jsx)("h2",{children:t}),Object(m.jsx)("p",{children:s})]})}s(17);var j=function(e){var t=e.allusers,s=e.handleUserDelete;return Object(m.jsx)("div",{className:"users-list",children:t.map((function(e){return Object(m.jsx)(h,Object(u.a)(Object(u.a)({},e),{},{handleUserDelete:s}),e.id)}))})},b=s(4),p=s(23),f=(s(18),function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,n=t.value;a.setState(Object(b.a)({},s,n))},a.handleSubmit=function(e){e.preventDefault(),a.props.handleUserAdd({email:a.state.email,fist_name:a.state.firstname,last_name:a.state.lastname,pwd:a.state.password,username:a.state.username,id:Object(p.a)()}),a.setState({firstname:"",lastname:"",username:"",email:"",password:""}),a.props.handleAddUserModal(!1)},a.state={firstname:"",lastname:"",username:"",email:"",password:"",id:""},a.textInput=n.a.createRef(),a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"form-adduser",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"form-header",children:[Object(m.jsx)("h2",{children:"Add user"}),Object(m.jsx)("button",{className:"close-modal",onClick:function(){return e.props.handleAddUserModal(!1)},children:Object(m.jsx)("i",{className:"fas fa-window-close"})})]}),Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(m.jsx)("input",{id:"firstname",name:"firstname",type:"text",value:this.state.firstname,onChange:this.handleChange,placeholder:"Enter your first name",ref:this.textInput,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"lastname",children:"Last Name:"}),Object(m.jsx)("input",{id:"lastname",name:"lastname",type:"text",value:this.state.lastname,onChange:this.handleChange,placeholder:"Enter your last name",required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(m.jsx)("input",{id:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleChange,placeholder:"Enter Username",required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter Email",required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{id:"password",name:"password",type:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})]}),Object(m.jsxs)("div",{className:"submit-cancel-btns",children:[Object(m.jsx)("button",{type:"button",className:"cancel-btn",onClick:function(){return e.props.handleAddUserModal(!1)},children:"Cancel"}),Object(m.jsx)("button",{type:"submit",className:"add-btn",children:"Add"})]})]})]})})}}]),s}(n.a.Component));s(19);var O=function(e){var t=e.message;return Object(m.jsx)("div",{className:"info-popup",children:Object(m.jsx)("p",{children:t})})},v=(s(20),function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).handleUserDelete=function(e){var t=a.state.allusers.filter((function(t){return t.id!==e}));a.setState((function(){return{allusers:t,popupinfo:{message:"user deleted successfully",visible:!0}}}),(function(){a.saveStateTolocalStorage()})),a.handleInfoTimeout()},a.handleUserAdd=function(e){var t=a.state.allusers;t.findIndex((function(t){return t.username===e.username||t.email===e.email}))<0?(t.push(e),a.setState((function(){return{allusers:t,popupinfo:{message:"user added successfully",visible:!0}}}),(function(){return a.saveStateTolocalStorage()}))):a.setState({popupinfo:{message:"username or email already exists",visible:!0}}),a.handleInfoTimeout(),a.saveStateTolocalStorage()},a.handleAddUserModal=function(e){a.setState({displayAddUserModal:e})},a.handleInfoTimeout=function(){setTimeout((function(){a.setState({popupinfo:{message:"",visible:!1}})}),4e3)},a.saveStateTolocalStorage=function(){var e=JSON.stringify(a.state.allusers);localStorage.setItem("users",e)},a.state={allusers:[],displayAddUserModal:!1,popupinfo:{message:"",visible:!1},nousermessage:""},a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("users");e&&this.setState({allusers:JSON.parse(e)})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("h1",{children:"User Management System"}),Object(m.jsx)("div",{className:"add-new-user",children:Object(m.jsx)("button",{className:"add-new-user-btn",onClick:function(){return e.handleAddUserModal(!0)},children:Object(m.jsx)("h3",{children:"AddNewUser"})})}),this.state.allusers.length?Object(m.jsx)(j,{handleUserDelete:this.handleUserDelete,allusers:this.state.allusers}):Object(m.jsx)("div",{children:Object(m.jsx)("p",{style:{textAlign:"center",padding:"10px"},children:"No users available, add new users by using above button"})}),this.state.displayAddUserModal?Object(m.jsx)(f,{handleUserAdd:this.handleUserAdd,handleAddUserModal:this.handleAddUserModal}):null,this.state.popupinfo.visible?Object(m.jsx)(O,{message:this.state.popupinfo.message}):null]})}}]),s}(n.a.Component)),x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;s(e),a(e),n(e),r(e),l(e)}))};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()}],[[21,1,2]]]);
//# sourceMappingURL=main.9ea6d4e8.chunk.js.map