import store from "./ReduxStore";
import { login, logout } from "./reducers";
import axios from "axios";
import {  useState, useEffect } from "react";
import { useSelector } from "react-redux";


const Logout = () => {


    const SERVER_ADDRESS = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_DEV_SERVER_ADDRESS :
    process.env.REACT_APP_SERVER_ADDRESS;

    const loginState = useSelector(state => state.loginReducer).logged

    const [response, setResponse] = useState();
  
    useEffect(() => {

        if (loginState) {

            axios.defaults.withCredentials = true;
       
            axios.post(SERVER_ADDRESS, { logged: loginState }).then(res => {
      
                setResponse(res.data.logged)
              
            })
        }
    }, [])

    useEffect(() => {

        if (response) {
            store.dispatch(login);
        } else {
            sessionStorage.removeItem("SESS_ID")
            store.dispatch(logout);
        }

    }, [response])


}

export default Logout