import {SingUpDTO} from "../../DTOs/SingUpDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function SingUpComponent () {

    const [singUp, setSingUp] = useState<SingUpDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'sing-up/' + id)
            .then((response) => {
                setSingUp(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Sing Up</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id: </th>
                        <th>: </th>
                        <th>: </th>
                        <th>: </th>
                        <th>: </th>
                    </tr>
                    <tbody>
                    {
                        singUp
                            ?
                            <tr>
                                <td>{singUp.email}</td>
                                <td>{singUp.first_name}</td>
                                <td>{singUp.last_name}</td>
                                <td>{singUp.password}</td>
                                <td>{singUp.username}</td>
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