import {StopDTO} from "../../DTOs/StopDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function StopComponent () {

    const [stop, setStop] = useState<StopDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'stop/' + id)
            .then((response) => {
                setStop(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Stop</h1>
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
                        stop
                            ?
                            <tr>
                                <td>{stop.id}</td>
                                <td>{stop.code}</td>
                                <td>{stop.name}</td>
                                <td>{stop.latitude}</td>
                                <td>{stop.longitude}</td>
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