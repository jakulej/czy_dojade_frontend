import {RouteDTO} from "../../DTOs/RouteDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function RouteComponent () {

    const [route, setRoute] = useState<RouteDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'route/' + id)
            .then((response) => {
                setRoute(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Route</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>shortname:</th>
                        <th>description:</th>
                        <th>route_type:</th>
                    </tr>
                    <tbody>
                    {
                        route
                            ?
                            <tr>
                                <td>{route.id}</td>
                                <td>{route.shortname}</td>
                                <td>{route.description}</td>
                                <td>{route.route_type}</td>
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