import {RouteDTO} from "../../DTOs/RouteDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function RouteListComponent () {

    const [routes, setRoutes] = useState<RouteDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'route')
            .then((response) => {
                setRoutes(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Routes</h1>
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
                        routes
                            ? routes.map((route, i) => (
                                <tr key={i}>
                                    <td>{route.id}</td>
                                    <td>{route.shortname}</td>
                                    <td>{route.description}</td>
                                    <td>{route.route_type}</td>
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