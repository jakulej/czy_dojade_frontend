import {ReportDTO} from "../../DTOs/ReportDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";
import {useParams} from "react-router-dom";

export default function ReportComponent () {

    const [report, setReport] = useState<ReportDTO | null>();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(baseURL + 'report/' + id)
            .then((response) => {
                setReport(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>Report</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id:</th>
                        <th>time_of_report:</th>
                        <th>description:</th>
                        <th>username:</th>
                        <th>accident_id:</th>
                    </tr>
                    <tbody>
                    {
                        report
                            ?
                            <tr>
                                <td>{report.id}</td>
                                <td>{report.time_of_report}</td>
                                <td>{report.description}</td>
                                <td>{report.username}</td>
                                <td>{report.accident_id}</td>
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