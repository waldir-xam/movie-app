//la lista de users  esta en config

import { createContext, useState } from "react";
import Config from "../config";
//este metodo es el que llevara la info de componente a otro ....!
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userStorage = JSON.parse(localStorage.getItem("movieapp.user")) || {};

  const [user, setUser] = useState(userStorage);

  function login(username, pass) {
    // este dato valida los name y pass
    const authUser = Config.authUsers.find(
      (user) => user.username === username && user.pass === pass
    );
    // la condiciona a que inserte los datos si con correctos al local storage
    if (authUser !== undefined) {
      localStorage.setItem("movieapp.user", JSON.stringify(authUser));
      setUser(authUser);
      return true;
    }
    return false;
  }
  function logout() {
    localStorage.removeItem("movieapp.user");
    setUser({});
    window.location.href = "/";
  }

  function isAuth() {
    return user.name ? true : false;
  }

  return (
    // nuevo padreee  ...
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
