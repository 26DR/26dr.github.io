(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(t,e,n){var content=n(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("760fc60d",content,!0,{sourceMap:!1})},199:function(t,e,n){var content=n(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("7c583904",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";n(198)},206:function(t,e,n){var o=n(110)(!1);o.push([t.i,".header-one .header-navigation.stricky-fixed[data-v-6e565bd4]{transition:all .3s ease-out}.header-one__btn[data-v-6e565bd4]{color:#e07a5f}.header-one__btn[data-v-6e565bd4]:hover{color:#fff}.brand-text[data-v-6e565bd4]{font-weight:600;color:#e07a5f;font-size:1.5rem}",""]),t.exports=o},207:function(t,e,n){"use strict";n(199)},208:function(t,e,n){var o=n(110)(!1);o.push([t.i,".email[data-v-63163555]{pointer-events:none;cursor:default;text-decoration:none}.scroll-to-top[data-v-63163555]{border:1.5px solid #fff}@media (max-width:544px){.site-footer__bottom-footer p[data-v-63163555]{font-size:.7rem}}",""]),t.exports=o},209:function(t,e,n){"use strict";var o={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){this.stickyDynamic?(window.addEventListener("scroll",this.handleScroll),this.handleScroll()):this.sticky=!0},props:["stickyDynamic"],methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},l=(n(205),n(47)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"site-header header-one"},[n("nav",{class:"navbar navbar-expand-lg navbar-light header-navigation stricky "+(t.sticky?"stricky-fixed":"")+" animated slideInDown"},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"logo-box clearfix"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"brand-text"},[t._v("Pductivity")])]),t._v(" "),n("button",{staticClass:"menu-toggler",attrs:{"data-target":".header-one .main-navigation","aria-label":"Toggle fold-out menu"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[n("span",{staticClass:"fa fa-bars"})])],1),t._v(" "),n("div",{class:"main-navigation "+(t.mobileToggle?"showen":""),style:"display: "+(t.mobileToggle?"block":"")},["/"==this.$router.currentRoute.path?n("ul",{staticClass:"navigation-box one-page-scroll-menu"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]):n("ul",{staticClass:"navigation-box one-page-scroll-menu"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])]),t._v(" "),n("div",{staticClass:"right-side-box"},[n("NuxtLink",{staticClass:"header-one__btn",attrs:{to:"/coming-soon"}},[t._v("\n          Log In\n        ")])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#home"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#benefits"}},[t._v("Benefits")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#features"}},[t._v("Features")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#pricing"}},[t._v("Pricing")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"#newsletter"}},[t._v("Newsletter")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"/#benefits"}},[t._v("Benefits")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"/#features"}},[t._v("Features")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"/#pricing"}},[t._v("Pricing")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"scrollToLink"},[n("a",{attrs:{href:"/#newsletter"}},[t._v("Newsletter")])])}],!1,null,"6e565bd4",null);e.a=component.exports},210:function(t,e,n){"use strict";var o={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},l=(n(207),n(47)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"site-footer"},[n("img",{staticClass:"bubble-1",attrs:{src:"/images/banner-icon-1-1.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-2",attrs:{src:"/images/banner-icon-1-3.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-3",attrs:{src:"/images/banner-icon-1-2.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-4",attrs:{src:"/images/banner-icon-1-4.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"site-footer__main-footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget"},[n("h3",{staticClass:"footer-widget__title"},[t._v("Resources")]),t._v(" "),n("ul",{staticClass:"footer-widget__link-list"},[n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home ")])],1)])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget"},[n("h3",{staticClass:"footer-widget__title"},[t._v("Links")]),t._v(" "),n("ul",{staticClass:"footer-widget__link-list"},["/privacy"!=this.$router.currentRoute.path?n("li",[n("NuxtLink",{attrs:{to:"/privacy"}},[t._v(" Privacy Policy ")])],1):t._e(),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/coming-soon"}},[t._v(" FAQ ")])],1)])])]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2)]),t._v(" "),n("a",{staticClass:"scroll-to-target scroll-to-top",style:"display:"+(t.scrollBtn?"block":""),attrs:{href:"#","data-target":"html","aria-label":"Scroll to the top of the page"},on:{click:t.scrollTop}},[n("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget"},[n("h3",{staticClass:"footer-widget__title"},[t._v("Contact Us")]),t._v(" "),n("ul",{staticClass:"footer-widget__link-list"},[n("li",[n("p",{staticClass:"email"},[t._v("info@pductivity.com")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-2 col-md-6 col-sm-12 d-flex"},[e("div",{staticClass:"footer-widget my-auto"},[e("div",{staticClass:"social-block"},[e("a",{attrs:{href:"https://twitter.com/pductivity",target:"_blank",rel:"noreferrer noopener","aria-label":"Twitter"}},[e("em",{staticClass:"fa fa-twitter"})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-footer__bottom-footer text-center"},[n("div",{staticClass:"container"},[n("p",[t._v("COPYRIGHT © 2021 Pductivity, All rights Reserved")])])])}],!1,null,"63163555",null);e.a=component.exports},214:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("14f385fe",content,!0,{sourceMap:!1})},215:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("f2c979e0",content,!0,{sourceMap:!1})},216:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("c3e66dd0",content,!0,{sourceMap:!1})},217:function(t,e,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("09706981",content,!0,{sourceMap:!1})},218:function(t,e,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("5a428248",content,!0,{sourceMap:!1})},220:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("f4c19de2",content,!0,{sourceMap:!1})},221:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("fddf44fe",content,!0,{sourceMap:!1})},222:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("6759f5ab",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(214)},229:function(t,e,n){var o=n(110)(!1);o.push([t.i,".block-title__text[data-v-326c6419]{font-size:50px}.banner-one__text[data-v-326c6419]{font-weight:400}@media only screen and (max-width:1750px){.banner-one__moc[data-v-326c6419]{width:50%}.banner-one[data-v-326c6419]{padding-top:230px;height:100vh}}@media only screen and (max-width:1250px){.banner-one__moc[data-v-326c6419]{display:none}}@media (max-width:544px){.banner-one__content[data-v-326c6419]{padding:30px}.block-title__text[data-v-326c6419]{font-size:1.9rem}.banner-one__text[data-v-326c6419]{font-size:.9rem}.banner-one__btn[data-v-326c6419]{margin:0 auto;display:block}}",""]),t.exports=o},230:function(t,e,n){"use strict";n(215)},231:function(t,e,n){var o=n(110)(!1);o.push([t.i,".block-title__text[data-v-63d5e5b8]{font-size:50px}.banner-one__text[data-v-63d5e5b8]{font-weight:400}.banner-one__moc[data-v-63d5e5b8]{top:250px}@media only screen and (max-width:1750px){.banner-one__moc[data-v-63d5e5b8]{width:50%}.banner-one[data-v-63d5e5b8]{padding-top:230px;height:100vh}}@media only screen and (max-width:1250px){.banner-one__moc[data-v-63d5e5b8]{display:none}}@media (max-width:544px){.banner-one__content[data-v-63d5e5b8]{padding:30px}.block-title__text[data-v-63d5e5b8]{font-size:1.9rem}.banner-one__text[data-v-63d5e5b8]{font-size:.9rem}.banner-one__btn[data-v-63d5e5b8]{margin:0 auto;display:block}}",""]),t.exports=o},234:function(t,e,n){"use strict";n(216)},235:function(t,e,n){var o=n(110)(!1);o.push([t.i,".service-one__single[data-v-f35f7e9e]{height:100%}@media (max-width:544px){.block-title__text[data-v-f35f7e9e]{font-size:1.3rem}.service-one[data-v-f35f7e9e]{padding-top:60px}.service-one__single[data-v-f35f7e9e]{margin-top:20px;padding:20px}.service-one__card[data-v-f35f7e9e]{margin-bottom:20px}}",""]),t.exports=o},236:function(t,e,n){"use strict";n(217)},237:function(t,e,n){var o=n(110)(!1);o.push([t.i,".cta-three__text[data-v-f6c0b98e]{font-weight:400}@media (max-width:544px){.block-title__text[data-v-f6c0b98e]{font-size:1.5rem;padding-left:30px;padding-right:30px}.cta-three[data-v-f6c0b98e]{padding-top:60px;padding-bottom:60px}.cta-three__list[data-v-f6c0b98e],.cta-three__text[data-v-f6c0b98e]{font-size:1rem;padding-left:30px;padding-right:30px}.cta-three__list-item[data-v-f6c0b98e]{font-size:1rem;margin-bottom:30px}.cta-three__btn[data-v-f6c0b98e]{margin:0 auto;display:block}}",""]),t.exports=o},238:function(t,e,n){"use strict";n(218)},239:function(t,e,n){var o=n(110)(!1);o.push([t.i,".pricing-one__pack[data-v-05ea86de]{margin-bottom:50px}.pricing-one__single[data-v-05ea86de]{height:100%}.pricing-one__top[data-v-05ea86de]{min-height:235px}@media (max-width:544px){.block-title__text[data-v-05ea86de]{font-size:1.5rem;padding-left:30px;padding-right:30px}.pricing-one__feature[data-v-05ea86de]{margin-top:40px;margin-bottom:30px}.pricing-one__single[data-v-05ea86de]{margin-bottom:0;padding-bottom:25px}}",""]),t.exports=o},241:function(t,e,n){"use strict";n(220)},242:function(t,e,n){var o=n(110)(!1);o.push([t.i,".recaptcha-warning{text-align:center;margin-top:20px;margin-bottom:-20px}div.g-recaptcha{margin:40px auto 0;width:304px}.newsletter-thanks{font-size:20px;text-align:center}@media (max-width:544px){div.g-recaptcha{padding-top:50px}.block-title__text{font-size:1.6rem}.site-footer__subscribe-form{height:55px}.site-footer__subscribe-form button[type=submit]{top:130%}#newsletter-btn{margin:0 auto;display:block;width:100%!important}}",""]),t.exports=o},246:function(t,e,n){"use strict";n(221)},247:function(t,e,n){var o=n(110)(!1);o.push([t.i,".banner-one__btn[data-v-64e83f10]{margin-top:35px}.block-title__text[data-v-64e83f10]{font-size:35px}.single-testi-one p[data-v-64e83f10]{font-size:20px}.testimonials-style-one[data-v-64e83f10]{padding-bottom:80px}.block-title[data-v-64e83f10]{margin-bottom:15px}.free-trial-list[data-v-64e83f10]{padding-left:70px}@media (max-width:544px){.block-title__text[data-v-64e83f10]{font-size:1.8rem}.block-title__text[data-v-64e83f10],.single-testi-one p[data-v-64e83f10]{padding-left:30px;padding-right:30px;text-align:center}.single-testi-one p[data-v-64e83f10]{font-size:1rem;margin-bottom:30px}.free-trial-list[data-v-64e83f10]{display:none}.banner-one__btn[data-v-64e83f10]{margin:0 auto;display:block}}",""]),t.exports=o},248:function(t,e,n){"use strict";n(222)},249:function(t,e,n){var o=n(110)(!1);o.push([t.i,"body,html{scroll-padding-top:85px}",""]),t.exports=o},257:function(t,e,n){"use strict";n.r(e);var o=n(209),l={name:"BannerTwo"},r=(n(228),n(47)),c=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner-one banner-one__home-two",attrs:{id:"home"}},[n("img",{staticClass:"banner-one__moc",attrs:{src:"/images/banner-moc-2.png",alt:"13-Week Goal Screenshot From Pductivity App",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"banner-one__content"},[n("div",{staticClass:"block-title"},[n("h1",{staticClass:"block-title__text"},[n("span",[t._v("The perfect blend of")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("productivity &")]),t._v(" "),n("br"),n("span",[t._v("self-improvement")])])]),t._v(" "),n("h2",{staticClass:"banner-one__text"},[t._v("Pductivity combines productivity and self-improvement tools into one smooth experience. Set goals, track habits, plan your days and more.  ")]),t._v(" "),n("a",{staticClass:"banner-one__btn",attrs:{href:"#newsletter"}},[t._v("Get Started")])])])])])])}],!1,null,"326c6419",null).exports,_={name:"BannerOne"},v=(n(230),Object(r.a)(_,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner-one",attrs:{id:"home"}},[n("img",{staticClass:"bubble-1",attrs:{src:"/images/banner-icon-1-1.png",alt:"Awesome Image"}}),t._v(" "),n("img",{staticClass:"bubble-2",attrs:{src:"/images/banner-icon-1-3.png",alt:"Awesome Image"}}),t._v(" "),n("img",{staticClass:"bubble-3",attrs:{src:"/images/banner-icon-1-2.png",alt:"Awesome Image"}}),t._v(" "),n("img",{staticClass:"bubble-4",attrs:{src:"/images/banner-icon-1-4.png",alt:"Awesome Image"}}),t._v(" "),n("img",{staticClass:"bubble-5",attrs:{src:"/images/banner-icon-1-5.png",alt:"Awesome Image"}}),t._v(" "),n("img",{staticClass:"bubble-6",attrs:{src:"/images/banner-icon-1-6.png",alt:"Awesome Image"}}),t._v(" "),n("img",{staticClass:"banner-one__moc",attrs:{src:"/images/banner-moc-1.png",alt:"Banner Image"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"banner-one__content"},[n("div",{staticClass:"block-title"},[n("h1",{staticClass:"block-title__text"},[n("span",[t._v("The perfect blend of")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("productivity &")]),t._v(" "),n("br"),n("span",[t._v("self-improvement")])])]),t._v(" "),n("h2",{staticClass:"banner-one__text"},[t._v("\n            Pductivity combines productivity and self-improvement tools into\n            one smooth experience. Set goals, track habits, plan your days and\n            more.\n          ")]),t._v(" "),n("a",{staticClass:"banner-one__btn",attrs:{href:"#newsletter"}},[t._v("Get Started")])])])])])])}],!1,null,"63d5e5b8",null).exports),d=n(210),m=n(232),f={name:"ServiceOne",components:{ActivityIcon:m.a,TargetIcon:m.c,CalendarIcon:m.b}},h=(n(234),Object(r.a)(f,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"service-one",attrs:{id:"benefits"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Achieving your dreams starts with an")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("actionable plan")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 col-lg-6 col-md-12 col-sm-12 service-one__card"},[n("div",{staticClass:"service-one__single"},[n("h3",{staticClass:"service-one__title"},[n("a",{attrs:{href:"#"}},[t._v("Goals")])]),t._v(" "),n("p",{staticClass:"service-one__text"},[t._v("\n            We will help you identify and break goals into manageable chunks.\n            You will be able to plan, organize, and keep track of actions that\n            will help you progress toward your goals.\n          ")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-6 col-md-12 col-sm-12 service-one__card"},[n("div",{staticClass:"service-one__single"},[n("h3",{staticClass:"service-one__title"},[n("a",{attrs:{href:"#"}},[t._v("Habits")])]),t._v(" "),n("p",{staticClass:"service-one__text"},[t._v("\n            Use our tools to build good habits, reflect on your progress and\n            record your wins and lessons learned.\n          ")])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-6 col-md-12 col-sm-12 service-one__card"},[n("div",{staticClass:"service-one__single"},[n("h3",{staticClass:"service-one__title"},[n("a",{attrs:{href:"#"}},[t._v("Planning")])]),t._v(" "),n("p",{staticClass:"service-one__text"},[t._v("\n            Leverage our daily and weekly planning tools that will help you\n            plan your tasks, events, objectives and deadlines.\n          ")])])])])])])}],!1,null,"f35f7e9e",null).exports),C={name:"CTAThree"},x=(n(236),Object(r.a)(C,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cta-three",attrs:{id:"features"}},[n("img",{staticClass:"bubble-1",attrs:{src:"/images/banner-icon-1-6.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-2",attrs:{src:"/images/banner-icon-1-4.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("img",{staticClass:"bubble-3",attrs:{src:"/images/banner-icon-1-5.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"container"},[n("img",{staticClass:"cta-three__moc",attrs:{src:"/images/cta-moc-1-1.png",alt:"Awesome Image",loading:"lazy"}}),t._v(" "),n("div",{staticClass:"row no-gutters justify-content-end"},[n("div",{staticClass:"col-lg-6 col-md-12 col-sm-12 d-flex"},[n("div",{staticClass:"cta-three__content my-auto"},[n("div",{staticClass:"block-title"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Be Productive. "),n("br"),t._v("Be Awesome. "),n("br"),t._v("Be Happy")])])]),t._v(" "),n("h3",{staticClass:"cta-three__text"},[t._v("Designed for people who need a balance between productivity and self-improvement.")]),t._v(" "),n("ul",{staticClass:"cta-three__list"},[n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Interactive and easy-to-use 13 week road map to help you build the life you want! ")]),t._v(" "),n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Weekly planning template for goal-oriented habit development, giving you space to reflect on progress, learnings & steps for improvement.")]),t._v(" "),n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Daily planner to help you find more time, stay focused and make better decisions.")])]),t._v(" "),n("a",{staticClass:"cta-three__btn",attrs:{href:"#newsletter"}},[t._v("Learn More")])])])])])])}],!1,null,"f6c0b98e",null).exports),w={name:"Pricing"},y=(n(238),Object(r.a)(w,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pricing-one",attrs:{id:"pricing"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Get started within minutes ")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("and never look back")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"pricing-one__single"},[n("div",{staticClass:"pricing-one__top"},[n("h3",{staticClass:"pricing-one__title"},[t._v("$6.99")]),t._v(" "),n("p",{staticClass:"pricing-one__pack"},[t._v("Per Month")])]),t._v(" "),n("ul",{staticClass:"pricing-one__feature"},[n("li",{staticClass:"pricing-one__feature-item"},[t._v("Daily Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Weekly Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Habit Tracking")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Goal Roadmap")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Bucket List Roadmap")])]),t._v(" "),n("a",{staticClass:"pricing-one__btn",attrs:{href:"#newsletter"}},[t._v("Coming Soon")])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"pricing-one__single"},[n("div",{staticClass:"pricing-one__top"},[n("h3",{staticClass:"pricing-one__title"},[t._v("$18.99")]),t._v(" "),n("p",{staticClass:"pricing-one__pack"},[t._v("\n              Every 3 Months"),n("br"),n("br"),t._v("\n              ($6.33/Month)\n            ")])]),t._v(" "),n("ul",{staticClass:"pricing-one__feature"},[n("li",{staticClass:"pricing-one__feature-item"},[t._v("Daily Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Weekly Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Habit Tracking")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Goal Roadmap")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Bucket List Roadmap")])]),t._v(" "),n("a",{staticClass:"pricing-one__btn",attrs:{href:"#newsletter"}},[t._v("Coming Soon")])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"pricing-one__single"},[n("div",{staticClass:"pricing-one__top"},[n("h3",{staticClass:"pricing-one__title"},[t._v("$64.99")]),t._v(" "),n("p",{staticClass:"pricing-one__pack"},[t._v("\n              Anually "),n("br"),n("br"),t._v("\n              ($5.41/Month)\n            ")])]),t._v(" "),n("ul",{staticClass:"pricing-one__feature"},[n("li",{staticClass:"pricing-one__feature-item"},[t._v("Daily Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Weekly Planning")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Habit Tracking")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Goal Roadmap")]),t._v(" "),n("li",{staticClass:"pricing-one__feature-item"},[t._v("Bucket List Roadmap")])]),t._v(" "),n("a",{staticClass:"pricing-one__btn",attrs:{href:"#newsletter"}},[t._v("Coming Soon")])])])])])])}],!1,null,"05ea86de",null).exports),k=n(6),T=(n(27),n(259)),$={components:{BToast:T.a},data:function(){return{email:"",thankYou:!1,showRecaptchaWarning:!1}},methods:{submitForm:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.getResponse();case 3:if(e.sent.length){e.next=8;break}alert("You can't proceed!"),e.next=12;break;case 8:return e.next=10,fetch("https://submit-form.com/LuNcMtTI",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t.email})}).then((function(){t.thankYou=!0}));case 10:return e.next=12,t.$recaptcha.reset();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t.showRecaptchaWarning=!0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}},E=(n(241),Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-footer__subscribe"},[n("div",{staticClass:"container",attrs:{id:"newsletter"}},[t._m(0),t._v(" "),t.thankYou?t._e():n("form",{staticClass:"site-footer__subscribe-form",attrs:{method:"POST",action:"/"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"newsletter__input",attrs:{type:"text",name:"email",placeholder:"john@example.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("button",{attrs:{id:"newsletter-btn",type:"submit"}},[t._v("Subscribe")])]),t._v(" "),t.thankYou?n("div",{staticClass:"newsletter-thanks"},[n("p",[t._v("Thank you for subscribing to our newsletter!")])]):t._e(),t._v(" "),t.showRecaptchaWarning?n("div",{staticClass:"recaptcha-warning text-danger"},[n("p",[t._v("Please complete the recaptcha")])]):t._e(),t._v(" "),n("recaptcha",{staticClass:"center"})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block-title text-center"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("We are launching soon!")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Subscribe our newsletter")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("to get new updates")])])])}],!1,null,null,null)),S=E.exports,P=n(243),z=(n(244),{name:"Testimonial",components:{Swiper:P.Swiper,SwiperSlide:P.SwiperSlide},directives:{swiper:P.directive},data:function(){return{swiperOptions:{slidesPerView:1,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}}}}),A=(n(246),Object(r.a)(z,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"testimonials-style-one"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[n("div",{staticClass:"block-title"},[n("div",{staticClass:"block-title__text"},[n("span",[t._v("Start using Pductivity for free")])])]),t._v(" "),n("div",{staticClass:"single-testi-one"},[n("p",[t._v("\n            Still not convinced? You will get full access to all Pductivity\n            features for 14 days, then decide whether it is suitable for you.\n          ")]),t._v(" "),n("a",{staticClass:"banner-one__btn",attrs:{href:"/coming-soon"}},[t._v("Start Free Trial")])])]),t._v(" "),n("div",{staticClass:"col-lg-4 free-trial-list"},[n("ul",{staticClass:"cta-three__list"},[n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Easy to set-up\n          ")]),t._v(" "),n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Access all features\n          ")]),t._v(" "),n("li",{staticClass:"cta-three__list-item"},[n("i",{staticClass:"fa fa-check"}),t._v("Cancel any time\n          ")])])])])])])}],!1,null,"64e83f10",null).exports),M={components:{CTAThree:x,ServiceOne:h,Footer:d.a,BannerTwo:c,NavTwo:o.a,Pricing:y,EmailSubscribe:S,FreeTrial:A,BannerOne:v},head:function(){return{title:"Productivity and Self-improvement - Pductivity App",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Pductivity combines productivity and self-improvement into one smooth experience. Become the best you that you can be by leveraging our tools."}]}}},I=(n(248),Object(r.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavTwo",{attrs:{stickyDynamic:!0}}),t._v(" "),n("BannerOne"),t._v(" "),n("ServiceOne"),t._v(" "),n("CTAThree"),t._v(" "),n("Pricing"),t._v(" "),n("FreeTrial"),t._v(" "),n("EmailSubscribe"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null));e.default=I.exports}}]);