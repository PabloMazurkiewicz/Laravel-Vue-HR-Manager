import{T as f,a as b,b as g,d as o,u as e,_ as t,Z as h,e as i,f as r,t as m,j as v,n,h as x,F as P,p as d}from"./app-a72bd68e.js";import{_ as V}from"./GoBackNavLink-7e67720f.js";import{_ as y}from"./OrgTabs-38788d61.js";import{_ as c}from"./InputLabel-c6058156.js";import{_ as p}from"./TextInput-02bfe8ae.js";import{_ as u}from"./InputError-6b0028f1.js";import{P as w}from"./PrimaryButton-07649fb6.js";import{_ as S}from"./Card-df9bb34b.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={class:"py-8"},$={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"card-header !mb-4"},B=["onSubmit"],E={class:"mt-4"},N={class:"flex items-center justify-end mt-4"},G={__name:"PositionCreate",setup(A){const s=f({name:"",description:""}),_=()=>{s.post(route("positions.store"),{preserveScroll:!0,onError:()=>{d().error(t("Error Creating Position"))},onSuccess:()=>{d().success(t("Position Created Successfully")),s.reset()}})};return(F,a)=>(b(),g(P,null,[o(e(h),{title:e(t)("Position Create")},null,8,["title"]),o(V,null,{tabs:i(()=>[o(y)]),default:i(()=>[r("div",C,[r("div",$,[o(S,{class:"!mt-0"},{default:i(()=>[r("h1",k,m(e(t)("Add A Position")),1),r("form",{onSubmit:v(_,["prevent"])},[r("div",null,[o(c,{for:"position",value:e(t)("Position Name")},null,8,["value"]),o(p,{id:"position",type:"text",class:n(["mt-1 block w-full",{"border border-red-500":e(s).errors.name}]),modelValue:e(s).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(s).name=l),required:"",autocomplete:"off",placeholder:e(t)("Software Engineer")},null,8,["class","modelValue","placeholder"]),o(u,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),r("div",E,[o(c,{for:"description",value:e(t)("Position Description")},null,8,["value"]),o(p,{id:"description",type:"text",class:n(["mt-1 block w-full",{"border border-red-500":e(s).errors.description}]),modelValue:e(s).description,"onUpdate:modelValue":a[1]||(a[1]=l=>e(s).description=l),autocomplete:"off",placeholder:e(t)("Responsible for designing and developing software solutions.")},null,8,["class","modelValue","placeholder"]),o(u,{class:"mt-2",message:e(s).errors.description},null,8,["message"])]),r("div",N,[o(w,{class:n(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:i(()=>[x(m(e(t)("Add Position")),1)]),_:1},8,["class","disabled"])])],40,B)]),_:1})])])]),_:1})],64))}};export{G as default};
