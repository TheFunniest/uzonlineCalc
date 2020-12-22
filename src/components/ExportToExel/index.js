import React, { useContext } from "react";
import { AppContext } from "../../App";

import ReactExport from "react-export-excel";
import { Button } from "antd";

const ExportToExel = () => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const { tableData } = useContext(AppContext);

  const data = tableData.map((item) => {
    return {
      vcpuPrice: item.vcpu.props
        ? item.vcpu.props.children[1].props.children
        : "0 сум",
      vcpuCount: item.vcpu.props
        ? item.vcpu.props.children[0].props.children
        : item.vcpu,
      ramPrice: item.ram.props
        ? item.ram.props.children[1].props.children
        : "0 сум",
      ramCount: item.ram.props
        ? item.ram.props.children[0].props.children
        : item.ram,
      ssdPrice: item.ssd.props
        ? item.ssd.props.children[1].props.children
        : "0 сум",
      ssdCount: item.ssd.props
        ? item.ssd.props.children[0].props.children
        : item.ssd,
      sas15kPrice: item.sas15k.props
        ? item.sas15k.props.children[1].props.children
        : "0 сум",
      sas15kCount: item.sas15k.props
        ? item.sas15k.props.children[0].props.children
        : item.sas15k,
      sas10kPrice: item.sas10k.props
        ? item.sas10k.props.children[1].props.children
        : "0 сум",
      sas10kCount: item.sas10k.props
        ? item.sas10k.props.children[0].props.children
        : item.sas10k,
      sas7kPrice: item.sas7k.props
        ? item.sas7k.props.children[1].props.children
        : "0 сум",
      sas7kCount: item.sas7k.props
        ? item.sas7k.props.children[0].props.children
        : item.sas7k,
      internet: item.internet ? item.internet : "-",
      tasix: item.tasix ? item.tasix : "-",
      overall: item.overall,
    };
  });

  return (
    <ExcelFile element={<Button type="primary">Экспортировать в Excel</Button>}>
      <ExcelSheet name="Тарифы" data={data}>
        <ExcelColumn label="CPU" value="vcpuCount" />
        <ExcelColumn label="Цена" value="vcpuPrice" />

        <ExcelColumn label="RAM" value="ramCount" />
        <ExcelColumn label="Цена" value="ramPrice" />

        <ExcelColumn label="SSD" value="ssdCount" />
        <ExcelColumn label="Цена" value="ssdPrice" />
        <ExcelColumn label="SAS - 15 K RPM" value="sas15kCount" />
        <ExcelColumn label="Цена" value="sas15kPrice" />
        <ExcelColumn label="SAS - 10 K RPM" value="sas10kCount" />
        <ExcelColumn label="Цена" value="sas10kPrice" />
        <ExcelColumn label="SAS - 7,2 K RPM" value="sas7kCount" />
        <ExcelColumn label="Цена" value="sas7kPrice" />
        <ExcelColumn label="Интернет" value="internet" />
        <ExcelColumn label="TAS-IX" value="tasix" />
        <ExcelColumn label="Итого" value="overall" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportToExel;
