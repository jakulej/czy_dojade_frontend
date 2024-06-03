import React, {useState} from "react";
import classNames from "classnames";
import "../styles/StopListComponent.css"
import StopInfoComponent from "./StopInfoComponent";

export default function StopListComponent() {
    const [openStopList, setOpenStopList] = useState(false);

    const stopListClass = classNames({
        'stop-list-container-opened': openStopList,
        'stop-list-container-closed': !openStopList,
    });

    return (
        <div className={stopListClass}>
            <div className={"stop-list-button-container"}>
                {
                    (!openStopList) ?
                        <button className={'stop-list-button'} onClick={() => setOpenStopList(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="33"
                                 height="70"
                                 fill="white"
                                 className="bi bi-chevron-compact-left"
                                 viewBox="4 1 16 16">
                                <path fillRule="evenodd"
                                      d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                            </svg>
                        </button>
                        :
                        <button className={'stop-list-button'} onClick={() => setOpenStopList(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="33"
                                 height="70"
                                 fill="white"
                                 className="bi bi-chevron-compact-right" viewBox="4 1 16 16">
                                <path fillRule="evenodd"
                                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                            </svg>
                        </button>
                }
            </div>
            <div className={'stop-list'}>
                <p className={'stop-title'}>120</p>
                <div className={'stop'}>
                    <StopInfoComponent></StopInfoComponent>
                </div>
            </div>
        </div>
    );
}