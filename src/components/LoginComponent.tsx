import {LoginDTO} from "../DTOs/LoginDTO";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../api/Axios";
import {useParams} from "react-router-dom";
import '../styles/LoginComponent.css';

interface ModalProps {
    onClose: () => void;
}

function LoginComponent ({ onClose }: ModalProps){

    // const [login, setLogin] = useState<LoginDTO | null>();
    const {id} = useParams();

    const initialDataForm = Object.freeze({
        email: '',
        password: '',
    });
    const [dataForm, updateDataForm] = useState(initialDataForm);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDataForm(
            {
                ...dataForm,
                [event.target.name]:event.target.value
            }
        )
    };

    // useEffect(() => {
    //     axios
    //         .get(baseURL + 'login/' + id)
    //         .then((response) => {
    //             updateDataForm(response.data);
    //             console.log(response);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
    //     ... login
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailCorrect = re.test(dataForm.email);

    const buttonEnable = (dataForm.email!=='') && (dataForm.password!=='') && isEmailCorrect;

    return (
        <div className="login-popup-background">
            <nav className="login-popup">
                <div className="login-title">
                    <p className={"login-text"}>Login</p>
                    <button className={"exit-button"} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                             className="bi bi-x" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
                <div className={"login"}>
                    <div className={"logo-divider"}></div>
                    <div className={"logo"}>
                        <p className={"logo-text"}>
                            Logo
                        </p>
                    </div>
                    <div className={"logo-divider"}></div>
                    <div>
                        {/*<label htmlFor="email">Email</label>*/}
                        <input className={"login-input"} type="text" name="email" id="email"
                               aria-describedby="emailHelp"
                               value={dataForm.email} onChange={inputHandler}/>
                    </div>
                    {
                        (!isEmailCorrect && (dataForm.email !== '')) ?
                            <p className={"text-danger"}>Email address is not correct!</p>
                            :
                            <p></p>
                    }
                    <div className={"logo-divider"}></div>
                    <div className="mb-3">
                        {/*<label htmlFor="password">Password</label>*/}
                        <input className={"login-input"} type="password" name="password" id="password"
                               value={dataForm.password} onChange={inputHandler}/>
                    </div>
                    <div className={"logo-divider"}></div>
                    <p id={"underline"} className={"help-text"}>Forgot your password?</p>
                    <button className={"login-button"} disabled={!buttonEnable} onClick={submitHandler}>Log In</button>
                    <div className={"help-block"}>
                        <p className={"help-text"}>Don't have an account?</p>
                        <p id={"underline"} className={"help-text"}>Create it here!</p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default LoginComponent;