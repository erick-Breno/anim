import outsideClick from "./outsideclick.js";

export default class MenuMobile {
 constructor(btnMenu, menuList, events) {
  this.menuBtn = document.querySelector(btnMenu);
  this.menuList = document.querySelector(menuList);
  this.activeClass = "active";

  // define o touchstart e click como argumento padrão de events caso o usuário não defina
  if (events === undefined) this.events = ["click", "touchstart"];
  else this.events === events;

  this.openMenu = this.openMenu.bind(this);
 }

 openMenu(event) {
  event.preventDefault();
  this.menuList.classList.add(this.activeClass);
  this.menuBtn.classList.add(this.activeClass);
  outsideClick(this.menuList, this.events, () => {
   this.menuList.classList.remove(this.activeClass);
   this.menuBtn.classList.remove(this.activeClass);
  });
 }

 addMenuMobileEvents() {
  this.events.forEach((evento) =>
   this.menuBtn.addEventListener(evento, this.openMenu)
  );
 }

 init() {
  if (this.menuBtn && this.menuList) {
   this.addMenuMobileEvents();
  }
  return this;
 }
}
