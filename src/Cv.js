import { v4 } from "uuid"
import useHorseView from "./useHorseView";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SoundCloudIcon from "./SoundCloudIcon";
const labels  = require("./data/a12cf2.json")["djbalccfed"]


const Cv = ({ CV }) => {

const headers = JSON.parse(useHorseView()(labels))

    let RGB = {
        r: 250,
        g: 250,
        b: 250,
        step: - 1,

        r1: 250,
        g1: 250,
        b1: 250,
        step1: - 3,

        fSize: 20

    }

    return (<div className="CV">

        {CV &&

            Object.keys(CV).map((property, i) => {

                if (property != "recordings") {

                    return (
                        <div className="property" id={property} key={i}

                            style={{ backgroundColor: `rgb(${RGB.r = RGB.r + RGB.step},${RGB.g = RGB.g + RGB.step},${RGB.b = RGB.b + RGB.step},0.5)` }}>

                            {CV[property].map((r, j) => {

                                return (

                                    <div id={`${property}_obj_${j}`} key={v4()}
                                        style={{ backgroundColor: `rgb(${RGB.r1 = RGB.r1 + RGB.step1},${RGB.g1 = RGB.g1 + RGB.step1 + 2},${RGB.b1 = RGB.b1 + RGB.step1 + 2},0.7)` }}>


                                        {Object.keys(CV[property][j]).map((field, k) => {

                   
                                            { if (Object.keys(CV[property][j])[k] === "linkedin") { return <a key={k} href={CV[property][j]["linkedin"]} rel="noreferrer" target="_blank"><LinkedInIcon /></a> } }
                                            { if (Object.keys(CV[property][j])[k] === "gitHub") { return <a key={k} href={CV[property][j]["gitHub"]} rel="noreferrer" target="_blank"><GitHubIcon /></a> } }
                                            { if (Object.keys(CV[property][j])[k] === "soundCloud") { return <a key={k} href={CV[property][j]["soundCloud"]} rel="noreferrer" target="_blank"><SoundCloudIcon /></a> } }


                                            if (Array.isArray(CV[property][j][field])) {


                                                const A = []


                                                if (headers[field] !== undefined) {



                                                    A.push(<p key={v4()} className={headers[field][0]}>{headers[field][1]}</p>)
                                                }


                                                for (var i = 0; i < CV[property][j][field].length; i++) {

                                                    A.push(<p key={i} className="item" >{`- ${CV[property][j][field][i]}`}</p>)

                                                }

                                                return A

                                            }


                                            return (<p key={k} id={`${property}_${j}_${field}`}>{CV[property][j][field]}</p>)

                                        })

                                        }

                                    </div>);
                            })

                            }

                        </div>);
                }
            })

        }

    </div>);


}

export default Cv;