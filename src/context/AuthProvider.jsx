import React, { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const { auth, logout } = useAuth();

	return (
        <AuthContext.Provider value={{ auth, logout }}>
            { children }
        </AuthContext.Provider>
    )
}