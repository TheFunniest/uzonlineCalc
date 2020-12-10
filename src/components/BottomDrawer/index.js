import { Drawer, Table } from "antd";
import React, { createContext, useState } from "react";
import { columns, data } from "./tableData";
import "./styles.scss";
import DeleteModal from "./deleteModal";

export const DrawerContext = createContext();

const BottomDrawer = ({ visible, onClose }) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        showDelete,
        setShowDelete,
      }}
    >
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
            dataSource={data}
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
    </DrawerContext.Provider>
  );
};

export default BottomDrawer;
