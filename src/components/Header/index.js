import React from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as HistoryIcon } from "../../img/historyIcon.svg";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-items">
          <div>
            <Logo />
          </div>
          <div className="header-title">
            <p>Калькулятор услуг ЦОД</p>
          </div>
          <div className="header-history">
            <HistoryIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
