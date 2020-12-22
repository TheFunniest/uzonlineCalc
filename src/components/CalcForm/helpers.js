// ICONS
import { ReactComponent as CpuIcon } from "../../img/cpu 1.svg";
import { ReactComponent as RamIcon } from "../../img/ram 1.svg";
import { ReactComponent as WorldIcon } from "../../img/globe 1.svg";
import { ReactComponent as TasixIcon } from "../../img/uzbekistan 1.svg";
import { ReactComponent as SsdIcon } from "../../img/ssd 1.svg";
import { ReactComponent as HardIcon } from "../../img/harddisk 1.svg";

// FUNCTIONS
export const calcCreatedAt = () => {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours() + 5;
  console.log(date.getTimezoneOffset());
  const minutes =
    date.getUTCMinutes().toString().length <= 1
      ? "0" + date.getUTCMinutes().toString()
      : date.getUTCMinutes();
  return day + "." + month + "." + year + "  " + hours + ":" + minutes;
};

// GENERATE UNIQUE ID
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// RETURN NUMBER WITH SPACES LIKE: x=2000 => 2 000 сум
export const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " сум";
};

// CALCULATE VALUES AND RETURN COL ITEM FOR TABLE
export const calcValue = (value, summ, type) => {
  return summ === 0 ? (
    "-"
  ) : (
    <div className="column-item">
      <p>{value + " " + type}</p>
      <p>{numberWithSpaces(summ)}</p>
    </div>
  );
};

// INPUTS DATA INITIAL STATE
export const initialSizeTypes = {
  ram: {
    type: "GB",
    price: 10000,
  },
  ssd: {
    type: "GB",
    price: 2200,
  },
  sas7k: {
    type: "GB",
    price: 400,
  },
  sas10k: {
    type: "GB",
    price: 600,
  },
  sas15k: {
    type: "GB",
    price: 800,
  },
};

// FORM IPUTS DATA
export const fromInputs = [
  {
    select: false,
    icon: CpuIcon,
    name: "vcpu",
    label: "vCPU",
    price: 71000,
    type: "шт.",
  },
  {
    select: true,
    icon: RamIcon,
    name: "ram",
    label: "RAM",
    price: 10000,
  },
  {
    select: true,
    icon: SsdIcon,
    name: "ssd",
    label: "SSD",
    price: 2200,
  },
  {
    select: true,
    icon: HardIcon,
    name: "sas15k",
    label: "SAS - 15 K RPM",
    price: 800,
  },
  {
    select: true,
    icon: HardIcon,
    name: "sas10k",
    label: "SAS - 10 K RPM",
    price: 600,
  },
  {
    select: true,
    icon: HardIcon,
    name: "sas7k",
    label: "SAS - 7,2 K RPM",
    price: 400,
  },
  {
    select: false,
    icon: WorldIcon,
    name: "internet",
    label: "Интернет *",
    price: "N сум",
    type: "Мбит/с",
  },
  {
    select: false,
    icon: TasixIcon,
    name: "tasix",
    label: "TAS-IX **",
    price: "N сум",
    type: "Мбит/с",
  },
];
