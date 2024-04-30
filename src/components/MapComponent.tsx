"use client";

import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';
import {useState} from "react";
import {apiKey} from "../API_KEY";

export default function MapComponent() {
    const position = {lat: 53.54992, lng: 10.00678};
    const [open, setOpen] = useState(false);

    return (
        <APIProvider apiKey={apiKey}>
            <div style={{ height: "100vh", width: '100vh' }}>
                <Map zoom={9} center={position}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin></Pin>
                    </AdvancedMarker>
                    {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>Pin</InfoWindow>}
                </Map>
            </div>
        </APIProvider>
    );
}