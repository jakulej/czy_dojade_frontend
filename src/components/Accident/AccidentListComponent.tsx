import {AccidentDTO} from "../../DTOs/AccidentDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function AccidentListComponent () {

    const [accidents, setAccidents] = useState<AccidentDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'accident')
            .then((response) => {
                setAccidents(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Accidents</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>time_of_accident:</th>
                        <th>acc_latitude:</th>
                        <th>acc_longitude:</th>
                        <th>is_verified:</th>
                        <th>tripDTO:</th>
                    </tr>
                    <tbody>
                    {
                        accidents
                            ? accidents.map((accident, i) => (
                                <tr key={i}>
                                    <td>{accident.id}</td>
                                    <td>{accident.time_of_accident}</td>
                                    <td>{accident.acc_latitude}</td>
                                    <td>{accident.acc_longitude}</td>
                                    <td>{accident.is_verified}</td>
                                    <td>{accident.tripDTO}</td>
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