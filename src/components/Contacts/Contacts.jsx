import React from "react";
import "./contacts.css";
import "./contacts-mobile.css";

const Contacts = () => {
  return (
    <div class="main-cont">
      <div class="main-contacts">
        <div class="contacts">
          <div class="contacts-numbers">
            <div class="number-title">Телефоны</div>
            <div class="numbers-box">
              <div class="box-numbers">
              <a href="tel: 8-130-442-95-33" class="number">8-130-442-95-33</a>
                <div class="number-bottom">Для г.Тюмень</div>
              </div>
              <div class="box-numbers">
              <a href="tel: 8-401-581-55-14" class="number">8-401-581-55-14</a>
                <div class="number-bottom">Для иногородних клиентов</div>
              </div>
              <div class="box-numbers">
                <a href="tel: 8-700-041-15-72" class="number">8-700-041-15-72</a>
                <div class="number-bottom">WhatsApp, Viber, Telegram</div>
              </div>
            </div>
            <div class="contacts-links">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="contacts-places">
            <div class="contacts-address">
              <div class="address-title">Адрес</div>
              <div class="address">г.Тюмень, ул. Ланории Грейменсии, ТРЦ Титан</div>
            </div>
            <div class="contacts-post">
              <div class="post-title">E-mail</div>
              <a href="mailto:MissLansha@lanoriya.com?subject=Вопрос по аренде автомобиля" class="post">MissLansha@lanoriya.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="yandex-box">
        <iframe class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A9cd659567451432d48493ef5ab40e745dd2786f85c98b6fdccc6e2df39307ee5&amp;source=constructor" width="350" height="350" frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default Contacts;