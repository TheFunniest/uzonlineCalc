import React, { useState } from "react";
import { Button, Form, InputNumber } from "antd";
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
          <Form className="calc-form">
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
              <Form.Item>
                <InputNumber
                  name="ram"
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
              <Form.Item>
                <InputNumber
                  type="number"
                  name="ssd"
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
              <Form.Item>
                <InputNumber
                  type="number"
                  name="sas15k"
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
              <Form.Item>
                <InputNumber
                  type="number"
                  min={0}
                  name="sas10k"
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
              <Form.Item>
                <InputNumber
                  type="number"
                  name="sas7k"
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
              <Form.Item>
                <InputNumber
                  type="number"
                  name="internet"
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
              <Form.Item>
                <InputNumber
                  type="number"
                  min={0}
                  name="tasix"
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
              setVisible(true);
            }}
          >
            ДОБАВИТЬ
          </Button>
          <Button className="calc-btns__item clear">ОЧИСТИТЬ </Button>
        </div>
      </div>
      <BottomDrawer visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export default CalcForm;
