var te=Object.defineProperty;var J=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var X=(f,n,e)=>n in f?te(f,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[n]=e,K=(f,n)=>{for(var e in n||(n={}))se.call(n,e)&&X(f,e,n[e]);if(J)for(var e of J(n))ae.call(n,e)&&X(f,e,n[e]);return f};import{h as L,u as j,j as oe,e as Q,c as P,b as ie}from"./main.465728e1.js";import{_ as ne,a as D,d as le,J as O,G as re,ah as de,r as g,o as _,l as I,w as m,u as c,f as h,i as C,t as w,j as V,B as z,k as U,L as T,M as W,N as ce,T as ue,h as y,e as E,y as Y,F,m as Z,U as me,V as fe}from"./vendor.d12b5734.js";const q=(f=!1)=>{const n=f?window.pinia.defineStore:le,{global:e}=window.i18n;return n({id:"role",state:()=>({roles:[],allAbilities:[],selectedRoles:[],currentRole:{id:null,name:"",abilities:[]}}),getters:{isEdit:a=>!!a.currentRole.id,abilitiesList:a=>{let i=a.allAbilities.map(l=>K({modelName:l.model?l.model.substring(l.model.lastIndexOf("\\")+1):"Common",disabled:!1},l));return ne.groupBy(i,"modelName")}},actions:{fetchRoles(a){return new Promise((i,l)=>{D.get("/api/v1/roles",{params:a}).then(t=>{this.roles=t.data.data,i(t)}).catch(t=>{L(t),l(t)})})},fetchRole(a){return new Promise((i,l)=>{D.get(`/api/v1/roles/${a}`).then(t=>{this.currentRole.name=t.data.data.name,this.currentRole.id=t.data.data.id,t.data.data.abilities.forEach(r=>{for(const u in this.abilitiesList)this.abilitiesList[u].forEach(v=>{v.ability===r.name&&this.currentRole.abilities.push(v)})}),i(t)}).catch(t=>{L(t),l(t)})})},addRole(a){const i=j();return new Promise((l,t)=>{D.post("/api/v1/roles",a).then(r=>{this.roles.push(r.data.role),i.showNotification({type:"success",message:e.t("settings.roles.created_message")}),l(r)}).catch(r=>{L(r),t(r)})})},updateRole(a){const i=j();return new Promise((l,t)=>{D.put(`/api/v1/roles/${a.id}`,a).then(r=>{if(r.data){let u=this.roles.findIndex(v=>v.id===r.data.data.id);this.roles[u]=a.role,i.showNotification({type:"success",message:e.t("settings.roles.updated_message")})}l(r)}).catch(r=>{L(r),t(r)})})},fetchAbilities(a){return new Promise((i,l)=>{this.allAbilities.length?i(this.allAbilities):D.get("/api/v1/abilities",{params:a}).then(t=>{this.allAbilities=t.data.abilities,i(t)}).catch(t=>{L(t),l(t)})})},deleteRole(a){const i=j();return new Promise((l,t)=>{D.delete(`/api/v1/roles/${a}`).then(r=>{let u=this.roles.findIndex(v=>v.id===a);this.roles.splice(u,1),i.showNotification({type:"success",message:e.t("settings.roles.deleted_message")}),l(r)}).catch(r=>{L(r),t(r)})})}}})()},pe={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(f){const n=f,e=oe();j();const{t:a}=O(),i=q(),l=re(),t=Q(),r=P();de("utils");async function u(x){Promise.all([await i.fetchAbilities(),await i.fetchRole(x)]).then(()=>{r.openModal({title:a("settings.roles.edit_role"),componentName:"RolesModal",size:"lg",refreshData:n.loadData})})}async function v(x){e.openDialog({title:a("general.are_you_sure"),message:a("settings.roles.confirm_delete"),yesLabel:a("general.ok"),noLabel:a("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async b=>{b&&await i.deleteRole(x).then(R=>{R.data&&n.loadData&&n.loadData()})})}return(x,b)=>{const R=g("BaseIcon"),B=g("BaseButton"),s=g("BaseDropdownItem"),d=g("BaseDropdown");return _(),I(d,null,{activator:m(()=>[c(l).name==="roles.view"?(_(),I(B,{key:0,variant:"primary"},{default:m(()=>[h(R,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(_(),I(R,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:m(()=>[c(t).currentUser.is_owner?(_(),I(s,{key:0,onClick:b[0]||(b[0]=p=>u(f.row.id))},{default:m(()=>[h(R,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),C(" "+w(x.$t("general.edit")),1)]),_:1})):V("",!0),c(t).currentUser.is_owner?(_(),I(s,{key:1,onClick:b[1]||(b[1]=p=>v(f.row.id))},{default:m(()=>[h(R,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),C(" "+w(x.$t("general.delete")),1)]),_:1})):V("",!0)]),_:1})}}},he={class:"flex justify-between w-full"},be=["onSubmit"],ge={class:"px-4 md:px-8 py-4 md:py-6"},_e={class:"flex justify-between"},ye={class:"text-sm not-italic font-medium text-gray-800 px-4 md:px-8 py-1.5"},ve=y("span",{class:"text-sm text-red-500"}," *",-1),we={class:"text-sm not-italic font-medium text-gray-300 px-4 md:px-8 py-1.5"},Be=C(" / "),xe={class:"border-t border-gray-200 py-3"},Re={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 sm:px-8"},$e={class:"text-sm text-gray-500 border-b border-gray-200 pb-1 mb-2"},Se={key:0,class:"block mt-0.5 text-sm text-red-500"},ke={class:"z-0 flex justify-end p-4 border-t border-solid border--200 border-modal-bg"},Ce={setup(f){const n=P(),e=q(),{t:a}=O();let i=z(!1),l=z(!1);const t=U(()=>n.active&&n.componentName==="RolesModal"),r=U(()=>({name:{required:T.withMessage(a("validation.required"),W),minLength:T.withMessage(a("validation.name_min_length",{count:3}),ce(3))},abilities:{required:T.withMessage(a("validation.at_least_one_ability"),W)}})),u=ue(r,U(()=>e.currentRole));async function v(){if(u.value.$touch(),u.value.$invalid)return!0;try{const s=e.isEdit?e.updateRole:e.addRole;i.value=!0,await s(e.currentRole),i.value=!1,n.refreshData&&n.refreshData(),B()}catch{return i.value=!1,!0}}function x(s){var p,o;if(!e.currentRole.abilities.find($=>$.ability===s.ability)&&((p=s==null?void 0:s.depends_on)==null?void 0:p.length)){R(s);return}(o=s==null?void 0:s.depends_on)==null||o.forEach($=>{Object.keys(e.abilitiesList).forEach(M=>{e.abilitiesList[M].forEach(k=>{$===k.ability&&(k.disabled=!0,e.currentRole.abilities.find(S=>S.ability===$)||e.currentRole.abilities.push(k))})})})}function b(s){let d=[];Object.keys(e.abilitiesList).forEach(p=>{e.abilitiesList[p].forEach(o=>{(o==null?void 0:o.depends_on)&&(d=[...d,...o.depends_on])})}),Object.keys(e.abilitiesList).forEach(p=>{e.abilitiesList[p].forEach(o=>{d.includes(o.ability)&&(s?o.disabled=!0:o.disabled=!1),e.currentRole.abilities.push(o)})}),s||(e.currentRole.abilities=[])}function R(s){s.depends_on.forEach(d=>{Object.keys(e.abilitiesList).forEach(p=>{e.abilitiesList[p].forEach(o=>{let $=e.currentRole.abilities.find(M=>{var k;return(k=M.depends_on)==null?void 0:k.includes(o.ability)});d===o.ability&&!$&&(o.disabled=!1)})})})}function B(){n.closeModal(),setTimeout(()=>{e.currentRole={id:null,name:"",abilities:[]},Object.keys(e.abilitiesList).forEach(s=>{e.abilitiesList[s].forEach(d=>{d.disabled=!1})}),u.value.$reset()},300)}return(s,d)=>{const p=g("BaseIcon"),o=g("BaseInput"),$=g("BaseInputGroup"),M=g("BaseCheckbox"),k=g("BaseButton"),G=g("BaseModal");return _(),I(G,{show:c(t),onClose:B},{header:m(()=>[y("div",he,[C(w(c(n).title)+" ",1),h(p,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:B})])]),default:m(()=>[y("form",{onSubmit:me(v,["prevent"])},[y("div",ge,[h($,{label:s.$t("settings.roles.name"),class:"mt-3",error:c(u).name.$error&&c(u).name.$errors[0].$message,required:"","content-loading":c(l)},{default:m(()=>[h(o,{modelValue:c(e).currentRole.name,"onUpdate:modelValue":d[0]||(d[0]=S=>c(e).currentRole.name=S),invalid:c(u).name.$error,type:"text","content-loading":c(l),onInput:d[1]||(d[1]=S=>c(u).name.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"])]),y("div",_e,[y("h6",ye,[C(w(s.$tc("settings.roles.permission",2))+" ",1),ve]),y("div",we,[y("a",{class:"cursor-pointer text-primary-400",onClick:d[2]||(d[2]=S=>b(!0))},w(s.$t("settings.roles.select_all")),1),Be,y("a",{class:"cursor-pointer text-primary-400",onClick:d[3]||(d[3]=S=>b(!1))},w(s.$t("settings.roles.none")),1)])]),y("div",xe,[y("div",Re,[(_(!0),E(F,null,Y(c(e).abilitiesList,(S,H)=>(_(),E("div",{key:H,class:"flex flex-col space-y-1"},[y("p",$e,w(H),1),(_(!0),E(F,null,Y(S,(N,ee)=>(_(),E("div",{key:ee,class:"flex"},[h(M,{modelValue:c(e).currentRole.abilities,"onUpdate:modelValue":[d[4]||(d[4]=A=>c(e).currentRole.abilities=A),A=>x(N)],"set-initial-value":!0,variant:"primary",disabled:N.disabled,label:N.name,value:N},null,8,["modelValue","disabled","label","value","onUpdate:modelValue"])]))),128))]))),128)),c(u).abilities.$error?(_(),E("span",Se,w(c(u).abilities.$errors[0].$message),1)):V("",!0)])]),y("div",ke,[h(k,{class:"mr-3 text-sm",variant:"primary-outline",type:"button",onClick:B},{default:m(()=>[C(w(s.$t("general.cancel")),1)]),_:1}),h(k,{loading:c(i),disabled:c(i),variant:"primary",type:"submit"},{left:m(S=>[h(p,{name:"SaveIcon",class:Z(S.class)},null,8,["class"])]),default:m(()=>[C(" "+w(c(e).isEdit?s.$t("general.update"):s.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,be)]),_:1},8,["show"])}}},Ee={setup(f){const n=P(),e=q(),a=Q(),i=ie(),{t:l}=O(),t=z(null),r=U(()=>[{key:"name",label:l("settings.roles.role_name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"created_at",label:l("settings.roles.added_on"),tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function u({page:b,filter:R,sort:B}){let s={orderByField:B.fieldName||"created_at",orderBy:B.order||"desc",company_id:i.selectedCompany.id};return{data:(await e.fetchRoles(s)).data.data}}async function v(){t.value&&t.value.refresh()}async function x(){await e.fetchAbilities(),n.openModal({title:l("settings.roles.add_role"),componentName:"RolesModal",size:"lg",refreshData:t.value&&t.value.refresh})}return(b,R)=>{const B=g("BaseIcon"),s=g("BaseButton"),d=g("BaseTable"),p=g("BaseSettingCard");return _(),E(F,null,[h(Ce),h(p,{title:b.$t("settings.roles.title"),description:b.$t("settings.roles.description")},fe({default:m(()=>[h(d,{ref:(o,$)=>{$.table=o,t.value=o},data:u,columns:c(r),class:"mt-14"},{"cell-created_at":m(({row:o})=>[C(w(o.data.formatted_created_at),1)]),"cell-actions":m(({row:o})=>[c(a).currentUser.is_owner&&o.data.name!=="super admin"?(_(),I(pe,{key:0,row:o.data,table:t.value,"load-data":v},null,8,["row","table"])):V("",!0)]),_:1},8,["columns"])]),_:2},[c(a).currentUser.is_owner?{name:"action",fn:m(()=>[h(s,{variant:"primary-outline",onClick:x},{left:m(o=>[h(B,{name:"PlusIcon",class:Z(o.class)},null,8,["class"])]),default:m(()=>[C(" "+w(b.$t("settings.roles.add_new_role")),1)]),_:1})])}:void 0]),1032,["title","description"])],64)}}};export{Ee as default};
