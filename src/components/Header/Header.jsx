import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";
import viber from "../imgs/viber.svg";
import telegram from "../imgs/telegram.svg";
import "./header.css";
import "./header-mobile.css";

const Header = () => {
  return (
  <header class="header">
    <div class="container">
      <div class="logo_menu">
        <div class="logo">
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <nav class="menu">
          <ul>
            <li class="menu-item">
              <Link to="/">Главная</Link>
            </li>
            <li class="menu-item">
              <Link to="/conditions">Условия</Link>
            </li>
            <li class="menu-item">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="menu_info">
        <ul>
          <li class="menu_info-item">
            <a href="https://t.me/xYaLanaya">
              <img src={telegram} alt=""/>
            </a>
          </li>
          <li class="menu_info-item">
            <a href="viber://add?number=79504925996">
              <img src={viber} alt=""/>
            </a>
          </li>
        </ul>
        <span class="phone">
          <a href="tel: +79504925996">+7 (950) 492-59-96</a>
        </span>
      </div>
    </div>
  </header>
  );
};

export default Header;
