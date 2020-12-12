import { Drawer, Table, Form, InputNumber } from "antd";
import React, { useContext, useState, useEffect, useRef } from "react";
import { columnss } from "./tableData";
import { AppContext } from "../../App";
import "./styles.scss";
import DeleteModal from "./deleteModal";

const EditableContext = React.createContext();

const BottomDrawer = ({ visible, onClose }) => {
  const { tableData, setTableData } = useContext(AppContext);
  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex]?.props
          ? record[dataIndex]?.props?.children[0]?.props?.children
          : record[dataIndex],
      });
    };

    const save = async (e) => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values }, dataIndex);
      } catch (errInfo) {
        console.log("Save failed:", errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <>
          <Form.Item
            style={{
              margin: 0,
            }}
            name={dataIndex}
          >
            <InputNumber
              type="number"
              style={{
                width: "70px",
              }}
              ref={inputRef}
              onPressEnter={save}
              onBlur={save}
            />
          </Form.Item>
          <p>{record[dataIndex]?.props?.children[1]?.props?.children} </p>
        </>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const deleteSpaces = (x) => Number(x.replace(/\s+/g, ""));

  const handleSave = (row, dataIndex) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => row.key === item.key);
    let item = newData[index];

    const columnItem = (item, value) => {
      if (value === 0) {
        return item;
      }
      return item > 0 ? (
        <div>
          <p>{item}</p>
          <p>{numberWithSpaces(item * value)}</p>
        </div>
      ) : (
        "-"
      );
    };

    const calculateOverall = () => {
      const overall = deleteSpaces(row["overall"]?.split("сум")[0]);
      let previousValue = null;
      let currentValue = null;
      if (item[dataIndex] === "-") {
        currentValue = deleteSpaces(
          row[dataIndex]?.props?.children[1]?.props?.children
        );
        return numberWithSpaces(overall + currentValue) + " сум";
      }
      if (row[dataIndex] === "-") {
        previousValue = deleteSpaces(
          item[dataIndex]?.props?.children[1]?.props?.children
        );
        return numberWithSpaces(overall - previousValue) + " сум";
      }
      previousValue = deleteSpaces(
        item[dataIndex]?.props?.children[1]?.props?.children
      );
      currentValue = deleteSpaces(
        row[dataIndex]?.props?.children[1]?.props?.children
      );
      return numberWithSpaces(overall + currentValue - previousValue) + " сум";
    };

    switch (dataIndex) {
      case "vcpu":
        row[dataIndex] = columnItem(row[dataIndex], 71000);
        break;
      case "ram":
        row[dataIndex] = columnItem(row[dataIndex], 10000);
        break;
      case "ssd":
        row[dataIndex] = columnItem(row[dataIndex], 2200);
        break;
      case "sas15k":
        row[dataIndex] = columnItem(row[dataIndex], 800);
        break;
      case "sas10k":
        row[dataIndex] = columnItem(row[dataIndex], 600);
        break;
      case "sas7k":
        row[dataIndex] = columnItem(row[dataIndex], 400);
        break;
      case "internet":
        row[dataIndex] = columnItem(row[dataIndex], 0);
        break;
      case "tasix":
        row[dataIndex] = columnItem(row[dataIndex], 0);
        break;
      default:
        return;
    }
    if (dataIndex !== "internet" && dataIndex !== "tasix") {
      row["overall"] = calculateOverall();
    }
    newData.splice(index, 1, { ...item, ...row });
    setTableData(newData);
    localStorage.setItem("calculations", JSON.stringify(newData));
  };
  const columns = columnss.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

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
          components={components}
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
