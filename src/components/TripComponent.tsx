import React, { useState, useEffect } from 'react';
import {TripDTO} from "../DTOs/TripDTO";

export const TripComponent: React.FC = () => {
    const [trip, setTrip] = useState<TripDTO | null>(null);

    useEffect(() => {
        const fetchTrip = async () => {
            const response = await fetch('/api/...');
            const trip: TripDTO = await response.json();
            setTrip(trip);
        };

        fetchTrip();
    }, []);

    if (!trip) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{trip.id}</h1>
            <p>{trip.trip_headsing}</p>
            <p>{trip.direction_id}</p>
            <p>{trip.routeDTO}</p>
            <p>{trip.vecicleDTO}</p>
        </div>
    );
};