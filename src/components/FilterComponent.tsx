import {useState} from "react";
import "../styles/FilterComponent.css"
import LineFilterComponent from "./LineFilterComponenet";

export default function FilterComponent() {
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [filterTramStops, setFilterTramStops] = useState<boolean>(false);
    const [filterBusStops, setFilterBusStops] = useState<boolean>(false);

    return (
        <div>
            <div>
                {
                    (filterTramStops) ?
                        <button className={'filter-button'} onClick={() => setFilterTramStops(false)}>
                            <p className={'filter-text'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     className="bi bi-train-lightrail-front-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 0a.5.5 0 0 0 0 1h1v1.011c-1.525.064-3.346.394-4.588.655C1.775 2.904 1 3.915 1 5.055V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V5.055c0-1.14-.775-2.15-1.912-2.39-1.242-.26-3.063-.59-4.588-.654V1h1a.5.5 0 0 0 0-1zM8 4c1.136 0 2.645.2 3.604.346.825.126 1.356.9 1.244 1.697q-.034.24-.07.522C12.643 7.596 12.5 8.949 12.5 10c0 .428.024.933.062 1.464.066.93.174 1.92.266 2.682.042.34.08.634.109.854h-1.01a63 63 0 0 1-.327-3H9.354c-.36 0-.704-.143-.958-.396a.35.35 0 0 0-.25-.104h-.292a.35.35 0 0 0-.25.104 1.35 1.35 0 0 1-.958.396H4.4a63 63 0 0 1-.328 3H3.064c.029-.22.067-.514.108-.854.092-.761.2-1.752.266-2.682.038-.531.062-1.036.062-1.464 0-1.051-.143-2.404-.278-3.435l-.07-.522c-.112-.798.42-1.571 1.244-1.697C5.356 4.199 6.864 4 8 4m-1.354 7H4.47c.019-.353.03-.692.03-1 0-.927-.104-2.051-.216-3h7.432c-.112.949-.216 2.073-.216 3 0 .308.011.647.03 1H9.354a.35.35 0 0 1-.25-.104 1.35 1.35 0 0 0-.958-.396h-.292c-.36 0-.704.143-.958.396a.35.35 0 0 1-.25.104m5.199-5h-7.69l-.013-.096a.497.497 0 0 1 .405-.57C5.505 5.188 6.947 5 8 5s2.495.188 3.453.334a.497.497 0 0 1 .405.57zM6 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"/>
                                </svg>
                                Tram stops
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     id={"filter-eye"}
                                     className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path
                                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                            </p>
                        </button>
                        :
                        <button className={'filter-button'} onClick={() => setFilterTramStops(true)}>
                            <p className={'filter-text'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     className="bi bi-train-lightrail-front-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 0a.5.5 0 0 0 0 1h1v1.011c-1.525.064-3.346.394-4.588.655C1.775 2.904 1 3.915 1 5.055V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V5.055c0-1.14-.775-2.15-1.912-2.39-1.242-.26-3.063-.59-4.588-.654V1h1a.5.5 0 0 0 0-1zM8 4c1.136 0 2.645.2 3.604.346.825.126 1.356.9 1.244 1.697q-.034.24-.07.522C12.643 7.596 12.5 8.949 12.5 10c0 .428.024.933.062 1.464.066.93.174 1.92.266 2.682.042.34.08.634.109.854h-1.01a63 63 0 0 1-.327-3H9.354c-.36 0-.704-.143-.958-.396a.35.35 0 0 0-.25-.104h-.292a.35.35 0 0 0-.25.104 1.35 1.35 0 0 1-.958.396H4.4a63 63 0 0 1-.328 3H3.064c.029-.22.067-.514.108-.854.092-.761.2-1.752.266-2.682.038-.531.062-1.036.062-1.464 0-1.051-.143-2.404-.278-3.435l-.07-.522c-.112-.798.42-1.571 1.244-1.697C5.356 4.199 6.864 4 8 4m-1.354 7H4.47c.019-.353.03-.692.03-1 0-.927-.104-2.051-.216-3h7.432c-.112.949-.216 2.073-.216 3 0 .308.011.647.03 1H9.354a.35.35 0 0 1-.25-.104 1.35 1.35 0 0 0-.958-.396h-.292c-.36 0-.704.143-.958.396a.35.35 0 0 1-.25.104m5.199-5h-7.69l-.013-.096a.497.497 0 0 1 .405-.57C5.505 5.188 6.947 5 8 5s2.495.188 3.453.334a.497.497 0 0 1 .405.57zM6 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"/>
                                </svg>
                                Tram stops
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     id={"filter-eye"}
                                     className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path
                                        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                            </p>
                        </button>
                }
            </div>
            <div>
                {
                    (filterBusStops) ?
                        <button className={'filter-button'} onClick={() => setFilterBusStops(false)}>
                            <p className={'filter-text'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     className="bi bi-bus-front-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.5 2.5 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A44 44 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1zM3.552 3.22A43 43 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44 44 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994M8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1"/>
                                </svg>
                                Bus stops
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     id={"filter-eye"}
                                     className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path
                                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                            </p>
                        </button>
                        :
                        <button className={'filter-button'} onClick={() => setFilterBusStops(true)}>
                            <p className={'filter-text'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     className="bi bi-bus-front-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.5 2.5 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A44 44 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1zM3.552 3.22A43 43 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44 44 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994M8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1"/>
                                </svg>
                                Bus stops
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                     id={"filter-eye"}
                                     className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path
                                        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                            </p>
                        </button>
                }
            </div>
            {
                (!openFilter) ?
                    <div>
                        <div>
                            <button className={'filter-button'} onClick={() => setOpenFilter(true)}>
                                <p className={'filter-text'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                         className="bi bi-funnel-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                                    </svg>
                                    Filter lines
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                         id={"filter-eye"}
                                         className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                                    </svg>
                                </p>
                            </button>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            <button className={'filter-button'} onClick={() => setOpenFilter(false)}>
                                <p className={'filter-text'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                         className="bi bi-funnel-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                                    </svg>
                                    Filter lines
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                         id={"filter-eye"}
                                         className="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                                    </svg>
                                </p>
                            </button>
                        </div>
                        <LineFilterComponent></LineFilterComponent>
                    </div>
            }
        </div>
    );
}