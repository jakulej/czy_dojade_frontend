import {ReportDTO} from "../../DTOs/ReportDTO";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";
import {UserDTO} from "../../DTOs/UserDTO";

export default function ReportComponent () {

    const [user, setUser] = useState<UserDTO | null>();
    const [reportForm, setReportForm] = useState({
        "time_of_report": '',
        "description": '',
        "username": '',
    });
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

    const inputHandler = (event: any) => {
        setReportForm({
            ...reportForm,
            [event.target.name]:event.target.value
        })
    }

    // const submitHandler = (event: any) => {
    //     event.preventDefault();
    //     axios
    //         .post(baseURL + 'report/', {
    //             time_of_report: reportForm.time_of_report,
    //             description: reportForm.description,
    //             username: reportForm.username,
    //         })
    //         .then((response) => {
    //
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    const buttonEnable=(reportForm.description!=='');

    return (
        <div>
            <h1>Create Report</h1>
            <div>
                <label>Description</label>
                <input type="text" onChange={inputHandler} value={reportForm.description} name="description"
                       id="description"/>
            </div>
            {/*<button disabled={!buttonEnable} type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>*/}
        </div>
    );
};