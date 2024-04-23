import {TripDTO} from "../../DTOs/TripDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function TripComponent () {

    const [trip, setTrip] = useState<TripDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'trip/' + id)
            .then((response) => {
                setTrip(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Trip</h1>
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
                        trip
                            ?
                            <tr>
                                <td>{trip.id}</td>
                                <td>{trip.trip_headsing}</td>
                                <td>{trip.direction_id}</td>
                                <td>{trip.route_id}</td>
                                <td>{trip.vehicle_id}</td>
                                <td>{trip.accident_id}</td>
                            </tr>
                            : null
                    }
                    </tbody>
                    </thead>
                </table>
            </div>
        </div>
    );
};