import {ReportDTO} from "../../DTOs/ReportDTO";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../api/Axios";

export default function ReportListComponent () {

    const [reports, setReports] = useState<ReportDTO[] | null>();

    useEffect(() => {
        axios
            .get(baseURL + 'report')
            .then((response) => {
                setReports(response.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h1>List of Reports</h1>
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
                        reports
                            ? reports.map((report, i) => (
                                <tr key={i}>
                                    <td>{report.id}</td>
                                    <td>{report.time_of_report}</td>
                                    <td>{report.description}</td>
                                    <td>{report.username}</td>
                                    <td>{report.accident_id}</td>
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