
import { useState, useEffect } from "react";
import { Button, Link } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import store from "./ReduxStore";
import { login, logout } from "./reducers";
import cookies from "./cookieParser";
import { useHistory } from "react-router-dom";


const LoginForm = () => {

    const loginState = useSelector(state => state.loginReducer).logged
    const [inputs, setInputs] = useState();
    const [response, setResponse] = useState();
    const history = useHistory();


    const SERVER_ADDRES = process.env.NODE_ENV === "development" ?
        process.env.REACT_APP_DEV_SERVER_ADDRESS :
        process.env.REACT_APP_SERVER_ADDRESS;



    useEffect(() => {

        if (response) {
            store.dispatch(login);
            sessionStorage.setItem("SESS_ID", cookies.PHPSESSID);
            history.push("/");


        } else {
            sessionStorage.removeItem("SESS_ID");
            store.dispatch(logout);

        }

    }, [response]);


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(data => ({ ...data, [name]: value, logged: loginState }));
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.defaults.withCredentials = true;

        axios.post(SERVER_ADDRES, inputs).then(res => {


            setResponse(res.data);
        })

    }

    return (

        <div className="LoginForm">
            <form onSubmit={handleSubmit} >

                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="username">login:</label></th>
                            <td>
                                <input type="text"
                                    id='username'
                                    name="username"

                                    onChange={handleChange}
                                    autoComplete='off'
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="password">hasło:</label></th>
                            <td>
                                <input type="password"
                                    id='password'
                                    name="password"
                                    onChange={handleChange}

                                    autoComplete='off'
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <th><Button id="loginButton" type="submit">Zaloguj</Button> </th>
                        </tr>
                    </tbody>

                </table>

            </form>

        </div>
    );
}

export default LoginForm;