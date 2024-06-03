import './styles/HomeMap.css';
import {useState} from "react";
import {apiKey} from "./api/API_KEY";
import {AdvancedMarker, APIProvider, InfoWindow, Map, Pin} from "@vis.gl/react-google-maps";
import StopListComponent from "./components/StopListComponent";
import LoginComponent from "./components/LoginComponent";
import classNames from "classnames";
import FilterComponent from "./components/FilterComponent";

export default function HomeMap() {
    const position = {lat: 53.54992, lng: 10.00678};
    const [open, setOpen] = useState(false);
    const checkLogin=localStorage.getItem('access_token');
    const [openLogin, setOpenLogin] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const func = () =>{};

    const handleShowLogin = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const menuClass = classNames({
        'menu-container-opened': openMenu,
        'menu-container-closed': !openMenu,
    });

    return (
        <APIProvider apiKey={apiKey}>
            <div className={'side-container'}>
                <div className={'main-container'}>
                    <div className={'map-container'}>
                        <Map zoom={9} center={position} onCameraChanged={func}>
                            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                                <Pin></Pin>
                            </AdvancedMarker>
                            {open &&
                                <InfoWindow position={position} onCloseClick={() => setOpen(false)}>Pin</InfoWindow>}
                        </Map>
                    </div>
                    <StopListComponent></StopListComponent>
                    <div className={menuClass}>
                        <div className={'menu'}>
                            <p className={'menu-title'}>Menu</p>
                            <div className={'menu-items'}>
                                <div className={'menu-item'}>
                                    <button className={'menu-item-button'}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                                 className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                            </svg>
                                            Profile
                                        </p>
                                    </button>
                                    <div className={'menu-divider'}></div>
                                </div>
                                <div className={'menu-item'}>
                                    <button className={'menu-item-button'}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor"
                                                 className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                            </svg>
                                            Settings
                                        </p>
                                    </button>
                                    <div className={'menu-divider'}></div>
                                </div>
                                {
                                    (!checkLogin) ?
                                        <div className={'menu-item'}>
                                            <div className="relative">
                                                <button className={'menu-item-button'}
                                                        onClick={() => setOpenLogin(true)}>
                                                    <p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                             fill="currentColor"
                                                             className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd"
                                                                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                                                            <path fillRule="evenodd"
                                                                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                                                        </svg>
                                                        Login/Register
                                                    </p>
                                                </button>
                                                {openLogin && <LoginComponent onClose={handleCloseLogin}/>}
                                            </div>
                                            <div className={'menu-divider'}></div>
                                        </div>
                                        :
                                        <div className={'logout-item'}>
                                            <div className={'menu-divider'}></div>
                                            <button className={'logout-item-button'}>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                         fill="currentColor"
                                                         className="bi bi-power" viewBox="0 0 16 16">
                                                        <path d="M7.5 1v7h1V1z"/>
                                                        <path
                                                            d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                                                    </svg>
                                                    Logout
                                                </p>
                                            </button>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={"menu-button-container"}>
                            {
                                (!openMenu) ?
                                    <button className={'menu-button'} onClick={() => setOpenMenu(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="33"
                                             height="70"
                                             fill="white"
                                             className="bi bi-chevron-compact-right" viewBox="4 1 16 16">
                                            <path fillRule="evenodd"
                                                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                                        </svg>
                                    </button>
                                    :
                                    <button className={'menu-button'} onClick={() => setOpenMenu(false)}>
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
                            }
                        </div>
                        <FilterComponent></FilterComponent>
                    </div>

                </div>
            </div>
        </APIProvider>
    );
}