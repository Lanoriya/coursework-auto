import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Conditions from "../Conditions/Conditions";
import Contacts from "../Contacts/Contacts";
import { Routes, Route } from 'react-router-dom';
import Popup from "../Popup/Popup";
import "./layout.css";

const Layout = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="layout">
      <Popup active={modalActive} setActive={setModalActive}/>
      <Header />
      <div className="main__layout">
        <Routes>
          <Route path="/*" element={<Main/>}/>
          <Route path="/conditions" element={<Conditions/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
