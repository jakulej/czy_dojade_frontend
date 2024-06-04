import {UserDTO} from "../DTOs/UserDTO";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../api/Axios";
import {useParams} from "react-router-dom";
import '../styles/ProfileComponent.css';

interface ModalProps {
    onClose: () => void;
}

function ProfileComponent ({ onClose }: ModalProps){
    const [user, setUser] = useState<UserDTO | null>()
    const {id} = useParams();

    const [openFavorite, setOpenFavorite] = useState(false);
    const [openChangePass, setOpenChangePass] = useState(false);
    const [openChangeUser, setOpenChangeUser] = useState(false);
    const [openBuyPrem, setOpenBuyPrem] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleShowFavorite = () => {
        setOpenFavorite(true);
    };

    const handleCloseFavorite = () => {
        setOpenFavorite(false);
    };

    const handleShowChangePass = () => {
        setOpenChangePass(true);
    };

    const handleCloseChangePass = () => {
        setOpenChangePass(false);
    };

    const handleShowChangeUser = () => {
        setOpenChangeUser(true);
    };

    const handleCloseChangeUser = () => {
        setOpenChangeUser(false);
    };

    const handleShowBuyPrem = () => {
        setOpenBuyPrem(true);
    };

    const handleCloseBuyPrem = () => {
        setOpenBuyPrem(false);
    };

    const handleShowDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
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
        <div className="profile-popup-background">
            <nav className="profile-popup">
                <div className="profile-title">
                    <p className={"profile-text"}>Profile</p>
                    <button className={"exit-button"} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                             className="bi bi-x" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
                <div className={"profile"}>
                    <div className={'profile-item'}>
                        {
                            (!openFavorite) ?
                                <div>
                                    <button className={'profile-item-button1'} onClick={handleShowFavorite}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            Set favorites routes
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'profile-item-button2'} onClick={handleCloseFavorite}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="white" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            Set favorites routes
                                        </p>
                                    </button>
                                </div>

                        }
                    </div>
                    <div className={'profile-divider'}></div>
                    <div className={'profile-item'}>
                        {
                            (!openChangePass) ?
                                <div>
                                    <button className={'profile-item-button1'} onClick={handleShowChangePass}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            </svg>
                                            Change password
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'profile-item-button2'} onClick={handleCloseChangePass}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="white" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            </svg>
                                            Change password
                                        </p>
                                    </button>
                                </div>

                        }
                    </div>
                    <div className={'profile-divider'}></div>
                    <div className={'profile-item'}>
                        {
                            (!openChangeUser) ?
                                <div>
                                    <button className={'profile-item-button1'} onClick={handleShowChangeUser}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-person-fill-gear"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                            </svg>
                                            Change username
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'profile-item-button2'} onClick={handleCloseChangeUser}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="white" className="bi bi-person-fill-gear"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                            </svg>
                                            Change username
                                        </p>
                                    </button>
                                </div>

                        }
                    </div>
                    <div className={'profile-divider'}></div>
                    <div className={'profile-item'}>
                        {
                            (!openBuyPrem) ?
                                <div>
                                    <button className={'profile-item-button1'} onClick={handleShowBuyPrem}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                                <path
                                                    d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                                                <path
                                                    d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                                            </svg>
                                            Buy premium
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'profile-item-button2'} onClick={handleCloseBuyPrem}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                                <path
                                                    d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                                                <path
                                                    d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                                            </svg>
                                            Buy premium
                                        </p>
                                    </button>
                                </div>

                        }
                    </div>
                    <div className={'profile-divider'}></div>
                    <div className={'profile-item'}>
                        {
                            (!openDelete) ?
                                <div>
                                    <button className={'profile-delete-button1'} onClick={handleShowDelete}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="red" className="bi bi-person-fill-x"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                                                <path
                                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                                            </svg>
                                            Delete profile
                                        </p>
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className={'profile-delete-button2'} onClick={handleCloseDelete}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16"
                                                 fill="red" className="bi bi-person-fill-x"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                                                <path
                                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                                            </svg>
                                            Delete profile
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

export default ProfileComponent;