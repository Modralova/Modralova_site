
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = () => {

    const loginState = useSelector(state => state.loginReducer).logged
    const [show, setShow] = useState()

    useEffect(() => {

        setShow(false)

    }, [loginState])

    const hendleleHide = () => {

        setShow(!show)
    }

    return (
        <div className="menuPart">

            <div className="menuBtn">
                {/* <Link to="/"> */}
                <button id="navButton" onClick={hendleleHide}>modralova</button>
                {/* </Link> */}

                {
                    show && <div className="list">
                        <Link onClick={hendleleHide} className="a" to="/"> home </Link>
                        <Link onClick={hendleleHide} className="a" to="/about"> Jan Mędrala to... </Link>
                        <Link onClick={hendleleHide} className="a" to="/recordings"> nagrania </Link>
                        <Link onClick={hendleleHide} className="a" to="/offer"> nastrój się! </Link>
                        <Link onClick={hendleleHide} className="a" to="/kontakt"> kontakt </Link>

                        {loginState && <div className="cvList">
                            <p className="cv">cv</p>

                            <div className="cvLinks">

                                <Link onClick={hendleleHide} className="a" to="/cv/muzyka"> muzyka </Link>
                                <Link onClick={hendleleHide} className="a" to="/cv/informatyka"> informatyka </Link>
                                <Link onClick={hendleleHide} className="a" to="/cv/mechanika"> mechanika </Link>
                                <Link onClick={hendleleHide} className="a" to="/cv/taxi"> taxi </Link>

                            </div>
                        </div>}


                    </div>
                }
            </div>

        </div>

    );
}

export default Navbar;