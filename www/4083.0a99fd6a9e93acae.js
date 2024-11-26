"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4083],{4083:(P,g,i)=>{i.r(g),i.d(g,{CrearEventoPageModule:()=>E});var d=i(177),r=i(4341),o=i(4742),c=i(8986),v=i(467),m=i(3114),e=i(4438),h=i(2651);function p(t,l){if(1&t&&(e.j41(0,"ion-item"),e.nrm(1,"ion-img",17),e.k0s()),2&t){const s=e.XpG();e.R7$(),e.Y8G("src",s.imagenEvento)}}const f=[{path:"",component:(()=>{var t;class l{constructor(n,a,u,C){this.apievento=n,this.alertcontroller=a,this.router=u,this.fBuilder=C,this.imagenEvento="",this.newevento={nombre:"",fecha:"",lugar:"",descripcion:"",imagenEvento:""},this.eventoForm=this.fBuilder.group({nombre:new r.MJ(""),fecha:new r.MJ(""),lugar:new r.MJ(""),descripcion:new r.MJ(""),imagenEvento:new r.MJ("")})}ngOnInit(){}seleccionarImagen(){var n=this;return(0,v.A)(function*(){const a=yield m.i7.getPhoto({quality:90,allowEditing:!0,resultType:m.LK.Base64,source:m.ru.Photos});n.imagenEvento="data:imagen/jpeg;base64,"+a.base64String})()}crearevento(){this.eventoForm.valid&&this.apievento.getByEventoName(this.eventoForm.value.nombre).subscribe(n=>{this.eventodata=n,this.eventodata.length>0?(this.eventoForm.reset(),this.errorDuplicidad()):(this.newevento.nombre=this.eventoForm.value.nombre,this.newevento.lugar=this.eventoForm.value.lugar,this.newevento.fecha=this.eventoForm.value.fecha,this.newevento.descripcion=this.eventoForm.value.descripcion,this.apievento.postevento(this.newevento).subscribe(),this.eventoForm.reset(),this.mostrarMensaje(),this.router.navigateByUrl("/eventos"))})}mostrarMensaje(){var n=this;return(0,v.A)(function*(){(yield n.alertcontroller.create({header:"Evento creado",message:n.newevento.nombre,buttons:["OK"]})).present()})()}errorDuplicidad(){var n=this;return(0,v.A)(function*(){(yield n.alertcontroller.create({header:"Error...",message:n.newevento.nombre+" ya est\xe1 registrado",buttons:["OK"]})).present()})()}}return(t=l).\u0275fac=function(n){return new(n||t)(e.rXU(h.f),e.rXU(o.hG),e.rXU(c.Ix),e.rXU(r.ok))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-crear-evento"]],decls:30,vars:5,consts:[[3,"translucent"],["color","warning"],["slot","start"],["defaultHref","/home","text",""],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"formGroup"],["type","text","placeholder","Nombre del evento...","formControlName","nombre","label","Nombre del evento: ","labelPlacement","floating"],["type","text","formControlName","fecha","label","Fecha del evento: ","labelPlacement","floating"],["type","text","placeholder","Lugar del evento..","formControlName","lugar","label","Lugar del evento:","labelPlacement","floating"],["type","text","formControlName","descripcion","label","Descripcion del evento:","labelPlacement","floating"],["expand","block",3,"click"],[4,"ngIf"],[2,"text-align","center","margin-top","30px"],["shape","round",3,"click","disabled"],["src","assets/imagen_appGestores.png",1,"imagen"],[3,"src"]],template:function(n,a){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Crear evento"),e.k0s()()(),e.j41(6,"ion-content",4)(7,"ion-header",5)(8,"ion-toolbar")(9,"ion-title",6),e.EFF(10,"Crear evento"),e.k0s()()(),e.j41(11,"form",7)(12,"ion-item"),e.nrm(13,"ion-input",8),e.k0s(),e.j41(14,"ion-item"),e.nrm(15,"ion-input",9),e.k0s(),e.j41(16,"ion-item"),e.nrm(17,"ion-input",10),e.k0s(),e.j41(18,"ion-item"),e.nrm(19,"ion-input",11),e.k0s(),e.j41(20,"ion-item")(21,"ion-button",12),e.bIt("click",function(){return a.seleccionarImagen()}),e.EFF(22,"Seleccionar Imagen del evento (Opcional)"),e.k0s()(),e.DNE(23,p,2,1,"ion-item",13),e.j41(24,"div",14)(25,"ion-button",15),e.bIt("click",function(){return a.crearevento()}),e.EFF(26," Crear Evento "),e.k0s()()(),e.j41(27,"ion-content")(28,"ion-card"),e.nrm(29,"ion-img",16),e.k0s()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(6),e.Y8G("fullscreen",!0),e.R7$(5),e.Y8G("formGroup",a.eventoForm),e.R7$(12),e.Y8G("ngIf",a.imagenEvento),e.R7$(2),e.Y8G("disabled",!a.eventoForm.valid))},dependencies:[d.bT,r.qT,r.BC,r.cb,r.j4,r.JD,o.Jm,o.QW,o.b_,o.W9,o.eU,o.KW,o.$w,o.uz,o.BC,o.ai,o.Gw,o.el]}),l})()}];let b=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(f),c.iI]}),l})(),E=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.MD,r.YN,r.X1,o.bv,b]}),l})()}}]);