import React, { useContext } from "react";
import { Button, Form } from "antd";
import { AppContext } from "../../App";
import "./styles.scss";
import BottomDrawer from "../BottomDrawer";
import {
  calcCreatedAt,
  uuid,
  numberWithSpaces,
  calcValue,
  fromInputs,
} from "./helpers";
import FormItem from "./FormItem";

const CalcForm = () => {
  const [form] = Form.useForm();
  const {
    tableData,
    setTableData,
    visible,
    setVisible,
    sizeTypes,
  } = useContext(AppContext);
  let overall = 0;

  tableData.forEach((val) => {
    overall +=
      val.overall.length > 0
        ? Number(val.overall.split("сум")[0].replace(/\s+/g, ""))
        : 0;
  });

  return (
    <>
      <div className="calc">
        <div className="calc-overall">
          <p>
            <span>Итого:</span>
            <span className="calc-overall__value">
              {numberWithSpaces(overall)}
            </span>
          </p>
        </div>
        <div className="calc-card">
          <Form form={form} className="calc-form">
            {fromInputs.map((item) => {
              return (
                <FormItem
                  Icon={item.icon}
                  name={item.name}
                  label={item.label}
                  price={item.price}
                  type={item.type}
                  select={item.select}
                  key={item.name}
                />
              );
            })}
            <p className="calc-info">
              * Скорость доступа в сеть Интернет свыше 10 Мбит/с производится
              согласно утвержденному Прейскуранту. ** Скорость доступа в сеть
              TAS-IX, UZ-IX свыше 100 Мбит/с производится согласно утвержденному
              Прейскуранту.
            </p>
          </Form>
        </div>
        <div className="calc-btns">
          <Button
            className="calc-btns__item add"
            htmlType="submit"
            onClick={() => {
              form.validateFields().then((values) => {
                form.resetFields();
                const vcpu = values.vcpu ? values.vcpu * 71000 : 0;
                const ram = values.ram ? values.ram * sizeTypes.ram.price : 0;
                const ssd = values.ssd ? values.ssd * sizeTypes.ssd.price : 0;
                const sas15k = values.sas15k
                  ? values.sas15k * sizeTypes.sas15k.price
                  : 0;
                const sas10k = values.sas10k
                  ? values.sas10k * sizeTypes.sas10k.price
                  : 0;
                const sas7k = values.sas7k
                  ? values.sas7k * sizeTypes.sas15k.price
                  : 0;
                const createdAt = calcCreatedAt();
                const overall = vcpu + ram + ssd + sas15k + sas10k + sas7k;
                const calculation = {
                  key: uuid(),
                  vcpu: calcValue(values.vcpu, vcpu, "шт."),
                  ram: calcValue(values.ram, ram, sizeTypes.ram.type),
                  ssd: calcValue(values.ssd, ssd, sizeTypes.ssd.type),
                  sas15k: calcValue(
                    values.sas15k,
                    sas15k,
                    sizeTypes.sas15k.type
                  ),
                  sas10k: calcValue(
                    values.sas10k,
                    sas10k,
                    sizeTypes.sas10k.type
                  ),
                  sas7k: calcValue(values.sas7k, sas7k, sizeTypes.sas7k.type),
                  internet: values.internet ? values.internet + " Мбит/с" : "-",
                  tasix: values.tasix ? values.tasix + " Мбит/с" : "-",
                  overall: numberWithSpaces(overall),
                  createdAt,
                };
                const archive =
                  JSON.parse(localStorage.getItem("calculations")) || [];
                archive.push(calculation);
                localStorage.setItem(
                  "calculations",
                  JSON.stringify(archive)
                );
                setTableData([...tableData, calculation]);
              });
              setVisible(true);
            }}
          >
            ДОБАВИТЬ
          </Button>
          <Button
            className="calc-btns__item clear"
            onClick={() => form.resetFields()}
          >
            ОЧИСТИТЬ{" "}
          </Button>
        </div>
      </div>
      <BottomDrawer visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export default CalcForm;
