import { createContext, useContext, useState } from "react";
import axios from "axios";

import useLocalStorage from "../hooks/useLocalStorage";

export const ListContext = createContext({});

export default function ListProvider({ children }) {
  const [phonesList, setPhonesList] = useState([]);
  const [contact, setContact] = useLocalStorage("userContact", null);

  function getList() {
    axios.get("https://api.2ndlifemobile.shop/test").then((response) => {
      setPhonesList(response.data.table);
    });
  }

  function getContact(path) {
    if (path.length < 5 && contact === null) {
      setContact("912896548");
    } else if (path.length > 5) {
      setContact(path);
    }
  }

  return (
    <ListContext.Provider
      value={{
        getList,
        getContact,
        phonesList,
        contact,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => {
  return useContext(ListContext);
};
