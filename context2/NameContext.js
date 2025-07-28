import { createContext, useState } from "react";

export const NameContext = createContext();

export const NameContextProvider = (props) => {
  let [name, setName] = useState("Yunus Emre");
  let [surname, setSurname] = useState("Köklü");
  return (
    <NameContext.Provider
      value={{
        firstName: name,
        setFirstName: setName,
        lastName: surname,
        setLastName: setSurname,
      }}
    >
      {props.children}
    </NameContext.Provider>
  );
};
