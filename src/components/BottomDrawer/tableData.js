import { ReactComponent as RemoveIcon } from "../../img/remove 1.svg";
import React, { useContext } from "react";
import { AppContext } from "../../App";

const DeleteIcon = ({ item }) => {
  const { setShowDelete, setDeletingItem } = useContext(AppContext);
  return (
    <RemoveIcon
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        setDeletingItem(item);
        setShowDelete(true);
      }}
    />
  );
};

export const columnss = [
  {
    title: "vCPU",
    key: "vcpu",
    dataIndex: "vcpu",
    editable: true,
    width: 100,
  },
  {
    title: "RAM",
    key: "ram",
    dataIndex: "ram",
    editable: true,
    width: 100,
  },
  {
    title: "SSD",
    key: "ssd",
    dataIndex: "ssd",
    width: 100,
    editable: true,
  },
  {
    title: "SAS - 15 K RPM",
    key: "sas15k",
    dataIndex: "sas15k",
    width: 100,
    editable: true,
  },
  {
    title: "SAS - 10 K RPM",
    key: "sas10k",
    dataIndex: "sas10k",
    width: 100,
    editable: true,
  },
  {
    title: "SAS - 7,2 K RPM",
    key: "sas7k",
    dataIndex: "sas7k",
    width: 100,
    editable: true,
  },
  {
    title: "Интернет *",
    key: "internet",
    dataIndex: "internet",
    width: 100,
    editable: true,
  },
  {
    title: "TAS-IX **",
    key: "tasix",
    dataIndex: "tasix",
    width: 100,
    editable: true,
  },
  {
    title: "Итого",
    key: "overall",
    dataIndex: "overall",
    width: 100,
  },
  {
    key: "remove",
    dataIndex: "remove",
    width: 50,
    render: (text, record) => {
      return <DeleteIcon item={record} />;
    },
  },
];
