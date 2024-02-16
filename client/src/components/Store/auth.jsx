import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState();
  const [loading, setloading] = useState(true);
  const [alluser, setalluser] = useState();
  const [allcontacts, setallcontacts] = useState();
  const [service, setservice] = useState();
  const apiUrl = process.env.REACT_APP_JYOTI_API;
  const storeToken = (serverToken) => {
    settoken(serverToken);
    return window.localStorage.setItem("token", serverToken);
  };
  const LogoutUser = () => {
    settoken("");
    localStorage.removeItem("token");
  };
  const authorizationToken = `Bearer ${token}`;
  const isLoggedIn = !!token;
  const userAuthentication = async () => {
    setloading(true);
    const response = await fetch(`${apiUrl}/api/auth/user`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setuser(data.userData);
      setloading(false);
    } else {
      setloading(false);
    }
    setloading(false);
  };
  const getAllUsers = async () => {
    const response = await fetch(`${apiUrl}/api/admin/users`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setalluser(data);
    }
  };
  const getAllContacts = async () => {
    const response = await fetch(`${apiUrl}/api/admin/contacts`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setallcontacts(data);
    }
  };
  const getServices = async () => {
    const response = await fetch(`${apiUrl}/api/admin/servicelist`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      setservice(data);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    getAllContacts();
  }, []);
  useEffect(() => {
    getServices();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userAuthentication,
        storeToken,
        LogoutUser,
        isLoggedIn,
        user,
        loading,
        alluser,
        allcontacts,
        getAllContacts,
        apiUrl,
        authorizationToken,
        getAllUsers,
        service,
        getServices,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
