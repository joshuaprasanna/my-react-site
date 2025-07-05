import { useState } from 'react';

export default function UseToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        //console.log("E" ,userToken);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        //localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);


    };

    return {
        setToken: saveToken,
        token
    }
}