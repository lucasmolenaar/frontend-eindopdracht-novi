import React, {createContext, useState} from 'react';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const login = (jwt) => {
        setAuthState({
            ...authState,
            isAuth: true,
        });

        console.log('Gebruiker is ingelogd')
        history.push('/');
    }

    const logout = () => {
        setAuthState({
            ...authState,
            isAuth: false,
        });

        console.log('Gebruiker is uitgelogd')
    }

    const data = {
        isAuth: authState.isAuth,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={ data }>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;