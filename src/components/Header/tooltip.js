import React from "react";
import { ReactComponent as HistoryIcon } from "../../img/historyIcon.svg";
import { Tooltip } from "antd";

const HistoryTooltip = () => {
  const Content = () => {
    return (
      <div className="history">
        <div className="history-items">
          <div className="history-item">
            <div>
              <span className="history-item__overall">Итого:</span>
              <span className="history-item__summ">291 692 500 сум</span>
            </div>
            <span className="history-item__date">19.11.2020 16:38</span>
          </div>
          <div className="history-item">
            <div>
              <span className="history-item__overall">Итого:</span>
              <span className="history-item__summ">291 692 500 сум</span>
            </div>
            <span className="history-item__date">19.11.2020 16:38</span>
          </div>
          <div className="history-item">
            <div>
              <span className="history-item__overall">Итого:</span>
              <span className="history-item__summ">291 692 500 сум</span>
            </div>
            <span className="history-item__date">19.11.2020 16:38</span>
          </div>
        </div>
        <div className="history-clear">
          <p>Очистить историю</p>
        </div>
      </div>
    );
  };
  return (
    <Tooltip
      className="history-tooltip"
      trigger={["click"]}
      placement="bottomRight"
      title={<Content />}
    >
      <HistoryIcon
        style={{
          cursor: "pointer",
        }}
      />
    </Tooltip>
  );
};

export default HistoryTooltip;
