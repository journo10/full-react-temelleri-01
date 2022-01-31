import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isLoggedin, setIsLoggedIn] = useState(false);

    const onChangeAuthStatus = () => {
        setIsLoggedIn(!isLoggedin);
    };

    return (
        <AuthContext.Provider value={{ isLoggedin, onChangeAuthStatus }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

//Function component ile createContext yaptın