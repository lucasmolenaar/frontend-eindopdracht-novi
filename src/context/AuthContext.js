import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { useHistory } from "react-router-dom";

import checkTokenExpiration from "../helpers/checkTokenExpiration";
import LoadingRoller from "../components/LoadingRoller/LoadingRoller";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    // ** PERSIST ON REFRESH **
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwt_decode(token);

            if (checkTokenExpiration(decodedToken.exp)) {
                const fetchUserData = async () => {
                    try {
                        const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                            }
                        })

                        setAuthState({
                            ...authState,
                            isAuth: true,
                            status: 'done',
                            user: {
                                username: result.data.username,
                                email: result.data.email,
                                id: result.data.id
                            }
                        });
                    } catch (e) {
                        console.error(e.response);

                        setAuthState({
                            ...authState,
                            isAuth: false,
                            status: 'done',
                            user: null
                        });
                    }
                }

                fetchUserData();
            } else {
                console.log('Token has been expired, please log in.');

                setAuthState({
                    ...authState,
                    isAuth: false,
                    status: 'done',
                    user: null
                });
            }
        } else {
            setAuthState({
                ...authState,
                isAuth: false,
                status: 'done',
                user: null,
            });
        }
    }, [])

    // ** LOGIN **
    const login = ({ accessToken, email, username, id }) => {
        console.log('encoded: ', accessToken);
        localStorage.setItem('token', accessToken);

        const decodedToken = jwt_decode(accessToken);
        console.log(decodedToken);

        setAuthState({
            ...authState,
            isAuth: true,
            status: 'done',
            user: {
                username: username,
                email: email,
                id: id,
            }
        });

        console.log('Gebruiker is ingelogd')
        history.push('/');
    }

    // ** LOGOUT **
    const logout = () => {
        localStorage.clear();

        setAuthState({
            ...authState,
            isAuth: false,
            user: null,
            status: 'done'
        });

        console.log('Gebruiker is uitgelogd')
    }

    // ** CONTEXT DATA **
    const data = {
        authState: authState,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={ data }>
            { authState.status === 'done' ? children : <LoadingRoller /> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;