import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { useHistory } from "react-router-dom";
import {toast} from "react-toastify";

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
                localStorage.clear();

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
        localStorage.setItem('token', accessToken);

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

        history.push('/');

        toast.success('You have successfully logged in!');
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

        toast.success('You have successfully logged out!');
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