"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4593],{4593:(D,d,r)=>{r.r(d),r.d(d,{ModificarEventoPageModule:()=>F});var u=r(177),a=r(4341),i=r(4742),c=r(8986),h=r(467),v=r(3114),e=r(4438),f=r(1626),g=r(2651);function p(t,s){if(1&t&&(e.j41(0,"ion-item"),e.nrm(1,"ion-img",14),e.k0s()),2&t){const l=e.XpG();e.R7$(),e.Y8G("src",l.imagenEvento)}}function E(t,s){if(1&t&&(e.j41(0,"ion-item"),e.nrm(1,"ion-img",14),e.k0s()),2&t){const l=e.XpG();e.R7$(),e.Y8G("src",l.imagenEvento)}}const b=[{path:"",component:(()=>{var t;class s{constructor(n,o,m,P,j,k,y){this.menucontroller=n,this.httpclient=o,this.router=m,this.apievento=P,this.alertcontroller=j,this.fBuilder=k,this.activated=y,this.imagenEvento="",this.eventoMod={id:0,nombre:"",lugar:"",fecha:"",descripcion:"",imagenEvento:""},this.activated.queryParams.subscribe(R=>{this.evento=JSON.parse(R.eventos)}),this.modificarEventoForm=this.fBuilder.group({nombre:new a.MJ(""),lugar:new a.MJ(""),fecha:new a.MJ(""),descripcion:new a.MJ(""),imagenEvento:new a.MJ("")})}ModificarEvento(){this.modificarEventoForm.valid&&this.apievento.getByEventoName(this.modificarEventoForm.value.nombre).subscribe(n=>{this.eventoData=n,this.evento.nombre=this.modificarEventoForm.value.nombre||this.evento.nombre,this.evento.lugar=this.modificarEventoForm.value.lugar||this.evento.lugar,this.evento.fecha=this.modificarEventoForm.value.fecha||this.evento.fecha,this.evento.descripcion=this.modificarEventoForm.value.descripcion||this.evento.descripcion,this.imagenEvento&&(this.evento.imagenEvento=this.imagenEvento),this.apievento.putEventos(this.evento).subscribe(),this.modificarEventoForm.reset(),this.mostrarMensaje(),this.router.navigateByUrl("/eventos")})}mostrarMensaje(){var n=this;return(0,h.A)(function*(){(yield n.alertcontroller.create({header:"Evento a modificar",message:"Evento "+n.evento.nombre+"modificado",buttons:["OK"]})).present()})()}obtenerData(){this.apievento.getByEventoName(this.evento.nombre).subscribe(n=>{var o;this.eventoData=n,this.evento.id=this.eventoData[0].id,this.evento.nombre=this.eventoData[0].nombre,this.evento.lugar=this.eventoData[0].lugar,this.evento.fecha=this.eventoData[0].fecha,this.evento.descripcion=this.eventoData[0].descripcion,this.imagenEvento||(this.evento.imagenEvento=this.eventoData[0].imagenEvento,this.imagenEvento=null!==(o=this.evento.imagenEvento)&&void 0!==o?o:""),console.log("evento: ",this.evento.nombre),console.log("id: ",this.evento.id)})}mostrarMenu(){this.menucontroller.open("first")}seleccionarImagen(){var n=this;return(0,h.A)(function*(){const o=yield v.i7.getPhoto({quality:90,allowEditing:!0,resultType:v.LK.Base64,source:v.ru.Photos});n.imagenEvento="data:imagen/jpeg;base64,"+o.base64String})()}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(i._t),e.rXU(f.Qq),e.rXU(c.Ix),e.rXU(g.f),e.rXU(i.hG),e.rXU(a.ok),e.rXU(c.nX))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-modificar-evento"]],decls:37,vars:13,consts:[[3,"translucent"],["slot","end"],[3,"click"],["slot","end","name","menu-outline","size","large"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],[3,"formGroup"],["type","text","formControlName","nombre","label","Nombre del evento: ","labelPlacement","floating",3,"placeholder"],["type","text","formControlName","lugar","label","Lugar del evento: ","labelPlacement","floating",3,"placeholder"],["type","text","formControlName","fecha","label","Fecha del evento: ","labelPlacement","floating",3,"placeholder"],["type","text","formControlName","descripcion","label","Descripcion del evento: ","labelPlacement","floating",3,"placeholder"],["expand","block","fill","solid","shape","round",3,"click"],[3,"src"]],template:function(n,o){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.bIt("click",function(){return o.mostrarMenu()}),e.nrm(4,"ion-icon",3),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6,"Modificar evento"),e.k0s()()(),e.j41(7,"ion-content",4)(8,"ion-header",5)(9,"ion-toolbar")(10,"ion-title",6),e.EFF(11,"Evento"),e.k0s()()(),e.j41(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title"),e.EFF(15,"Datos del evento"),e.k0s(),e.j41(16,"ion-card-subtitle"),e.EFF(17),e.k0s(),e.j41(18,"ion-card-subtitle"),e.EFF(19),e.k0s(),e.j41(20,"ion-card-subtitle"),e.EFF(21),e.k0s(),e.j41(22,"ion-card-subtitle"),e.EFF(23),e.k0s()(),e.DNE(24,p,2,1,"ion-item",7),e.k0s(),e.j41(25,"form",8)(26,"ion-item"),e.nrm(27,"ion-input",9),e.k0s(),e.j41(28,"ion-item"),e.nrm(29,"ion-input",10),e.k0s(),e.j41(30,"ion-item"),e.nrm(31,"ion-input",11),e.k0s(),e.j41(32,"ion-item"),e.nrm(33,"ion-input",12),e.k0s(),e.DNE(34,E,2,1,"ion-item",7),e.k0s(),e.j41(35,"ion-button",13),e.bIt("click",function(){return o.ModificarEvento()}),e.EFF(36," Modificar evento "),e.k0s()()),2&n&&(e.Y8G("translucent",!0),e.R7$(7),e.Y8G("fullscreen",!0),e.R7$(10),e.SpI("Nombre de evento: ",o.evento.nombre,""),e.R7$(2),e.SpI("Lugar del evento: ",o.evento.lugar,""),e.R7$(2),e.SpI("Fecha del evento: ",o.evento.fecha,""),e.R7$(2),e.SpI("Descripcion: ",o.evento.descripcion,""),e.R7$(),e.Y8G("ngIf",o.imagenEvento),e.R7$(),e.Y8G("formGroup",o.modificarEventoForm),e.R7$(2),e.FS9("placeholder",o.evento.nombre),e.R7$(2),e.FS9("placeholder",o.evento.lugar),e.R7$(2),e.FS9("placeholder",o.evento.fecha),e.R7$(2),e.FS9("placeholder",o.evento.descripcion),e.R7$(),e.Y8G("ngIf",o.imagenEvento))},dependencies:[u.bT,a.qT,a.BC,a.cb,a.j4,a.JD,i.Jm,i.QW,i.b_,i.ME,i.HW,i.tN,i.W9,i.eU,i.iq,i.KW,i.$w,i.uz,i.BC,i.ai,i.Gw]}),s})()}];let M=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(b),c.iI]}),s})(),F=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.MD,a.YN,a.X1,i.bv,M]}),s})()}}]);