import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { ReactComponent as HistoryIcon } from "../../img/historyIcon.svg";
import { Tooltip, Empty } from "antd";

const HistoryTooltip = () => {
  const { tableData, setTableData } = useContext(AppContext);
  const [allCalc, setAllCalc] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("calculations")) || [];
    setAllCalc(items);
  }, [tableData]);

  const Content = () => {
    return (
      <div className="history">
        <div className="history-items">
          {allCalc.length ? (
            allCalc.map((item) => {
              return (
                <div className="history-item" key={item.key}>
                  <div>
                    <span className="history-item__overall">Итого:</span>
                    <span className="history-item__summ">{item.overall}</span>
                  </div>
                  <span className="history-item__date">{item.createdAt}</span>
                </div>
              );
            })
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
        <div className="history-clear">
          <p
            onClick={() => {
              setTableData([]);
              localStorage.setItem("calculations", "[]");
            }}
          >
            Очистить историю
          </p>
        </div>
      </div>
    );
  };
  return (
    <Tooltip
      className="history-tooltip"
      trigger={["hover"]}
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
