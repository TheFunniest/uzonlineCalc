import React from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import "./styles.scss";
import Tooltip from "./tooltip";

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
            <Tooltip />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
