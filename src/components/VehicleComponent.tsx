import React, { useState, useEffect } from 'react';
import {VehicleDTO} from "../DTOs/VehicleDTO";

export const VehicleComponent: React.FC = () => {
    const [vehicle, setVehicle] = useState<VehicleDTO | null>(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            const response = await fetch('/api/...');
            const vehicle: VehicleDTO = await response.json();
            setVehicle(vehicle);
        };

        fetchVehicle();
    }, []);

    if (!vehicle) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{vehicle.id}</h1>
            <p>{vehicle.curr_latitude}</p>
            <p>{vehicle.curr_longitude}</p>
        </div>
    );
};