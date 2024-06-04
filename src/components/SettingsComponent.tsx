import {UserDTO} from "../DTOs/UserDTO";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../api/Axios";
import {useParams} from "react-router-dom";
import '../styles/SettingsComponent.css';

interface ModalProps {
    onClose: () => void;
}

function SettingsComponent ({ onClose }: ModalProps){
    const [user, setUser] = useState<UserDTO | null>()
    const {id} = useParams();

    const [openNotification, setOpenNotification] = useState(false);
    const [openChangeLang, setOpenChangeLang] = useState(false);

    const handleShowNotification = () => {
        setOpenNotification(true);
    };

    const handleCloseNotification = () => {
        setOpenNotification(false);
    };

    const handleShowChangeLang = () => {
        setOpenChangeLang(true);
    };

    const handleCloseChangeLang = () => {
        setOpenChangeLang(false);
    };

    // useEffect(() => {
    //     axios
    //         .get(baseURL + 'app_user/' + id)
    //         .then((response) => {
    //             setUser(response.data);
    //             console.log(response);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    return (
        <div className="settings-popup-background">
            <nav className="settings-popup">
                <div className="settings-title">
                    <p className={"settings-text"}>Settings</p>
                    <button className={"exit-button"} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                             className="bi bi-x" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
                <div className={"settings"}>
                    <div className={'settings-item'}>
                        {
                            (!openNotification) ?
                                <div>
                                    <button className={'settings-item-button1'} onClick={handleShowNotification}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            Notification
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'settings-item-button2'} onClick={handleCloseNotification}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="white" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            Notification
                                        </p>
                                    </button>
                                </div>

                        }
                    </div>
                    <div className={'settings-divider'}></div>
                    <div className={'settings-item'}>
                        {
                            (!openChangeLang) ?
                                <div>
                                    <button className={'settings-item-button1'} onClick={handleShowChangeLang}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            </svg>
                                            Change language
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'settings-item-button2'} onClick={handleCloseChangeLang}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="white" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            </svg>
                                            Change language
                                        </p>
                                    </button>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SettingsComponent;