(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{441:function(t,e,n){"use strict";n.r(e);n(8);var o=n(28),i=n(6),r=n(32);e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{gmcMerchantId:e,dialogPosition:n}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const s=t=>{let{name:s,params:a}=t;if("confirmation"===s&&a.json){const t=t=>{const e=new Date(Date.now());return e.setDate(e.getDate()+t),e};let s,d,c,l;const p=decodeURIComponent(a.json);if(p)try{s=JSON.parse(p)}catch(t){}if(s){const{buyers:e}=s;e&&e[0]&&(d=e[0].main_email);const n=s.shipping_lines&&s.shipping_lines[0];if(n&&n.delivery_time){let e=n.delivery_time.days;n.posting_deadline&&(e+=n.delivery_time.days),n.delivery_time.working_days&&(e*=1.25),l=t(e+3)}}d||(d=r.a.getCustomer().main_email),c||(c=o.$ecomConfig.get("country_code")),l||(l=t(14));const u=[],g=[],m={merchant_id:e,order_id:a.number||a.id,email:d,delivery_country:c,estimated_delivery_date:l.getFullYear()+`-${(l.getMonth()+1).toString().padStart(2,"0")}-`+l.getDate().toString().padStart(2,"0"),opt_in_style:n||"CENTER_DIALOG"};if(s&&s.items)for(let t=0;t<s.items.length&&t<=4;t++)u.push(Object(i.g)({url:`/products/${s.items[t].product_id}.json`}).then((t=>{let{data:e}=t;e.gtin&&e.gtin.forEach((t=>{g.includes(t)||g.push(t)}))})).catch(console.error));Promise.allSettled(u).then((()=>{g.length&&(m.products=g.map((t=>({gtin:t})))),window.gapi.load("surveyoptin",(function(){window.gapi.surveyoptin.render(m)}))}))}};t.currentRoute&&s(t.currentRoute),t.afterEach(s)}}else console.error(new Error("Can't show opt-in dialog without `gmcMerchantId` option"))}}}]);