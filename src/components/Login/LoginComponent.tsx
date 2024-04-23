import {LoginDTO} from "../../DTOs/LoginDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function LoginComponent () {

    const [login, setLogin] = useState<LoginDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'login/' + id)
            .then((response) => {
                setLogin(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>User</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>:</th>
                        <th>:</th>
                        <th>:</th>
                        <th>:</th>
                    </tr>
                    <tbody>
                    {
                        login
                            ?
                            <tr>
                                <td>{login.email}</td>
                                <td>{login.password}</td>
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