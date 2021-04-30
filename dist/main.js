(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.d({},{l7:()=>M,q:()=>w,Wg:()=>T});var i,a,r,s,l,c=(i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],a=function(){function e(t){var o=t.targetModal,i=t.triggers,a=void 0===i?[]:i,r=t.onShow,s=void 0===r?function(){}:r,l=t.onClose,c=void 0===l?function(){}:l,d=t.openTrigger,u=void 0===d?"data-micromodal-trigger":d,m=t.closeTrigger,h=void 0===m?"data-micromodal-close":m,f=t.openClass,v=void 0===f?"is-open":f,g=t.disableScroll,p=void 0!==g&&g,y=t.disableFocus,b=void 0!==y&&y,E=t.awaitCloseAnimation,k=void 0!==E&&E,w=t.awaitOpenAnimation,C=void 0!==w&&w,L=t.debugMode,M=void 0!==L&&L;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(o),this.config={debugMode:M,disableScroll:p,openTrigger:u,closeTrigger:h,openClass:v,onShow:s,onClose:c,awaitCloseAnimation:k,awaitOpenAnimation:C,disableFocus:b},a.length>0&&this.registerTriggers.apply(this,n(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var o,a;return o=e,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];n.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var n=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",n,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var n=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(n),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(i);return Array.apply(void 0,n(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var n=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));n.length>0&&n[0].focus(),0===n.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&n===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&t(o.prototype,a),e}(),r=null,s=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},l=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var n in t)s(n);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),o=n(document.querySelectorAll("[".concat(t.openTrigger,"]"))),i=function(e,t){var n=[];return e.forEach((function(e){var o=e.attributes[t].value;void 0===n[o]&&(n[o]=[]),n[o].push(e)})),n}(o,t.openTrigger);if(!0!==t.debugMode||!1!==l(o,i))for(var s in i){var c=i[s];t.targetModal=s,t.triggers=n(c),r=new a(t)}},show:function(e,t){var n=t||{};n.targetModal=e,!0===n.debugMode&&!1===s(e)||(r&&r.removeEventListeners(),(r=new a(n)).showModal())},close:function(e){e?r.closeModalById(e):r.closeModal()}});window.MicroModal=c;const d=c;function u(e){const t=document.getElementById("project-view");for(document.getElementById("project-name").innerHTML=e.name;t.firstChild;)t.removeChild(t.firstChild);if(e.tasks)for(let n=0;n<e.tasks.length;n+=1){const o=document.createElement("li");o.id="todo-list",t.appendChild(o),o.innerHTML=e.tasks[n].name,o.addEventListener("click",(()=>{T(e.tasks[n])}))}!function(e){const t=document.getElementById("project-view"),n=document.createElement("button");t.appendChild(n),n.innerHTML="+ Add Task",n.id="task-button",n.addEventListener("click",(()=>{n.style.display="none";const o=document.createElement("input");o.id="task-input",t.appendChild(o);const i=document.createElement("button");i.id="add-task-button",t.appendChild(i),i.innerHTML="Add",i.addEventListener("click",(()=>{M(o.value,e),u(e)}))}))}(e)}function m(){const e=document.getElementById("projects-list");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<w.length;t+=1){const n=document.createElement("li");e.appendChild(n),n.innerHTML=w[t].name,n.addEventListener("click",(()=>{u(w[t])}))}}class h{constructor(e,t,n=[]){this.name=e,this.id=t,this.tasks=n}addTask(e){this.tasks.push(e)}}class f{constructor(e,t,n,o){this.name=e,this.id=t,this.comments=n,this.dueDate=o}}const v=document.getElementById("add-project"),g=document.getElementById("projects-main"),p=document.getElementById("modal-1-title"),y=document.getElementById("add-project-container"),b=document.getElementById("comments-input"),E=document.getElementById("modal-save-changes"),k=document.getElementById("due-date-input");v.addEventListener("click",(function(){v.style.display="none";const e=document.createElement("input");g.appendChild(e),e.id="add-project-input-box";const t=document.createElement("button"),n=document.createElement("button");t.innerHTML="Add",n.innerHTML="Cancel",t.id="add-project-button",n.id="cancel-project-button",y.appendChild(t),y.appendChild(n),t.addEventListener("click",(()=>{const t=e.value;e.value="",function(e){const t=new h(e,C);C+=1,w.push(t),localStorage.setItem("projects",JSON.stringify(w)),m(),u(t)}(t)})),n.addEventListener("click",(()=>{e.parentNode.removeChild(e),n.parentNode.removeChild(n),t.parentNode.removeChild(t),v.style.display="inline-block"}))}));const w=[];let C=3,L=0;if(null===localStorage.getItem("projects")){const e=new h("Personal",1);w.push(e);const t=new h("Work",2);w.push(t),localStorage.setItem("projects",JSON.stringify(w))}else{let e=localStorage.getItem("projects");e=JSON.parse(e);for(let t=0;t<e.length;t+=1){const n=new h(e[t].name,e[t].id,e[t].tasks);w.push(n)}}function M(e,t){const n=new f(e,L);L+=1,t.addTask(n),localStorage.setItem("projects",JSON.stringify(w))}function T(e){b.value="",k.value="",e.comments&&(b.value=e.comments),e.dueDate&&(k.value=e.dueDate),p.innerHTML=e.name,d.init(),d.show("modal-1"),E.onclick=()=>{!function(e,t,n){e.comments=t,e.dueDate=n,e.dueDate=n}(e,b.value,k.value)}}m(),u(w[0])})();