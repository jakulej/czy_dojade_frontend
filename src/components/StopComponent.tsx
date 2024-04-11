import React, { useState, useEffect } from 'react';
import {StopDTO} from "../DTOs/StopDTO";

export const StopComponent: React.FC = () => {
    const [stop, setStop] = useState<StopDTO | null>(null);

    useEffect(() => {
        const fetchStop = async () => {
            const response = await fetch('/api/...');
            const stop: StopDTO = await response.json();
            setStop(stop);
        };

        fetchStop();
    }, []);

    if (!stop) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{stop.id}</h1>
            <p>{stop.code}</p>
            <p>{stop.name}</p>
            <p>{stop.latitude}</p>
            <p>{stop.longtitude}</p>
        </div>
    );
};