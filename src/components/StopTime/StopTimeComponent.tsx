import {StopTimeDTO} from "../../DTOs/StopTimeDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function StopTimeComponent () {

    const [stopTime, setStopTime] = useState<StopTimeDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'stop_time/' + id)
            .then((response) => {
                setStopTime(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Stop Time</h1>
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
                        stopTime
                            ?
                            <tr>
                                <td>{stopTime.id}</td>
                                <td>{stopTime.arrival_time}</td>
                                <td>{stopTime.departure_time}</td>
                                <td>{stopTime.stop_id}</td>
                                <td>{stopTime.trip_id}</td>
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