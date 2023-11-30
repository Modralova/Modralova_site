import { Typography, Paper, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import LogDevice from "./LogDevice";
import LoginForm from "./LoginForm";
import Offer from './Offer';
import Logout from "./Logout";
import NotFound from './NotFound';
import MyProjects from "./MyProjects";
import Project from "./OneProject";
import { login, logout } from "./reducers";
import store from "./ReduxStore";
import cookies from "./cookieParser";
import Foot from "./Foot";
import TwoD from "./TwoD";
import Contact from "./Contact";
import Recordings from "./Recordings";
import PrintCv from "./PrintCv";
//import Curiculum from '../trash/js/Curiculum';



const theme = createTheme({

  palette: {
    background: {
      // paper: "#EB9602",
      paper: "white",
      // default: "#241168 "
    }
  },

  mode: "dark",
  primary: {
    // main: "#3513A1",
    contrastText: "#FFC968"
  }
}


);

function App() {


  if (cookies.PHPSESSID === sessionStorage.getItem("SESS_ID")) {

    store.dispatch(login);

  } else {
    store.dispatch(logout);

  }


  //if (cookies.modralova && cookies.modralova === import.meta.env.REACT_APP_ID) {
  if (cookies.modralova && cookies.modralova === process.env.REACT_APP_ID) {

    sessionStorage.setItem("SESS_ID", cookies.PHPSESSID);
    store.dispatch(login);

  } else {
    sessionStorage.removeItem("SESS_ID")
    store.dispatch(logout);
  }



  return (

    <ThemeProvider theme={theme}>

      {/* <Paper> */}
      <CssBaseline />

      <Router>

        <div className="App">

          <div className="headBox">
            <Navbar />
            <LogDevice />
          </div>


          <div className="mainBox">


            {/* <div className="aside"> </div> */}

            <div className="content"> 

              <Switch>
                <Route exact path="/">
                  {/* <Component /> */}
                  <Home />
                </Route>
                <Route path="/project/:id">
                  <div className="projectContainer">
                    <Project />
                  </div>
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/offer">
                  <Offer />
                </Route>
                <Route path="/login">
                  <LoginForm />
                </Route>
                <Route path="/logout">
                  <Logout />
                </Route>
                <Route path="/cv/:option">
                  {/* <Curiculum /> */}
                  <PrintCv />
                </Route>
                <Route path="/recordings">
                  <Recordings />
                </Route>
                <Route path="/kontakt">
                  <Contact />
                </Route>
                <Route path="/2d">
                  <TwoD />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>

            <div className="timePath">
              <MyProjects />
            </div>

          </div>  {/* mainBox */}

          <div className="footBox">
            <Foot />
          </div>


        </div>   {/* App */}
        {/* </Paper> */}

      </Router>





    </ThemeProvider >




  )


}

export default App;
