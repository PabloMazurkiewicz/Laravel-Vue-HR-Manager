import{a as c,b as r}from"./GoBackNavLink-7e67720f.js";import{a as d,b as l,d as a,e as s,h as t,t as n,F as i}from"./app-a72bd68e.js";const o={key:0,class:"space-x-8 rtl:space-x-reverse sm:flex"},u={key:1,class:"space-x-8 sm:flex"},p={__name:"CalendarTabs",setup(f){return(e,_)=>(d(),l(i,null,[a(c),e.$page.props.auth.user.roles.includes("admin")?(d(),l("div",o,[a(r,{href:e.route("calendar.index"),active:e.route().current("calendar.index")},{default:s(()=>[t(n(e.__("Calendar")),1)]),_:1},8,["href","active"]),a(r,{href:e.route("calendars.index"),active:e.route().current("calendars.index")},{default:s(()=>[t(n(e.__("Calendar Items")),1)]),_:1},8,["href","active"]),a(r,{href:e.route("calendars.create"),active:e.route().current("calendars.create")},{default:s(()=>[t(n(e.__("Add a Calendar Item")),1)]),_:1},8,["href","active"])])):(d(),l("div",u,[a(r,{href:e.route("calendar.index"),active:""},{default:s(()=>[t(n(e.__("My Calendar")),1)]),_:1},8,["href"])]))],64))}};export{p as _};
