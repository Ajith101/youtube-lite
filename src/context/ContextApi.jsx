import { createContext, useContext, useRef, useState } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Home");
  const searchRef = useRef(null);
  return (
    <>
      <Context.Provider
        value={{
          ShowMenu,
          setShowMenu,
          searchRef,
          setCurrentCategory,
          currentCategory,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export const useAppContext = () => {
  const {
    setShowMenu,
    ShowMenu,
    searchRef,
    currentCategory,
    setCurrentCategory,
  } = useContext(Context);
  return {
    ShowMenu,
    setShowMenu,
    searchRef,
    currentCategory,
    setCurrentCategory,
  };
};
