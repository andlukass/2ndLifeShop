import { createContext, useContext, useState } from "react";
import axios from "axios";

export const ListContext = createContext({});

export default function ListProvider({ children }) {
  const [phonesList, setPhonesList] = useState([]);

  function getList() {
    axios.get("https://api.2ndlifemobile.shop/test").then((response) => {
      setPhonesList(response.data.table);
    });
  }

  return (
    <ListContext.Provider
      value={{
        getList,
        phonesList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => {
  return useContext(ListContext);
};
