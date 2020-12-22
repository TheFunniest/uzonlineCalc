import React, { useContext } from "react";
import { Form, InputNumber, Select } from "antd";
import { AppContext } from "../../App"
import { numberWithSpaces } from "./helpers";

const FormItem = ({ select, Icon, name, price, label, type }) => {
    const { setSizeTypes } = useContext(AppContext);
  return (
    <div className="calc-form__item">
      <div className="calc-form__label">
        <Icon />
        <span>{label}</span>
      </div>
      <Form.Item name={name}>
        <InputNumber type="number" min={0} className="calc-form__input" />
      </Form.Item>
      {select ? (
        <div className="calc-form__type">
          <Select
            defaultValue="GB"
            onSelect={(val) => {
              setSizeTypes((prevState) => {
                return {
                  ...prevState,
                  [name]: {
                    type: val,
                    price: val === "GB" ? price : price * 1024,
                  },
                };
              });
            }}
          >
            <Select.Option value="GB">GB</Select.Option>
            <Select.Option value="TB">TB</Select.Option>
          </Select>
        </div>
      ) : (
        <span className="calc-form__type"> {type}</span>
      )}

      <span className="calc-form__price">{typeof price === "number" ? numberWithSpaces(price) : price}/мес.</span>
    </div>
  );
};

export default FormItem;
