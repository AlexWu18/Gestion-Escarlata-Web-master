import React, { createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const login = () => {
        loginWithRedirect();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

