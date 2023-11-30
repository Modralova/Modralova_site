import { Link } from "react-router-dom"
import { useSelector } from "react-redux";



const LogDevice = () => {

  const loginState = useSelector(state => state.loginReducer).logged;

  return (<div className="loginPart">

{loginState &&

   <div className="login">
      
      {!loginState  &&
        <Link to="/login">
          <button id="loginBtn">login</button>
        </Link>}
      {loginState && 
        <Link to="/logout">
          <button id="loginBtn">logout</button>
        </Link>}
    </div>}
  </div>
  );
}

export default LogDevice;