import React from "react";
import "./main.css";
import "./main-mobile.css";
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Business from "../Business/Business";
import SportsCars from "../SportsCars/SportsCars";
import Premium from "../Premium/Premium";

const Main = () => {
  return (
    <main class="main">
      <h1 class="banner_title">Аренда премиальных автомобилей в <span class="banner_title-red">Тюмени</span></h1>
      <div class="categories">
        <div class="container">
          <div class="choose">
            <h3 class="choose_title">Категории автомобилей</h3>
            <div class="choose_cars">
              <ul>
                <Link to="business"><li class="cars-item" id="cars-text">Бизнес</li></Link>
                <Link to="sportsCars"><li class="cars-item" id="cars-text">Спорткары</li></Link>
                <Link to="premium"><li class="cars-item" id="cars-text">Премиум</li></Link>
              </ul>
            </div>
          </div>
          <div className="categories-auto">
            <Routes>
              <Route path="/business" element={<Business/>}/>
              <Route path="/sportsCars" element={<SportsCars/>}/>
              <Route path="/premium" element={<Premium/>}/>
            </Routes>
          </div>
        </div>
      </div>
      <div className="header-bg-container">
        <div className="header-bg-img header-bg-img-style">

        </div>
      </div>
    </main>
  );
};

export default Main;