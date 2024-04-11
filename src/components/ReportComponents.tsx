import React, { useState, useEffect } from 'react';
import {ReportDTO} from "../DTOs/ReportDTO";

export const ReportComponent: React.FC = () => {
    const [report, setReport] = useState<ReportDTO | null>(null);

    useEffect(() => {
        const fetchLogin = async () => {
            const response = await fetch('/api/...');
            const report: ReportDTO = await response.json();
            setReport(report);
        };

        fetchLogin();
    }, []);

    if (!report) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{report.id}</h1>
            <p>{report.time_of_report}</p>
            <p>{report.accidentDTO}</p>
            <p>{report.description}</p>
            <p>{report.username}</p>
        </div>
    );
};