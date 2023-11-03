import React, { useState } from "react";
import axios from "axios";
import "./popup.css";
import close from "../imgs/close.png";

const Popup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!phone || !email) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    if (phoneError || emailError) {
      alert("Пожалуйста, исправьте ошибки");
      return;
    }

    const message = `Имя: ${name}%0AТелефон: ${phone}%0AEmail: ${email}`;

    axios
      .post(
        `https://api.telegram.org/bot6053161715:AAEdgWPMCB-l70qF1-rmPq9dqgh_uXIk6eE/sendMessage?chat_id=-904719807&text=${message}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setPhone("");
    setEmail("");
  };

  const validatePhone = (phone) => {
    const regex = /^((\+7|7|8)+([0-9]){10})$/;
    return regex.test(phone);
  };

  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);

    if (!validatePhone(newPhone)) {
      setPhoneError("Номер телефона введен некорректно");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Адрес электронной почты введен некорректно");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="modal" id="modal-id">
      <div className="modal__content">
        <button
          className="modal-closer"
          onClick={() => {
            const modal = document.getElementById("modal-id");
            modal.classList.remove("active");
          }}
        >
          <img src={close} alt="" />
        </button>
        <form onSubmit={handleSubmit} className="modal-box">
          <input
            type="text"
            name="name"
            id="user_name"
            placeholder="Ваше имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="tel"
            name="phone"
            id="user_phone"
            placeholder="Ваш телефон"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <span className="error">{phoneError}</span>}
          <input
            type="email"
            name="email"
            id="user_email"
            placeholder="Ваш email"
            value={email}
            onChange={handleEmailChange}
          />

          <button type="submit" className="btn" value="Отправить">Отправить</button>
        </form>
      </div>
    </div>
  );
};
export default Popup;