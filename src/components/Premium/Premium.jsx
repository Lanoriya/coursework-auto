import React, { useState } from "react";
import "./premium.css";
import "../Popup/popup.css";
import HyundaiSanta from "../imgs/katalog/premium/Hyundai_Santa_Fe.jpg";
import HyundaiSantaBlack from "../imgs/katalog/premium/Hyundai_Santa_Fe_Black.jpg";
import LexusRx350 from "../imgs/katalog/premium/Lexus_RX_350.jpg";

const Premium = () => {
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
        <h3 class="choose_title carousel_text">Премиум</h3>
      </div>
      <div class="carousel-flex">
        <div class="carousel-item_premium">
          <a id="modal-active" onClick={handleClick}><img src={HyundaiSanta} alt="" />
            <div class="premium_descript_flex">
              <span class="premium_descript_down">2023</span>
              <span class="premium_descript_down">Полный</span>
              <span class="premium_descript_down">190 л.с</span>
            </div>
          </a>
          <span class="premium_descript">Hyundai Santa Fe</span>
          <span class="premium_descript_sum">12000 ₽/сут.</span>
        </div>
        <div class="carousel-item_premium">
          <a id="modal-active" onClick={handleClick}><img src={HyundaiSantaBlack} alt="" />
            <div class="premium_descript_flex">
              <span class="premium_descript_down">2019</span>
              <span class="premium_descript_down">Полный</span>
              <span class="premium_descript_down">190 л.с</span>
            </div>
          </a>
          <span class="premium_descript">Hyundai Santa Fe Black</span>
          <span class="premium_descript_sum">9200 ₽/сут.</span>
        </div>
        <div class="carousel-item_premium">
          <a id="modal-active" onClick={handleClick}><img src={LexusRx350} alt="" />
            <div class="premium_descript_flex">
              <span class="premium_descript_down">2022</span>
              <span class="premium_descript_down">Полный</span>
              <span class="premium_descript_down">249 л.с</span>
            </div>
          </a>
          <span class="premium_descript">Lexus RX 350</span>
          <span class="premium_descript_sum">17500 ₽/сут.</span>
        </div>
      </div>
    </div>
  );
};

export default Premium;
