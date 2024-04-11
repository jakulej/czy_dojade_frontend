import React, { useState, useEffect } from 'react';
import {AccidentDTO} from "../DTOs/AccidentDTO";

export const UserComponent: React.FC = () => {
    const [accident, setAccident] = useState<AccidentDTO | null>(null);

    useEffect(() => {
        const fetchAccident = async () => {
            const response = await fetch('/api/...');
            const accident: AccidentDTO = await response.json();
            setAccident(accident);
        };

        fetchAccident();
    }, []);

    if (!accident) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{accident.id}</h1>
            <p>{accident.time_of_accident}</p>
            <p>{accident.acc_latitude}</p>
            <p>{accident.acc_longitude}</p>
            <p>{accident.is_verified}</p>
            <p>{accident.tripDTO}</p>
        </div>
    );
};