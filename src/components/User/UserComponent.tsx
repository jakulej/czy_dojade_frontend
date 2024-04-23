import {UserDTO} from "../../DTOs/UserDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function UserComponent () {

    const [user, setUser] = useState<UserDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'app_user/' + id)
            .then((response) => {
            setUser(response.data);
            console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Users</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>username:</th>
                        <th>password:</th>
                        <th>email:</th>
                        <th>first_name:</th>
                        <th>last_name:</th>
                        <th>subscriber:</th>
                    </tr>
                    <tbody>
                    {
                        user
                            ?
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.subscriber}</td>
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