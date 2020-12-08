import { ReactComponent as RemoveIcon } from "../../img/remove 1.svg";

export const columns = [
  {
    title: "vCPU",
    key: "vcpu",
    dataIndex: "vcpu",
  },
  {
    title: "RAM",
    key: "ram",
    dataIndex: "ram",
  },
  {
    title: "SSD",
    key: "ssd",
    dataIndex: "ssd",
  },
  {
    title: "SAS - 15 K RPM",
    key: "sas15k",
    dataIndex: "sas15k",
  },
  {
    title: "SAS - 10 K RPM",
    key: "sas10k",
    dataIndex: "sas10k",
  },
  {
    title: "SAS - 7,2 K RPM",
    key: "sas7k",
    dataIndex: "sas7k",
  },
  {
    title: "Интернет *",
    key: "internet",
    dataIndex: "internet",
  },
  {
    title: "TAS-IX **",
    key: "tasix",
    dataIndex: "tasix",
  },
  {
    title: "Итого",
    key: "overall",
    dataIndex: "overall",
  },
  {
    key: "remove",
    dataIndex: "remove",
    width: 50,
  },
];

export const data = [
  {
    key: "1",
    vcpu: "12 000",
    ram: "88 000",
    ssd: "66 000",
    sas15k: "54 200",
    sas10k: "-",
    sas7k: "-",
    internet: "56 000",
    tasix: "69 500",
    overall: "9 000 000 сум",
    remove: (
      <RemoveIcon
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    key: "2",
    vcpu: "12 000",
    ram: "88 000",
    ssd: "66 000",
    sas15k: "54 200",
    sas10k: "-",
    sas7k: "-",
    internet: "56 000",
    tasix: "69 500",
    overall: "9 000 000 сум",
    remove: (
      <RemoveIcon
        style={{
          cursor: "pointer",
        }}
      />
    ),
  },
];
