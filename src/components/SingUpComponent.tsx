import React, { useState, useEffect } from 'react';
import {SingUpDTO} from "../DTOs/SingUpDTO";

export const SingUpComponent: React.FC = () => {
    const [singUp, setSingUp] = useState<SingUpDTO | null>(null);

    useEffect(() => {
        const fetchSingUp = async () => {
            const response = await fetch('/api/...');
            const singUp: SingUpDTO = await response.json();
            setSingUp(singUp);
        };

        fetchSingUp();
    }, []);

    if (!singUp) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{singUp.username}</h1>
            <p>{singUp.first_name}</p>
            <p>{singUp.last_name}</p>
            <p>{singUp.email}</p>
            <p>{singUp.password}</p>
        </div>
    );
};