import {StopDTO} from "../../DTOs/StopDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function StopTimeListComponent () {

    const [stops, setStops] = useState<StopDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'stop')
            .then((response) => {
                setStops(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Stops</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>code:</th>
                        <th>name:</th>
                        <th>latitude:</th>
                        <th>longitude:</th>
                    </tr>
                    <tbody>
                    {
                        stops
                            ? stops.map((stop, i) => (
                                <tr key={i}>
                                    <td>{stop.id}</td>
                                    <td>{stop.code}</td>
                                    <td>{stop.name}</td>
                                    <td>{stop.latitude}</td>
                                    <td>{stop.longitude}</td>
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