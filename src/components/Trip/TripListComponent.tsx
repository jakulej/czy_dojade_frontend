import {TripDTO} from "../../DTOs/TripDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function TripListComponent () {

    const [trips, setTrips] = useState<TripDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'trip')
            .then((response) => {
                setTrips(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Trips</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>trip_headsing:</th>
                        <th>direction_id:</th>
                        <th>route_id:</th>
                        <th>vehicle_id:</th>
                        <th>accident_id:</th>
                    </tr>
                    <tbody>
                    {
                        trips
                            ? trips.map((trip, i) => (
                                <tr key={i}>
                                    <td>{trip.id}</td>
                                    <td>{trip.trip_headsing}</td>
                                    <td>{trip.direction_id}</td>
                                    <td>{trip.route_id}</td>
                                    <td>{trip.vehicle_id}</td>
                                    <td>{trip.accident_id}</td>
                                </tr>
                            ))
                            : null
                    }
                    </tbody>
                    </thead>
                </table>
            </div>
        </div>
    );
};