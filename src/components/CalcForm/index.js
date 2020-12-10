import React, { useState, useContext } from "react";
import { Button, Form, InputNumber } from "antd";
import { AppContext } from "../../App";
import "./styles.scss";
import { ReactComponent as CpuIcon } from "../../img/cpu 1.svg";
import { ReactComponent as RamIcon } from "../../img/ram 1.svg";
import { ReactComponent as WorldIcon } from "../../img/globe 1.svg";
import { ReactComponent as TasixIcon } from "../../img/uzbekistan 1.svg";
import { ReactComponent as SsdIcon } from "../../img/ssd 1.svg";
import { ReactComponent as HardIcon } from "../../img/harddisk 1.svg";
import BottomDrawer from "../BottomDrawer";

const CalcForm = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { tableData, setTableData } = useContext(AppContext);
  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  return (
    <>
      <div className="calc">
        <div className="calc-overall">
          <p>
            <span>Итого:</span>
            <span className="calc-overall__value">200 сум</span>
          </p>
        </div>
        <div className="calc-card">
          <Form form={form} className="calc-form">
            <div className="calc-form__item">
              <div className="calc-form__label">
                <CpuIcon />
                <span>vCPU</span>
              </div>
              <Form.Item name="vcpu">
                <InputNumber type="number" className="calc-form__input" />
              </Form.Item>
              <span className="calc-form__type"> шт.</span>
              <span className="calc-form__price">71 000 сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <RamIcon />
                <span>RAM</span>
              </div>

              <Form.Item name="ram">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">ГБ</span>
              <span className="calc-form__price">10 000 сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <SsdIcon />
                <span>SSD</span>
              </div>
              <Form.Item name="ssd">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">ГБ</span>
              <span className="calc-form__price">2 200 сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <HardIcon />
                <span>SAS - 15 K RPM</span>
              </div>
              <Form.Item name="sas15k">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">ГБ</span>
              <span className="calc-form__price">800 сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <HardIcon />
                <span>SAS - 10 K RPM</span>
              </div>
              <Form.Item name="sas10k">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">ГБ</span>
              <span className="calc-form__price">600 сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <HardIcon />
                <span>SAS - 7,2 K RPM</span>
              </div>
              <Form.Item name="sas7k">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">ГБ</span>
              <span className="calc-form__price">400 сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <WorldIcon />
                <span>Интернет *</span>
              </div>
              <Form.Item name="internet">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">Мбит/с</span>
              <span className="calc-form__price">N сум/мес.</span>
            </div>
            <div className="calc-form__item">
              <div className="calc-form__label">
                <TasixIcon />
                <span>TAS-IX **</span>
              </div>
              <Form.Item name="tasix">
                <InputNumber
                  type="number"
                  min={0}
                  className="calc-form__input"
                />
              </Form.Item>
              <span className="calc-form__type">Мбит/с</span>
              <span className="calc-form__price">N сум/мес.</span>
            </div>
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
                const date = new Date();
                const createdAt =
                  date.getUTCDate() +
                    "." +
                    date.getUTCMonth() +
                    "." +
                    date.getUTCFullYear() +
                    "  " +
                    (date.getUTCHours() + 5) +
                    ":" +
                    (date.getUTCMinutes().toString().length <
                  1
                    ? "0" + date.getUTCMinutes()
                    : date.getUTCMinutes());
                const vcpu = values.vcpu ? values.vcpu * 71000 : 0;
                const ram = values.ram ? values.ram * 10000 : 0;
                const ssd = values.ssd ? values.ssd * 2200 : 0;
                const sas15k = values.sas15k ? values.sas15k * 800 : 0;
                const sas10k = values.sas10k ? values.sas10k * 600 : 0;
                const sas7k = values.sas7k ? values.sas7k * 400 : 0;
                const internet = values.internet ? values.internet : 0;
                const tasix = values.tasix ? values.tasix : 0;
                const overall =
                  vcpu +
                  ram +
                  ssd +
                  sas15k +
                  sas10k +
                  sas7k +
                  internet +
                  tasix +
                  " сум";
                const calculation = {
                  key: uuid(),
                  vcpu: numberWithSpaces(vcpu),
                  ram: numberWithSpaces(ram),
                  ssd: numberWithSpaces(ssd),
                  sas15k: sas15k === 0 ? "-" : numberWithSpaces(sas15k),
                  sas10k: sas10k === 0 ? "-" : numberWithSpaces(sas10k),
                  sas7k: sas7k === 0 ? "-" : numberWithSpaces(sas7k),
                  internet: numberWithSpaces(internet),
                  tasix: numberWithSpaces(tasix),
                  overall: numberWithSpaces(overall),
                  createdAt,
                };
                const archive =
                  JSON.parse(localStorage.getItem("calculations")) || [];
                archive.push(calculation);
                localStorage.setItem(
                  "calculations",
                  JSON.stringify([...archive])
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
