import{o as B,r as $,O as k,w as M,a as f,b as w,d as a,u as y,Z as j,e,f as o,t as l,h as t,g as c,s as E,m as I,z as O,F as g,l as T}from"./app-a72bd68e.js";import{_ as V}from"./GoBackNavLink-7e67720f.js";import{_ as S}from"./FlexButton-1afc2f15.js";import{a as F}from"./index-7c45f06a.js";import{_ as L}from"./OrgTabs-38788d61.js";import{_ as P}from"./SearchBar-a2289bca.js";import{d as z}from"./index-1e70bbb5.js";import{_ as v}from"./Card-df9bb34b.js";import{_ as p,T as A}from"./TableRow-59591e8f.js";import{_ as C,a as m}from"./TableHead-abab76cf.js";import{_ as D}from"./TableBodyHeader-98f3f318.js";import{D as H,_ as u,a as i,b as d}from"./DD-a0a32140.js";import{M as R}from"./ModifyIcon-0f3fd9ae.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-5f2029d7.js";const U={class:"py-8"},Z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},q={class:"flex justify-between items-center mb-4"},G={class:"card-header"},J={class:"flex inline-flex gap-4"},K={class:"card-subheader"},Q={class:"flex justify-between items-center pb-4"},W={class:"card-subheader"},X=["placeholder"],me={__name:"BranchView",props:{branch:Object,manager:Object,employees:Object},setup(_){const n=_;B(()=>{F()});const h=$(""),N=z(()=>{k.visit(route("branches.show",{term:h.value,branch:n.branch}),{preserveState:!0,preserveScroll:!0})},500);return M(h,N),(s,b)=>(f(),w(g,null,[a(y(j),{title:s.__("Branch Data")},null,8,["title"]),a(V,null,{tabs:e(()=>[a(L)]),default:e(()=>[o("div",U,[o("div",Z,[a(v,{class:"!mt-0"},{default:e(()=>[o("div",null,[o("div",q,[o("h1",G,l(s.__("Branch Details")),1),o("div",J,[a(S,{text:s.__("Modify Branch Data"),href:s.route("branches.edit",{id:n.branch.id})},{default:e(()=>[a(R)]),_:1},8,["text","href"])])]),o("h2",K,l(s.__("Basic Info")),1),a(H,{class:"!pb-0"},{default:e(()=>[a(u,{colored:""},{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("Name")),1)]),_:1}),a(d,null,{default:e(()=>[t(l(n.branch.name),1)]),_:1})]),_:1}),a(u,{colored:""},{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("ID")),1)]),_:1}),a(d,null,{default:e(()=>[t(l(n.branch.id),1)]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("Phone")),1)]),_:1}),a(d,null,{default:e(()=>[t(l(n.branch.phone),1)]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("Email")),1)]),_:1}),a(d,null,{default:e(()=>[t(l(n.branch.email),1)]),_:1})]),_:1}),a(u,{colored:""},{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("Manager")),1)]),_:1}),n.manager?(f(),c(y(E),{key:0,href:s.route("employees.show",{id:n.manager.id})},{default:e(()=>[a(d,null,{default:e(()=>[t(l(n.manager.name),1)]),_:1})]),_:1},8,["href"])):(f(),c(d,{key:1},{default:e(()=>[t(l(s.__("No Manager")),1)]),_:1}))]),_:1}),a(u,{colored:""},{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("Number of Employees")),1)]),_:1}),a(d,null,{default:e(()=>[t(l(n.branch.employees_count),1)]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(i,null,{default:e(()=>[t(l(s.__("Address")),1)]),_:1}),a(d,null,{default:e(()=>[t(l(n.branch.address),1)]),_:1})]),_:1})]),_:1})])]),_:1}),a(v,null,{default:e(()=>[o("div",Q,[o("h2",W,l(s.__("Branch Employees")),1),a(P,null,{default:e(()=>[I(o("input",{type:"text",id:"table-search-users","onUpdate:modelValue":b[0]||(b[0]=r=>h.value=r),class:"input-class",placeholder:s.__("Search for a user")},null,8,X),[[O,h.value]])]),_:1})]),a(C,{links:_.employees.links,showingNumber:_.employees.data.length,totalNumber:_.employees.total},{Head:e(()=>[a(m,null,{default:e(()=>[t(l(s.__("ID")),1)]),_:1}),a(m,null,{default:e(()=>[t(l(s.__("Name")),1)]),_:1}),a(m,null,{default:e(()=>[t(l(s.__("Email")),1)]),_:1}),a(m,null,{default:e(()=>[t(l(s.__("Phone")),1)]),_:1}),a(m,null,{default:e(()=>[t(l(s.__("National ID")),1)]),_:1})]),Body:e(()=>[(f(!0),w(g,null,T(_.employees.data,r=>(f(),c(A,{key:r.id},{default:e(()=>[a(D,{href:s.route("employees.show",{id:r.id})},{default:e(()=>[t(l(r.id),1)]),_:2},1032,["href"]),a(D,{href:s.route("employees.show",{id:r.id})},{default:e(()=>[t(l(r.name),1)]),_:2},1032,["href"]),a(p,{href:s.route("employees.show",{id:r.id})},{default:e(()=>[t(l(r.email),1)]),_:2},1032,["href"]),a(p,{href:s.route("employees.show",{id:r.id})},{default:e(()=>[t(l(r.phone),1)]),_:2},1032,["href"]),a(p,{href:s.route("employees.show",{id:r.id})},{default:e(()=>[t(l(r.national_id),1)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{me as default};
