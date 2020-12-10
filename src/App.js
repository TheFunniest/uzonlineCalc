import React, { createContext, useState } from "react";
import CalcForm from "./components/CalcForm";
import Header from "./components/Header";

export const AppContext = createContext();

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deletingItem, setDeletingItem] = useState({});

  return (
    <AppContext.Provider
      value={{
        tableData,
        setTableData,
        showDelete,
        setShowDelete,
        deletingItem,
        setDeletingItem,
      }}
    >
      <Header />
      <CalcForm />
    </AppContext.Provider>
  );
};

export default App;
