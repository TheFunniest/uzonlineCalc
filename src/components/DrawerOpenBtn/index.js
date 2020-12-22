import React, { useContext } from "react";
import "./styles.scss";
import { AppContext } from "../../App";

const DrawerOpenBtn = () => {
  const { setVisible } = useContext(AppContext);
  return (
    <div className="open-drawer">
      <button className="open-drawer__btn" onClick={() => setVisible(true)}>
        Таблица
      </button>
      <div className="open-drawer__border" />
    </div>
  );
};

export default DrawerOpenBtn;
