import React, { useState } from "react";
import "./sports-cars.css";
import BMW_5 from "../imgs/katalog/sportcars/BMW_5.jpg";
import Lexus_IS from "../imgs/katalog/sportcars/Lexus_IS_F.jpg";
import MercBenz from "../imgs/katalog/sportcars/Mercedes-Benz_CLA_AMG_45.jpg";

const SportsCars = () => {
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
        <h3 class="choose_title carousel_text">Спорткары</h3>
      </div>
      <div class="carousel-flex">
        <div class="carousel-item_sports-cars">
          <a id="modal-active" onClick={handleClick}><img src={BMW_5} alt="" />
            <div class="sports-cars_descript_flex">
              <span class="sports-cars_descript_down">2019</span>
              <span class="sports-cars_descript_down">Полный</span>
              <span class="sports-cars_descript_down">400 л.с</span>
            </div>
          </a>
          <span class="sports-cars_descript">BMW 5 серии M550d xDrive</span>
          <span class="sports-cars_descript_sum">15000 ₽/сут.</span>
        </div>
        <div class="carousel-item_sports-cars">
          <a id="modal-active" onClick={handleClick}><img src={Lexus_IS} alt="" />
            <div class="sports-cars_descript_flex">
              <span class="sports-cars_descript_down">2011</span>
              <span class="sports-cars_descript_down">Задний</span>
              <span class="sports-cars_descript_down">423 л.с</span>
            </div>
          </a>
          <span class="sports-cars_descript">Lexus IS F</span>
          <span class="sports-cars_descript_sum">10000 ₽/сут.</span>
        </div>
        <div class="carousel-item_sports-cars">
          <a id="modal-active" onClick={handleClick}><img src={MercBenz} alt="" />
            <div class="sports-cars_descript_flex">
              <span class="sports-cars_descript_down">2014</span>
              <span class="sports-cars_descript_down">Полный</span>
              <span class="sports-cars_descript_down">360 л.с</span>
            </div>
          </a>
          <span class="sports-cars_descript">Mercedes-Benz CLA AMG 45 AMG</span>
          <span class="sports-cars_descript_sum">9500 ₽/сут.</span>
        </div>
      </div>
    </div>
  );
};

export default SportsCars;
