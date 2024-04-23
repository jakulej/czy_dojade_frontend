import {StopTimeDTO} from "../../DTOs/StopTimeDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function StopTimeListComponent () {

    const [stopTimes, setStopTimes] = useState<StopTimeDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'stop_time')
            .then((response) => {
                setStopTimes(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Stop Times</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>arrival_time:</th>
                        <th>departure_time:</th>
                        <th>stop_id:</th>
                        <th>trip_id:</th>
                    </tr>
                    <tbody>
                    {
                        stopTimes
                            ? stopTimes.map((stopTime, i) => (
                                <tr key={i}>
                                    <td>{stopTime.id}</td>
                                    <td>{stopTime.arrival_time}</td>
                                    <td>{stopTime.departure_time}</td>
                                    <td>{stopTime.stop_id}</td>
                                    <td>{stopTime.trip_id}</td>
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