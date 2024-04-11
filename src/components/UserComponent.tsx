import React, { useState, useEffect } from 'react';
import {UserDTO} from "../DTOs/UserDTO";

export const UserComponent: React.FC = () => {
    const [user, setUser] = useState<UserDTO | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/...');
            const user: UserDTO = await response.json();
            setUser(user);
        };

        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.id}</h1>
            <p>{user.username}</p>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.subscriber}</p>
        </div>
    );
};