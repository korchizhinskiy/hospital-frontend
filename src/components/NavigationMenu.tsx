import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';

const NavigationMenu: Component = () => {
  return (
    <header class="header">
      <a href="#" class="header_logo">Больница номер 97</a>
      <div class="header_links">
        <NavLink href="/" class="link">Главная</NavLink>
        <NavLink href="/doctors_list" class="link">Врачи</NavLink>
        <NavLink href="/visit" class="link">Запись</NavLink>
        <NavLink href="patients_list" class="link">Архив</NavLink>
      </div>
    </header>
  )
}

export default NavigationMenu;
