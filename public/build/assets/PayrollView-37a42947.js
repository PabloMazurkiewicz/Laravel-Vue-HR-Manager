import{a as n,b as v,f as p,o as k,T as L,K as P,d as e,u as t,_ as a,Z as A,e as l,t as s,g as u,i as _,j as E,n as S,h as r,s as N,F as V,p as B}from"./app-a72bd68e.js";import{_ as j}from"./GoBackNavLink-7e67720f.js";import{_ as b}from"./FlexButton-1afc2f15.js";import{a as H}from"./index-7c45f06a.js";import{_ as Y}from"./PayrollTabs-8d70486e.js";import{D as z,_ as d,a as c,b as f}from"./DD-a0a32140.js";import{_ as F}from"./ToolTip-24dcfefd.js";import{_ as $}from"./Notice-c7db707b.js";import{_ as C,X as U}from"./XIcon-3b1fa216.js";import{S as I}from"./sweetalert2.all-fc8786bf.js";import{_ as W}from"./Card-df9bb34b.js";import{M as X}from"./ModifyIcon-0f3fd9ae.js";import{C as q}from"./CheckIcon-38f42d62.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const K={name:"LeftChevronIcon"},O={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},Z=p("path",{"fill-rule":"evenodd",d:"M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z","clip-rule":"evenodd"},null,-1),G=[Z];function J(o,w,g,h,i,x){return n(),v("svg",O,G)}const D=M(K,[["render",J]]),Q={name:"RightChevronIcon"},ee={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},te=p("path",{"fill-rule":"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z","clip-rule":"evenodd"},null,-1),le=[te];function ae(o,w,g,h,i,x){return n(),v("svg",ee,le)}const T=M(Q,[["render",ae]]),oe={class:"py-8"},se={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},re={class:"flex justify-between items-center mb-4"},ne={class:"text-2xl"},ie={key:0,class:"flex inline-flex gap-4"},ue=["onSubmit"],de={key:0},ce=p("br",null,null,-1),fe={key:1,class:"flex justify-between"},Be={__name:"PayrollView",props:{payroll:Object},setup(o){const w=o;k(()=>{H()});const g=document.dir==="ltr",h=w.payroll.currency,i=L({status:""}),x=()=>{I.mixin({customClass:{cancelButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",confirmButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:a("Are you sure You want to change the status of this Payroll?"),icon:"question",showCancelButton:!0,confirmButtonText:a("Confirm"),cancelButtonText:a("Cancel"),input:i.status?"checkbox":null,inputValue:1,inputPlaceholder:a("Send an Email to the employee with this payroll update."),reverseButtons:!0}).then(y=>{y.isConfirmed&&i.put(route("payrolls.updateStatus",{id:w.payroll.id,sendEmail:i.status?y.value:0}),{preserveScroll:!0,onError:()=>{B().error(a("Error Updating Status"))},onSuccess:()=>{B().success(a("Status Updated Successfully"))}})})};return k(()=>{P().props.errors.end_of_payrolls&&I.fire({icon:"success",title:P().props.errors.end_of_payrolls})}),(m,y)=>(n(),v(V,null,[e(t(A),{title:t(a)("Payroll Data")},null,8,["title"]),e(j,null,{tabs:l(()=>[e(Y)]),default:l(()=>[p("div",oe,[p("div",se,[e(W,{class:"!mt-0"},{default:l(()=>[p("div",null,[p("div",re,[p("h1",ne,s(t(a)("Payroll Details")),1),m.$page.props.auth.user.roles.includes("admin")?(n(),v("div",ie,[o.payroll.status?_("",!0):(n(),u(b,{key:0,href:m.route("payrolls.edit",{id:o.payroll.id}),text:o.payroll.is_reviewed?t(a)("Review Again"):t(a)("Review Payroll")},{default:l(()=>[e(X)]),_:1},8,["href","text"])),p("form",{onSubmit:E(x,["prevent"])},[o.payroll.is_reviewed&&!o.payroll.status?(n(),u(C,{key:0,text:t(a)("Approve Payroll"),onClick:y[0]||(y[0]=R=>t(i).status=!0),class:S({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:l(()=>[e(q)]),_:1},8,["text","class","disabled"])):o.payroll.is_reviewed&&o.payroll.status?(n(),u(C,{key:1,text:t(a)("Mark as Pending"),onClick:y[1]||(y[1]=R=>t(i).status=!1),class:S({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:l(()=>[e(U)]),_:1},8,["text","class","disabled"])):_("",!0)],40,ue)])):_("",!0)]),m.$page.props.auth.user.roles.includes("admin")?(n(),v("div",de,[o.payroll.is_reviewed?o.payroll.is_reviewed&&!o.payroll.status?(n(),u($,{key:1,bold:t(a)("This Payroll Has been Reviewed."),text:t(a)("You can approve it now.")},null,8,["bold","text"])):o.payroll.is_reviewed&&o.payroll.status?(n(),u($,{key:2,bold:t(a)("Processed Payroll."),text:t(a)("This payroll has been reviewed and paid successfully."),type:"success"},null,8,["bold","text"])):_("",!0):(n(),u($,{key:0,type:"warning",bold:t(a)("This Payroll Has not been reviewed Yet."),br:!0,text:t(a)("You are viewing auto-generated payroll data, which is not final and cannot be approved. Please Review the payroll first, then the option to approve it will appear on this page.")},null,8,["bold","text"]))])):_("",!0),e(z,null,{default:l(()=>[e(d,{colored:""},{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Payroll ID")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(o.payroll.id),1)]),_:1})]),_:1}),e(d,{colored:""},{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Issued for Employee")),1)]),_:1}),e(t(N),{href:m.route("employees.show",{id:o.payroll.employee.id})},{default:l(()=>[e(f,null,{default:l(()=>[r(s(o.payroll.employee.name),1)]),_:1})]),_:1},8,["href"])]),_:1}),e(d,null,{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Base Salary")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(t(h)+" "+parseInt(o.payroll.base).toLocaleString()),1)]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Total Deductions")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(t(h)+" "+parseInt(o.payroll.total_deductions).toLocaleString()),1)]),_:1})]),_:1}),e(d,{colored:""},{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Total Additions")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(t(h)+" "+parseInt(o.payroll.total_additions).toLocaleString()),1)]),_:1})]),_:1}),e(d,{colored:""},{default:l(()=>[e(c,{class:"inline"},{default:l(()=>[r(s(t(a)("Performance Multiplier")),1)]),_:1}),e(F,null,{default:l(()=>[r(s(t(a)("Based on employee's performance metrics filled,")),1),ce,r(" "+s(t(a)("the multiplier value increases or decreases affecting the entire payroll's total amount.")),1)]),_:1}),e(f,null,{default:l(()=>[r(s((o.payroll.performance_multiplier*100).toFixed(2))+"%",1)]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Total Payable")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(t(h)+" "+parseInt(o.payroll.total_payable).toLocaleString()),1)]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Due Date")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(o.payroll.due_date),1)]),_:1})]),_:1}),e(d,{colored:""},{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Reviewed?")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(o.payroll.is_reviewed?t(a)("Reviewed"):t(a)("Not Reviewed")),1)]),_:1})]),_:1}),e(d,{colored:""},{default:l(()=>[e(c,null,{default:l(()=>[r(s(t(a)("Status")),1)]),_:1}),e(f,null,{default:l(()=>[r(s(o.payroll.status?t(a)("Paid"):t(a)("Pending")),1)]),_:1})]),_:1})]),_:1}),m.$page.props.auth.user.roles.includes("admin")?(n(),v("div",fe,[e(b,{class:"mb-4",href:m.route("payrolls.show",{id:o.payroll.id-1}),text:t(a)("Previous Payroll")},{default:l(()=>[g?(n(),u(D,{key:0})):(n(),u(T,{key:1}))]),_:1},8,["href","text"]),e(b,{class:"mb-4",href:m.route("payrolls.show",{id:o.payroll.id+1}),text:t(a)("Next Payroll"),IconAfter:""},{default:l(()=>[g?(n(),u(T,{key:0})):(n(),u(D,{key:1}))]),_:1},8,["href","text"])])):_("",!0)])]),_:1})])])]),_:1})],64))}};export{Be as default};