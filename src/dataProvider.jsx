import React, { createContext, useContext, useState } from "react";

const initialValues = "Saturday";

const DataContext = createContext();

// const DataContext = createContext(typeof initialValues);
// const UpdateDataContext = createContext(React.Dispatch<React.SetStateAction<typeof initialValues>>)

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState(initialValues);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
