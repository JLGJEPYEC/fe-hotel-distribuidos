"use strict";(self.webpackChunkappDesarrollo=self.webpackChunkappDesarrollo||[]).push([[891],{3891:(g,s,a)=>{a.r(s),a.d(s,{ReservationModule:()=>p});var l=a(9808),n=a(4100),e=a(5e3),v=a(6156);const d=[{path:"",component:(()=>{class t{constructor(i){this.reservationServices=i}ngOnInit(){console.log(this.reservationServices.reservationSelected)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(v.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reservation"]],decls:32,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","py-1"],[1,"container-fluid"],[1,"collapse","navbar-collapse","d-flex","flex-row-reverse"],[1,"navbar-nav"],["aria-current","page","href","/reservation",1,"nav-link","active"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid","row"],[1,"col-4",2,"color","white"],[1,"col-8",2,"color","white"],[1,"col-4"],[1,"fw-light","m-0",2,"font-size","12px"],[1,"m-0"]],template:function(i,r){1&i&&(e.TgZ(0,"div")(1,"nav",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"a",4),e._uU(6,"abc@gmail.com"),e.qZA()()()()(),e.TgZ(7,"nav",5)(8,"div",6)(9,"div",7),e._uU(10,"a"),e.qZA(),e.TgZ(11,"div",8)(12,"p"),e._uU(13,"The Westin Lima Hotel & Centro de Convenciones "),e.qZA(),e.TgZ(14,"p"),e._uU(15," Calle Las Begonias 450. San Isidro, Lima 27 Peru "),e.qZA(),e.TgZ(16,"p"),e._uU(17," EXCLUSIVE AMENITIES Service Request Spa Fitness Internet "),e.qZA()()()(),e.TgZ(18,"nav",0)(19,"div",6)(20,"div",9)(21,"p",10),e._uU(22,"Fechas"),e.qZA(),e.TgZ(23,"p",11),e._uU(24,"22/06/2022 - 26/06/2022"),e.qZA()(),e.TgZ(25,"div",9)(26,"p",10),e._uU(27,"Habitaciones e Invitados"),e.qZA(),e.TgZ(28,"p",11),e._uU(29,"1 Habitacion: 2 Adultos, 2 ni\xf1os"),e.qZA()(),e._UZ(30,"div",9),e.qZA()()(),e._UZ(31,"router-outlet"))},directives:[n.lC],styles:[""]}),t})(),children:[{path:"reviewDetail",component:(()=>{class t{constructor(i){this.reservationServices=i,this.reservationServices.reservationSelected.email="abc@gmail.com",this.reservationServices.reservationSelected.id_room="A5",this.reservationServices.reservationSelected.number_adults=2,this.reservationServices.reservationSelected.number_children=2,this.reservationServices.reservationSelected.date_in="2022-06-22T00:00:00.000Z",this.reservationServices.reservationSelected.date_out="2022-06-28T00:00:00.000Z",this.reservationServices.reservationSelected.payment=256}ngOnInit(){}reservar(){this.reservationServices.createReservation(this.reservationServices.reservationSelected).subscribe(i=>{console.log(i)},i=>{console.log(i)}),alert("pago realizado correctamente")}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(v.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reservation-details"]],decls:36,vars:0,consts:[[1,"mt-5","px-4"],[1,"card","w-75","my-4"],[1,"card-body","row","p-0","p-0","pb-2"],[1,"col-7"],["src","assets/rooms/camaking.webp","alt","",1,"float-start"],[1,"col-3","px-5","py-1"],[1,"py-4"],[1,"m-0","py-3"],[1,"row","px-5","py-3"],[1,"col"],[1,"btn","btn-primary","btn-sl","rounded-pill",3,"click"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"REVIEW RESERVATION DETAILS"),e.qZA(),e.TgZ(3,"div",1)(4,"div",2)(5,"div",3),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",5)(8,"div",6),e._uU(9," 1 Cama King, Habitacion de Lujo "),e.qZA(),e.TgZ(10,"p",7)(11,"strong"),e._uU(12,"Check In:"),e.qZA(),e._uU(13," 14/06/2022 "),e.qZA(),e.TgZ(14,"p",7)(15,"strong"),e._uU(16,"Check Out:"),e.qZA(),e._uU(17," 18/06/2022 "),e.qZA(),e.TgZ(18,"p",7)(19,"strong"),e._uU(20,"Room(s):"),e.qZA(),e._uU(21," 1 Habitacion "),e.qZA(),e.TgZ(22,"p",7)(23,"strong"),e._uU(24,"Guest per room:"),e.qZA(),e._uU(25," 1 Persona "),e.qZA()()(),e.TgZ(26,"div",8)(27,"div",9)(28,"strong"),e._uU(29,"Summary of Charges : "),e.qZA()(),e.TgZ(30,"div",9),e._uU(31," 1 x 176 USD"),e.qZA(),e.TgZ(32,"div",9)(33,"button",10),e.NdJ("click",function(){return r.reservar()}),e._uU(34,"Pagar"),e.qZA()()()()(),e._uU(35,"\naaa\naa"))},styles:[""]}),t})()},{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rooms"]],decls:115,vars:0,consts:[[1,"mt-5","px-4"],[1,"card","w-100","my-4"],[1,"card-header","border-0","bg-white"],[1,"fw-bold","m-0"],[1,"card-body","row","p-0","p-0","pb-2"],[1,"col-3"],["src","assets/rooms/camaking.webp","alt","",1,"float-start","px-3",2,"width","269px","height","180px"],[1,"col-9","px-5"],[1,"row","align-items-center","border-bottom","border-primary",2,"height","90px"],[1,"col-4"],[1,"col-4",2,"text-align","end"],[1,"fw-bold","fs-2"],[1,"col-4",2,"text-align","center"],["routerLink","reviewDetail"],["type","button",1,"btn","btn-primary"],[1,"row","align-items-center",2,"height","90px"],[1,"card","w-100"],[1,"card-body","row","p-0","pb-2"],["src","assets/rooms/camaKingGranDeluxe.webp","alt","",1,"float-start","px-3",2,"width","269px","height","180px"],["src","assets/rooms/camasQueen.webp","alt","",1,"float-start","px-3",2,"width","269px","height","180px"],["src","assets/rooms/camasQueenGranDeluxe.webp","alt","",1,"float-start","px-3",2,"width","269px","height","180px"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"1 Habitacion - 1 Cama King, Habitacion de Lujo"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.qZA(),e.TgZ(8,"div",7)(9,"div",8)(10,"div",9),e._uU(11,"Member Flexible Rate"),e.qZA(),e.TgZ(12,"div",10)(13,"p",11),e._uU(14,"176"),e.qZA(),e._uU(15," USD/NIGHT "),e.qZA(),e.TgZ(16,"div",12)(17,"a",13)(18,"button",14),e._uU(19,"Seleccionar"),e.qZA()()()(),e.TgZ(20,"div",15)(21,"div",9),e._uU(22,"Flexible Rate"),e.qZA(),e.TgZ(23,"div",10)(24,"p",11),e._uU(25,"190"),e.qZA(),e._uU(26," USD/NIGHT "),e.qZA(),e.TgZ(27,"div",12)(28,"button",14),e._uU(29,"Seleccionar"),e.qZA()()()()()(),e.TgZ(30,"div",16)(31,"div",2)(32,"h3",3),e._uU(33,"1 Habitacion - 1 Cama King, Habitacion de Lujo"),e.qZA()(),e.TgZ(34,"div",17)(35,"div",5),e._UZ(36,"img",18),e.qZA(),e.TgZ(37,"div",7)(38,"div",8)(39,"div",9),e._uU(40,"Member Flexible Rate"),e.qZA(),e.TgZ(41,"div",10)(42,"p",11),e._uU(43,"176"),e.qZA(),e._uU(44," USD/NIGHT "),e.qZA(),e.TgZ(45,"div",12)(46,"button",14),e._uU(47,"Seleccionar"),e.qZA()()(),e.TgZ(48,"div",15)(49,"div",9),e._uU(50,"Flexible Rate"),e.qZA(),e.TgZ(51,"div",10)(52,"p",11),e._uU(53,"329"),e.qZA(),e._uU(54," USD/NIGHT "),e.qZA(),e.TgZ(55,"div",12)(56,"button",14),e._uU(57,"Seleccionar"),e.qZA()()()()()(),e.TgZ(58,"div",1)(59,"div",2)(60,"h3",3),e._uU(61,"1 Habitacion - 1 Cama King, Habitacion de Lujo"),e.qZA()(),e.TgZ(62,"div",17)(63,"div",5),e._UZ(64,"img",19),e.qZA(),e.TgZ(65,"div",7)(66,"div",8)(67,"div",9),e._uU(68,"Member Flexible Rate"),e.qZA(),e.TgZ(69,"div",10)(70,"p",11),e._uU(71,"322"),e.qZA(),e._uU(72," USD/NIGHT "),e.qZA(),e.TgZ(73,"div",12)(74,"button",14),e._uU(75,"Seleccionar"),e.qZA()()(),e.TgZ(76,"div",15)(77,"div",9),e._uU(78,"Flexible Rate"),e.qZA(),e.TgZ(79,"div",10)(80,"p",11),e._uU(81,"329"),e.qZA(),e._uU(82," USD/NIGHT "),e.qZA(),e.TgZ(83,"div",12)(84,"a",13)(85,"button",14),e._uU(86,"Seleccionar"),e.qZA()()()()()()(),e.TgZ(87,"div",16)(88,"div",2)(89,"h3",3),e._uU(90,"1 Habitacion - 1 Cama King, Habitacion de Lujo"),e.qZA()(),e.TgZ(91,"div",17)(92,"div",5),e._UZ(93,"img",20),e.qZA(),e.TgZ(94,"div",7)(95,"div",8)(96,"div",9),e._uU(97,"Member Flexible Rate"),e.qZA(),e.TgZ(98,"div",10)(99,"p",11),e._uU(100,"322"),e.qZA(),e._uU(101," USD/NIGHT "),e.qZA(),e.TgZ(102,"div",12)(103,"button",14),e._uU(104,"Seleccionar"),e.qZA()()(),e.TgZ(105,"div",15)(106,"div",9),e._uU(107,"Flexible Rate"),e.qZA(),e.TgZ(108,"div",10)(109,"p",11),e._uU(110,"329"),e.qZA(),e._uU(111," USD/NIGHT "),e.qZA(),e.TgZ(112,"div",12)(113,"button",14),e._uU(114,"Seleccionar"),e.qZA()()()()()()())},directives:[n.yS],styles:[""]}),t})()}]}];let u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[n.Bz.forChild(d)],n.Bz]}),t})();var Z=a(3391),c=a(3075);let p=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,u,Z.x,n.Bz,c.u5,c.UX]]}),t})()}}]);