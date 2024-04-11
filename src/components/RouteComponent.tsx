import React, { useState, useEffect } from 'react';
import {RouteDTO} from "../DTOs/RouteDTO";

export const RouteComponent: React.FC = () => {
    const [route, setRoute] = useState<RouteDTO | null>(null);

    useEffect(() => {
        const fetchRoute = async () => {
            const response = await fetch('/api/...');
            const route: RouteDTO = await response.json();
            setRoute(route);
        };

        fetchRoute();
    }, []);

    if (!route) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{route.id}</h1>
            <p>{route.shortname}</p>
            <p>{route.description}</p>
            <p>{route.route_type}</p>
        </div>
    );
};