import { Modal } from "antd";
import { DrawerContext } from "./index";
import React, { useContext } from "react";

const DeleteModal = () => {
  const { showDelete, setShowDelete } = useContext(DrawerContext);
  return (
    <Modal
      className="delete-modal"
      width="446px"
      centered
      onCancel={() => setShowDelete(false)}
      closable={false}
      okButtonProps={{
        className: "okBtn",
      }}
      cancelButtonProps={{
        className: "notBtn",
      }}
      okText="Да"
      visible={showDelete}
      cancelText="Нет"
    >
      <p
        style={{
          color: "#BD4545",
          textAlign: "center",
          fontSize: 18,
          marginBottom: 0,
        }}
      >
        Внимание!
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: 18,
          marginBottom: 0,
        }}
      >
        Вы действительно хотите удалить?
      </p>
    </Modal>
  );
};

export default DeleteModal;
