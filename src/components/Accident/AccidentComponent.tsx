import {AccidentDTO} from "../../DTOs/AccidentDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";
import AccidentListComponent from "./AccidentListComponent";

export default function AccidentComponent () {

    const [accident, setAccident] = useState<AccidentDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'accident/' + id)
            .then((response) => {
                setAccident(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Accident</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>:</th>
                        <th>:</th>
                        <th>:</th>
                        <th>:</th>
                        <th>:</th>
                    </tr>
                    <tbody>
                    {
                        accident
                            ?
                            <tr>
                                <td>{accident.id}</td>
                                <td>{accident.time_of_accident}</td>
                                <td>{accident.acc_latitude}</td>
                                <td>{accident.acc_longitude}</td>
                                <td>{accident.tripDTO}</td>
                                <td>{accident.is_verified}</td>
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