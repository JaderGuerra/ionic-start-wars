(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"69wn":function(t,e,n){"use strict";n.r(e),n.d(e,"CharactersPageModule",(function(){return K}));var s=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),o=n("tyNb"),a=n("fXoL"),c=n("dU+L"),b=n("mrSG");let l=(()=>{class t{constructor(t){this.loadingCTL=t}presentLoading(){return Object(b.a)(this,void 0,void 0,(function*(){return this.loading=yield this.loadingCTL.create({cssClass:"my-custom-class",message:"Cargando..."}),this.loading.present()}))}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(i.v))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,e){if(1&t&&(a.Kb(0,"li"),a.fc(1),a.Jb()),2&t){const t=e.$implicit;a.xb(1),a.gc(t.title)}}let p=(()=>{class t{constructor(t){this.starWarsSVC=t,this.films=[]}ngOnInit(){this.getNameFilms()}getNameFilms(){this.filmsName.forEach(t=>{this.starWarsSVC.httpSVC.get(t).subscribe(t=>{this.films.push(t)})})}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(c.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-name-films"]],inputs:{filmsName:"filmsName"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&a.ec(0,h,2,1,"li",0),2&t&&a.Zb("ngForOf",e.films)},directives:[s.h],styles:[""]}),t})(),u=(()=>{class t{transform(t,e){return e?t.filter(t=>{const n=t.gender.toUpperCase().includes(e.toUpperCase());return t.eye_color.toUpperCase().includes(e.toUpperCase())||n}):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Gb({name:"SearchPipe",type:t,pure:!0}),t})();function f(t,e){if(1&t&&(a.Kb(0,"ion-col",8),a.Kb(1,"ion-card"),a.Kb(2,"ion-card-header"),a.Kb(3,"ion-card-title",9),a.fc(4),a.Jb(),a.Jb(),a.Kb(5,"ion-card-content"),a.Kb(6,"ion-grid"),a.Kb(7,"ion-row",10),a.Kb(8,"ion-col",11),a.Kb(9,"p",9),a.fc(10," Eye color : "),a.Kb(11,"span"),a.fc(12),a.Jb(),a.Jb(),a.Jb(),a.Kb(13,"ion-col",11),a.Kb(14,"p",9),a.fc(15," Gender : "),a.Kb(16,"span"),a.fc(17),a.Jb(),a.Jb(),a.Jb(),a.Kb(18,"ion-col",12),a.Kb(19,"p",9),a.fc(20,"Films:"),a.Jb(),a.Kb(21,"div"),a.Ib(22,"app-name-films",13),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t){const t=e.$implicit;a.xb(4),a.hc(" ",t.name," "),a.xb(8),a.hc("",t.eye_color," "),a.xb(5),a.hc("",t.gender," "),a.xb(5),a.Zb("filmsName",t.films)}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n){this.ac=t,this.starwarsSVC=e,this._loading=n,this.characters=[],this._loading.presentLoading()}ngOnInit(){this.charactersSeleccionados()}charactersSeleccionados(){const t=this.ac.snapshot.paramMap.get("id");this.starwarsSVC.getCharacters(t).subscribe(t=>{this.showCharacters(t.characters)})}showCharacters(t){t.map(t=>{this.starwarsSVC.httpSVC.get(t).subscribe(t=>{var e,n;this.characters.push(t),null===(n=null===(e=this._loading)||void 0===e?void 0:e.loading)||void 0===n||n.dismiss()})})}buscar(t){this.value=t.detail.value}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(o.a),a.Hb(c.a),a.Hb(l))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-characters"]],decls:15,vars:4,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","films"],[1,"ion-justify-content-end"],["size","12","size-md","4"],["inputmode","search","placeholder","Search...",3,"ionChange"],["class","characters","size","12","size-sm","6","size-lg","4",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-lg","4",1,"characters"],[1,"strong"],[1,"ion-align-items-center"],["size","6"],["size","12"],[3,"filmsName"]],template:function(t,e){1&t&&(a.Kb(0,"ion-header",0),a.Kb(1,"ion-toolbar",1),a.Kb(2,"ion-buttons",2),a.Ib(3,"ion-back-button",3),a.Jb(),a.Kb(4,"ion-title"),a.fc(5,"characters"),a.Jb(),a.Jb(),a.Kb(6,"ion-grid"),a.Kb(7,"ion-row",4),a.Kb(8,"ion-col",5),a.Kb(9,"ion-searchbar",6),a.Sb("ionChange",(function(t){return e.buscar(t)})),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Kb(10,"ion-content"),a.Kb(11,"ion-grid"),a.Kb(12,"ion-row"),a.ec(13,f,23,4,"ion-col",7),a.Vb(14,"SearchPipe"),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.xb(13),a.Zb("ngForOf",a.Wb(14,1,e.characters,e.value)))},directives:[i.m,i.s,i.e,i.b,i.c,i.r,i.l,i.p,i.j,i.q,i.x,i.k,s.h,i.f,i.h,i.i,i.g,p],pipes:[u],styles:[".strong[_ngcontent-%COMP%]{font-weight:700}.strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(d)],o.i]}),t})();var g=n("j1ZV");let J=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),K=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[s.b,r.a,i.t,m,g.a,J]]}),t})()}}]);