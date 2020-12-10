import { Drawer, Table } from "antd";
import React, { useContext } from "react";
import { columns } from "./tableData";
import { AppContext } from "../../App";
import "./styles.scss";
import DeleteModal from "./deleteModal";

const BottomDrawer = ({ visible, onClose }) => {
  const { tableData } = useContext(AppContext);

  return (
    <Drawer
      closable={false}
      placement="bottom"
      onClose={onClose}
      visible={visible}
      height="auto"
    >
      <div className="container">
        <Table
          className="calc-table"
          dataSource={tableData}
          columns={columns}
          pagination={{
            style: {
              display: "none",
            },
          }}
        />
      </div>
      <DeleteModal />
    </Drawer>
  );
};

export default BottomDrawer;
