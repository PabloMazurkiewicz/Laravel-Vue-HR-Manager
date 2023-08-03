import{_ as c}from"./Paginator-5f2029d7.js";import{a as o,b as r,f as a,y as n,h as l,t as s,i,d as u,n as m}from"./app-a72bd68e.js";const b={key:0,class:"relative overflow-x-auto shadow-md sm:rounded-lg pt-1"},y={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},f={class:"text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-400"},h={key:0,class:"flex items-center justify-between pt-4 pb-2 mx-6","aria-label":"Table navigation"},_={key:0,class:"text-sm font-normal text-gray-500 dark:text-gray-400"},g={class:"font-semibold text-gray-900 dark:text-white"},x={class:"font-semibold text-gray-900 dark:text-white"},k={key:1,class:"flex items-center justify-center p-6 mt-4"},p={class:"text-center pb-8 text-gray-500"},B={__name:"Table",props:{links:Object,showingNumber:{type:Number,default:0},totalNumber:{type:Number,default:0},enablePaginator:{type:Boolean,default:!0}},setup(e){return(t,d)=>e.totalNumber?(o(),r("div",b,[a("table",y,[a("thead",f,[a("tr",null,[n(t.$slots,"Head")])]),a("tbody",null,[n(t.$slots,"Body")])]),e.enablePaginator&&e.totalNumber!==0?(o(),r("nav",h,[e.showingNumber!==e.totalNumber?(o(),r("span",_,[l(s(t.__("Showing"))+" ",1),a("span",g,s(e.showingNumber),1),l(" "+s(t.__("of"))+" ",1),a("span",x,s(e.totalNumber),1),l(" "+s(t.__("Records"))+".",1)])):i("",!0),u(c,{dir:"ltr",links:e.links},null,8,["links"])])):i("",!0)])):(o(),r("div",k,[a("div",p,s(t.__("No data was found in the records.")),1)]))}},N={scope:"col",class:"px-6 py-3"},$={__name:"TableHead",props:{sortable:{type:Boolean,default:!1}},setup(e){return(t,d)=>(o(),r("th",N,[a("span",{class:m({"cursor-pointer hover:underline":e.sortable})},[n(t.$slots,"default")],2)]))}};export{B as _,$ as a};
