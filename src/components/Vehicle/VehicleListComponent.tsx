import {VehicleDTO} from "../../DTOs/VehicleDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function UserListComponent () {

    const [vehicles, setVehicles] = useState<VehicleDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'vehicle')
            .then((response) => {
                setVehicles(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Vehicles</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>curr_latitude:</th>
                        <th>curr_longitude:</th>
                    </tr>
                    <tbody>
                    {
                        vehicles
                            ? vehicles.map((vehicle, i) => (
                                <tr key={i}>
                                    <td>{vehicle.id}</td>
                                    <td>{vehicle.curr_latitude}</td>
                                    <td>{vehicle.curr_longitude}</td>
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