import React, { useState } from "react";
import "./business.css";
import BMW_x7 from "../imgs/katalog/business/BMW_x7.jpg";
import BMW_4 from "../imgs/katalog/business/BMW_4.jpg";
import BMW_x5 from "../imgs/katalog/business/BMW_x5.jpg";


const Business = () => {
  const [active, setActive] = useState(false);
  function handleClick() {
    const modal = document.getElementById('modal-id');
    if (modal) {
      modal.classList.toggle('active');
      setActive(!active);
    }
  }
  return (
    <div class="carousel_card">
    <div class="container">
      <h3 class="choose_title carousel_text">Бизнес</h3>
    </div>
    <div class="carousel-flex">
      <div class="carousel-item_business">
        <a id="modal-active" onClick={handleClick}><img src={BMW_x7} alt=""/>
          <div class="business_descript_flex">
            <span class="business_descript_down">2022</span>
            <span class="business_descript_down">Полный</span>
            <span class="business_descript_down">249 л.с</span>
          </div>
        </a>
        <span class="business_descript">BMW X7 30d I (G07)</span>
        <span class="business_descript_sum">8000 ₽/сут.</span>
      </div>
      <div class="carousel-item_business">
        <a id="modal-active" onClick={handleClick}><img src={BMW_4} alt=""/>
          <div class="business_descript_flex">
            <span class="business_descript_down">2022</span>
            <span class="business_descript_down">Задний</span>
            <span class="business_descript_down">184 л.с</span>
          </div>
        </a>
        <span class="business_descript">BMW 4 420i G22</span>
        <span class="business_descript_sum">4200 ₽/сут.</span>
      </div>
      <div class="carousel-item_business">
        <a  id="modal-active" onClick={handleClick}><img src={BMW_x5} alt=""/>
          <div class="business_descript_flex">
            <span class="business_descript_down">2021</span>
            <span class="business_descript_down">Полный</span>
            <span class="business_descript_down">249 л.с</span>
          </div>
        </a>
        <span class="business_descript">BMW X5 30d IV (G05)</span>
        <span class="business_descript_sum">7500 ₽/сут.</span>
      </div>
    </div>
  </div>
  );
};

export default Business;
