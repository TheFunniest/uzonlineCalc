import { message, Modal } from "antd";
import { AppContext } from "../../App";
import React, { useContext } from "react";

const DeleteModal = () => {
  const {
    showDelete,
    setShowDelete,
    deletingItem,
    setTableData,
    tableData,
  } = useContext(AppContext);
  const onOk = () => {
    console.log(deletingItem);
    const items = tableData.filter((item) => item.key !== deletingItem.key);
    setTableData(items);
    localStorage.setItem("calculations", JSON.stringify(items));
    setShowDelete(false);
    message.success("Успешно удалено.");
  };
  return (
    <Modal
      className="delete-modal"
      width="446px"
      centered
      onOk={onOk}
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
