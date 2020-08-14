import React, { createContext, useReducer } from 'react';
import authReducer from '../reducers/authReducer';
export const AuthContext = createContext();

const initialState = {
    token: null,
    error: null,
    loading: false
};

const AuthContextProvider = (props) => {
    const [auth, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ auth, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;