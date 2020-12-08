import { Drawer, Table } from "antd";
import React from "react";
import { columns, data } from "./tableData";
import "./styles.scss";

const BottomDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      visible={visible}
      height="auto"
    >
      <div className="container">
        <Table
          className="calc-table"
          dataSource={data}
          columns={columns}
          pagination={{
            style: {
              display: "none",
            },
          }}
        />
      </div>
    </Drawer>
  );
};

export default BottomDrawer;
