import React, { useState, useEffect } from 'react';
import {StopTimeDTO} from "../DTOs/StopTimeDTO";

export const StopComponent: React.FC = () => {
    const [stopTime, setStopTime] = useState<StopTimeDTO | null>(null);

    useEffect(() => {
        const fetchStopTime = async () => {
            const response = await fetch('/api/...');
            const stopTime: StopTimeDTO = await response.json();
            setStopTime(stopTime);
        };

        fetchStopTime();
    }, []);

    if (!stopTime) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{stopTime.id}</h1>
            <p>{stopTime.arrival_time}</p>
            <p>{stopTime.departure_time}</p>
            <p>{stopTime.stopDTO}</p>
            <p>{stopTime.tripDTO}</p>
        </div>
    );
};