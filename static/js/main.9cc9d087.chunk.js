(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{27:function(e,i,t){},33:function(e,i,t){"use strict";t.r(i);var a=t(1),u=t(0),s=t.n(u),n=t(18),o=t.n(n),r=(t(27),t(8)),c=t(2),l=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper purple darken-2 px1",children:[Object(a.jsx)("a",{href:"/",className:"brand-logo",children:"React + Typescript"}),Object(a.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/about",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})})},m=t(16),d=t(20),p=t(21),b=function(e){var i=Object(u.useRef)(null);return Object(a.jsxs)("div",{className:"input-field mt2",children:[Object(a.jsx)("input",{ref:i,type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430",onKeyPress:function(t){"Enter"===t.key&&(e.onAdd(i.current.value),i.current.value="")}}),Object(a.jsx)("label",{htmlFor:"title",className:"active",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"})]})},q=function(e){var i=e.todos,t=e.onRemove,u=e.onToggle;if(0===i.length)return Object(a.jsx)("p",{className:"center",children:"\u041f\u043e\u043a\u0430 \u0434\u0435\u043b \u043d\u0435\u0442!"});return Object(a.jsx)("ul",{children:i.map((function(e){var i=["todo"];return e.completed&&i.push("completed"),Object(a.jsx)("li",{className:i.join(" "),children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.completed,onChange:u.bind(null,e.id)}),Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("i",{className:"material-icons red-text",onClick:function(i){return function(e,i){e.preventDefault(),t(i)}(i,e.id)},children:"delete"})]})},e.id)}))})},f=function(){var e=Object(u.useState)([]),i=Object(p.a)(e,2),t=i[0],s=i[1];Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");s(e)}),[]),Object(u.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(t))}),[t]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{onAdd:function(e){var i={title:e,id:Date.now(),completed:!1};s((function(e){return[i].concat(Object(d.a)(e))}))}}),Object(a.jsx)(q,{todos:t,onToggle:function(e){s((function(i){return i.map((function(i){return i.id===e?Object(m.a)(Object(m.a)({},i),{},{completed:!i.completed}):i}))}))},onRemove:function(e){confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442?")&&s((function(i){return i.filter((function(i){return i.id!==e}))}))}})]})},j=function(){var e=Object(c.f)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem facere illo incidunt inventore iste quas. Amet animi aperiam dolor, exercitationem expedita libero nobis quam quas quidem quod ullam.Assumenda corporis libero natus nulla similique. Commodi consequatur ducimus facilis laborum modi quae quibusdam reiciendis repudiandae sed sunt! Architecto ex facilis magnam, nobis nostrum officia perferendis quibusdam sunt voluptas voluptatem.Aliquam at commodi culpa cum deserunt dolores, eaque enim error id ipsum itaque, iure laudantium magnam minima neque nisi officia pariatur quasi quibusdam quos rem sed totam velit voluptate voluptatem?Assumenda at culpa dolorum expedita iure non, odio, odit optio provident rerum voluptatem voluptatibus. Asperiores consequatur est fugiat nulla. At commodi doloribus enim magni molestias nulla omnis reiciendis totam ullam.Commodi distinctio doloremque et maiores omnis ut. Alias aliquam aperiam, aspernatur beatae dolores, ex itaque nulla perferendis quaerat quas qui ratione sequi tempore. Aperiam delectus eos reiciendis repellendus sint tempore.Ab ad aspernatur at atque commodi dolorem fuga, obcaecati omnis voluptas. Beatae corporis dolores dolorum, et facilis fuga illo minima non nostrum quibusdam, quisquam quo ratione recusandae similique sit vitae.Animi blanditiis quisquam quos? Alias beatae dolores error ex itaque nam perferendis placeat qui temporibus voluptas. A ad beatae deleniti in necessitatibus nesciunt officia quasi. Eaque fugiat nulla sapiente vero.Consectetur dolores dolorum ducimus harum impedit ipsa iste iusto, magnam nam necessitatibus possimus, provident quis rerum vel voluptates! Alias animi dignissimos eveniet modi nobis perspiciatis temporibus totam! Deserunt, eius, minus.Accusamus aliquam aut culpa eum ex exercitationem optio quis, rerum sequi voluptate? Aliquam amet, at atque commodi esse explicabo in ipsa iste, nam quas quidem rerum soluta vel veniam voluptatibus?Aut dignissimos exercitationem, facilis fugit id itaque magni nesciunt nihil nostrum, numquam officia perferendis ut, voluptatem. Aliquid amet dicta, dignissimos dolorum eligendi esse libero nostrum quaerat, quis velit, voluptas voluptate.Alias animi culpa cupiditate ea eius ipsum iure minus modi nemo quaerat quidem recusandae sit, tenetur. Aspernatur commodi cupiditate debitis, expedita labore maiores nulla pariatur provident tempora tenetur voluptas voluptate.Dicta, eaque illum nihil numquam rem reprehenderit veniam? In nam officia optio placeat unde. Cupiditate exercitationem minus odio perferendis quae quasi repellendus veritatis. Adipisci animi beatae harum ipsam possimus sint.Ab aliquam, atque dolore facere incidunt iste laborum molestias natus praesentium quia repudiandae saepe soluta sunt totam voluptatibus! Ad blanditiis consequatur cupiditate explicabo fugit nisi, officiis placeat quidem recusandae suscipit.Ad aliquid asperiores assumenda at consectetur dolorem dolores dolorum earum eligendi expedita, ipsa iste laboriosam laborum molestiae nihil nulla porro quae quasi rem repellat saepe sed sequi similique tenetur voluptates!Atque blanditiis quasi rem ullam velit. Accusantium ad amet asperiores cupiditate doloremque dolores ducimus facere id magnam minus nesciunt quasi qui quidem repellat repellendus sapiente sint, totam ut vitae voluptatibus.Cum dicta et molestias nesciunt quas? Ad animi blanditiis dignissimos expedita fuga harum inventore labore libero maiores nam nesciunt obcaecati quisquam, ratione soluta, suscipit tempore voluptatibus. Fugit iusto quas saepe!Atque delectus dolor dolores, doloribus enim eveniet, expedita, fuga fugit impedit inventore ipsa iure labore magnam magni minima mollitia nisi officia porro praesentium ratione repellendus suscipit ut? Molestias, necessitatibus, voluptas.Accusamus aliquid, architecto consectetur consequatur culpa cum cupiditate doloribus eaque error et ex excepturi illum inventore mollitia necessitatibus perferendis qui reiciendis sit sunt vel voluptate voluptatibus voluptatum? Consequuntur fugit, voluptatibus?A aliquam cumque cupiditate delectus doloribus expedita molestias nostrum, officiis perspiciatis quia quo sit temporibus velit? Alias, autem culpa, cupiditate dolore eligendi eos explicabo iusto maiores maxime minima perspiciatis provident!Adipisci commodi consectetur debitis et ex illum ipsa modi officia repellendus sed. Ab accusantium aliquid amet facere facilis illum iure iusto maiores neque numquam perferendis ratione recusandae, sit veritatis voluptates."}),Object(a.jsx)("button",{className:"btn",onClick:function(){e.push("/")},children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"})]})},v=function(){return Object(a.jsxs)(r.a,{children:[Object(a.jsx)(l,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(c.c,{children:[Object(a.jsx)(c.a,{component:f,path:"/",exact:!0}),Object(a.jsx)(c.a,{component:j,path:"/about"})]})})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(i){var t=i.getCLS,a=i.getFID,u=i.getFCP,s=i.getLCP,n=i.getTTFB;t(e),a(e),u(e),s(e),n(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),x()}},[[33,1,2]]]);
//# sourceMappingURL=main.9cc9d087.chunk.js.map