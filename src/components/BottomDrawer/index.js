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
          : record[dataIndex] !== "-"
          ? record[dataIndex]
          : 0,
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

  const deleteSpaces = (x) => {
    return Number(x.replace(/\s+/g, "").split("сум")[0]);
  };

  const handleSave = (row, dataIndex) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => row.key === item.key);
    let item = newData[index];

    const columnItem = (item, value, type) => {
      if (value === 0) {
        if (item > 0) {
          return item + " " + type;
        }
        return "-";
      }
      return item > 0 ? (
        <div>
          <p
            style={{
              textAlign: "center",
            }}
          >
            {item + " " + type}
          </p>
          <p>{numberWithSpaces(item * value) + " сум"}</p>
        </div>
      ) : (
        "-"
      );
    };

    const calculateOverall = () => {
      const overall = deleteSpaces(row["overall"]?.split("сум")[0]);
      let previousValue = null;
      let currentValue = null;
      console.log(overall)
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
        row[dataIndex] = columnItem(row[dataIndex], 71000, "шт.");
        break;
      case "ram":
        row[dataIndex] = columnItem(row[dataIndex], 10000, "GB");
        break;
      case "ssd":
        row[dataIndex] = columnItem(row[dataIndex], 2200, "GB");
        break;
      case "sas15k":
        row[dataIndex] = columnItem(row[dataIndex], 800, "GB");
        break;
      case "sas10k":
        row[dataIndex] = columnItem(row[dataIndex], 600, "GB");
        break;
      case "sas7k":
        row[dataIndex] = columnItem(row[dataIndex], 400, "GB");
        break;
      case "internet":
        row[dataIndex] = columnItem(row[dataIndex], 0, "Мбит/с");
        break;
      case "tasix":
        row[dataIndex] = columnItem(row[dataIndex], 0, "Мбит/с");
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
      title={
        <p
          style={{
            textAlign: "center",
          }}
        >
          Калькулятор цен ЦОД
        </p>
      }
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
