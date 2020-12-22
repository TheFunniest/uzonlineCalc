import React, { createContext, useState } from "react";
import CalcForm from "./components/CalcForm";
import DrawerOpenBtn from "./components/DrawerOpenBtn";
import Header from "./components/Header";

export const AppContext = createContext();

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deletingItem, setDeletingItem] = useState({});
  const [visible, setVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{
        tableData,
        setTableData,
        showDelete,
        setShowDelete,
        deletingItem,
        setDeletingItem,
        visible,
        setVisible,
      }}
    >
      <Header />
      <CalcForm />
      <DrawerOpenBtn />
    </AppContext.Provider>
  );
};

export default App;
