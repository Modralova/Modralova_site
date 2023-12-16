import useHorseView from "./useHorseView";
import { Link } from "react-router-dom"
import { Paper } from "@mui/material";

const datas = require("../src/data/d3a12cf28b54.json")["djbalccfed"]


const MyProjects = () => {

  const data = JSON.parse(useHorseView()(datas))["projects"]

  return (

    <div className="projects">

      <div className="titleStrip">
        <p className="projectsTitle">eventy:</p>
      </div>

      <div className="projList">

        {data && data.map((one, i) => {

          return (
            <Paper key={one.id} id={`project.${i}`} elevation={24}>


              <Link to={`/${one.id}`} 
     
               
            
              
              
              >

                {Array.isArray(one.city) &&

                  one.concertDate.map((date, i) => {

                    return (<div className="ArrItem" key={`${one.id}${i}`} >
                      <p className="TaS">{one.city[i]}, {one.concertDate[i]}</p>
                      <p className="TaS">{one.concertPlace[i]}</p>
                    </div>
                    );

                  }
                  )}


                {one.concertDate && !Array.isArray(one.concertDate) &&
                  <div className="TaS">

                    <p >{one.city && one.city}, {one.concertDate && one.concertDate}</p>
                    <p>{one.concertPlace}</p>
                  </div>
                }


                {one.recordingSessionDate &&
                  <div className="TaS">

                    <p>{one.city && one.city}, {one.recordingSessionDate}</p>
                    <p>{one.concertPlace}</p>
                    <p>sesja nagraniowa: </p>

                  </div>
                }
                <p className="theProject">{one.project}</p>
              </Link>


            </Paper>
          );
        })
        }

      </div>

    </div>

  );
}

export default MyProjects;