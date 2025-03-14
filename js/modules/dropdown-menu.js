import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
 constructor(menu, events) {
  this.dropdownMenus = document.querySelectorAll(menu);

  // define touchstart e click como argumento padrao de events caso o usuario nao defina
  if (events === undefined) this.events = ["touchstart", "click"];
  else this.events = events;

  this.activeClass = "active";
  this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
 }

 // ativa o dropdown menu e adiciona a funcao que observa o clique fora dele
 activeDropdownMenu(event) {
  event.preventDefault();
  const element = event.currentTarget;
  element.classList.add(this.activeClass);
  outsideClick(element, this.events, () => {
   element.classList.remove("active");
  });
 }

 // adiciona os eventos ao dropdown menu
 addDropdownMenus() {
  this.dropdownMenus.forEach((menu) => {
   this.events.forEach((userEvent) => {
    menu.addEventListener(userEvent, this.activeDropdownMenu);
   });
  });
 }

 init() {
  if (this.dropdownMenus.length) {
   this.addDropdownMenus();
  }
  return this;
 }
}
