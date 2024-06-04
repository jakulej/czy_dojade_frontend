import {LoginDTO} from "../DTOs/LoginDTO";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../api/Axios";
import {useParams} from "react-router-dom";
import '../styles/LoginRegisterComponent.css';
import {UserDTO} from "../DTOs/UserDTO";

interface ModalProps {
    onClose: () => void;
}

function LoginRegisterComponent ({ onClose }: ModalProps) {

    // const [login, setLogin] = useState<LoginDTO | null>();
    const [create, setCreate] = useState(false)
    const {id} = useParams();

    const handleShowCreate = () => {
        setCreate(true);
    };

    const handleCloseCreate = () => {
        setCreate(false);
    };

    const [loginForm, setLoginForm] = useState({
        "username": '',
        "password": '',
    });

    const [registerForm, setRegisterForm] = useState({
        "email": '',
        "first_name": '',
        "last_name": '',
        "username": '',
        "password": '',
    });

    const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(
            {
                ...loginForm,
                [event.target.name]: event.target.value
            })
    };

    const inputRegisterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm(
            {
                ...registerForm,
                [event.target.name]: event.target.value
            })
    }

    // useEffect(() => {
    //     axios
    //         .get(baseURL + 'login/' + id)
    //         .then((response) => {
    //             updateDataForm(response.data);
    //             console.log(response);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    const submitLoginHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        //     ... login
    }

    const submitRegisterHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        //     ... login
    }

    let re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailCorrect = re_email.test(registerForm.email);

    let re_password = /.{8,}/;
    const isPasswordCorrect = re_password.test(registerForm.password);

    const buttonEnable = (loginForm.username !== '') && (loginForm.password !== '') && isEmailCorrect;

    return (
        <div>
        {
            (!create) ?
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
                        <div className={"divider"}></div>
                        <div className={"logo"}>
                            <p className={"logo-text"}>
                                Logo
                            </p>
                        </div>
                        <div className={"divider"}></div>
                        <div>
                            <label>Username</label>
                            <input className={"login-input"} type="text" name="email" id="email"
                                   aria-describedby="emailHelp"
                                   value={loginForm.username} onChange={inputLoginHandler}/>
                        </div>
                        {
                            (loginForm.username !== '') ?
                                <p className={"text-danger"}>Email address is not correct!</p>
                                :
                                <p></p>
                        }
                        <div className={"divider"}></div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input className={"login-input"} type="password" name="password" id="password"
                                   value={loginForm.password} onChange={inputLoginHandler}/>
                        </div>
                        <div className={"divider"}></div>
                        <p id={"underline"} className={"help-text"}>Forgot your password?</p>
                        <button className={"login-button"} disabled={!buttonEnable} onClick={submitLoginHandler}>Log
                            In
                        </button>
                        <div className={"help-block"}>
                            <p className={"help-text"}>Don't have an account?</p>
                            <button className={"help-button"} onClick={handleShowCreate}>
                                <p id={"underline"} className={"help-text"}>Create it here!</p>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            :
            <div className="login-popup-background">
                <nav className="login-popup">
                    <div className="login-title">
                        <p className={"login-text"}>Register</p>
                        <button className={"exit-button"} onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                 className="bi bi-x" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                    </div>
                    <div className={"login"}>
                        <div className={"divider"}></div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className={"login-input"} onChange={inputRegisterHandler}
                                   value={registerForm.email}
                                   name="email" id="email"/>
                        </div>
                        {
                            (!isEmailCorrect && (registerForm.email !== '')) ?
                                <p className={"text-danger"}>Email address is not correct!</p>
                                :
                                <p></p>
                        }
                        <div className={"divider"}></div>
                        <div className="mb-3">
                            <label>Username</label>
                            <input className={"login-input"} onChange={inputRegisterHandler}
                                   value={registerForm.username}
                                   name="user_name" id="user_name"/>
                        </div>
                        <div className={"divider"}></div>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input className={"login-input"} onChange={inputRegisterHandler}
                                   value={registerForm.first_name}
                                   name="first_name" id="first_name"/>
                        </div>
                        <div className={"divider"}></div>
                        <div className="mb-3">
                            <label className="form-label">Second Name</label>
                            <input className={"login-input"} onChange={inputRegisterHandler}
                                   value={registerForm.last_name}
                                   name="last_name" id="last_name"/>
                        </div>
                        <div className={"divider"}></div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input className={"login-input"} onChange={inputRegisterHandler}
                                   value={registerForm.password}
                                   name="password1" id="password1"/>
                        </div>
                        <div className={"divider"}></div>
                        <button className={"login-button"} disabled={!buttonEnable}
                                onClick={submitRegisterHandler}>Register
                        </button>
                        <div className={"help-block"}>
                            <p className={"help-text"}>Already have an account?</p>
                            <button className={"help-button"} onClick={handleCloseCreate}>
                                <p id={"underline"} className={"help-text"}>Log in here!</p>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        }
        </div>
    );
}

export default LoginRegisterComponent;