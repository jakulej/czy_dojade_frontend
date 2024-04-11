import React, { useState, useEffect } from 'react';
import {LoginDTO} from "../DTOs/LoginDTO";

export const LoginComponent: React.FC = () => {
    const [login, setLogin] = useState<LoginDTO | null>(null);

    useEffect(() => {
        const fetchLogin = async () => {
            const response = await fetch('/api/...');
            const login: LoginDTO = await response.json();
            setLogin(login);
        };

        fetchLogin();
    }, []);

    if (!login) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{login.email}</h1>
            <p>{login.password}</p>
        </div>
    );
};