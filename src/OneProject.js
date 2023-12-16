import useHorseView from "./useHorseView";
import { useParams} from "react-router-dom"
import { useSelector } from "react-redux";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';



const datas = require("../src/data/d3a12cf28b54.json")["djbalccfed"]

const Project = () => {


    const { id } = useParams()

    console.log("ID: ",id);

    

    const loginState = useSelector(state => state.loginReducer).logged;

    const projects = JSON.parse(useHorseView()(datas))["projects"]


    const project = projects.find(project => project.id === id)

    if (project === undefined)return


    return (


        <div className="projectContainer">

            <div className="oneProject">

                <div className="timeAndSpace">



                    {project.concertDate && !Array.isArray(project.concertDate) &&


                        <p>{project.concertDate && project.concertDate}, {project.city && project.city},  {project.concertPlace}</p>
                    }


                    {project.recordingSessionDate &&

                        <p>{project.recordingSessionDate}, {project.city && project.city}, {project.concertPlace}</p>
                    }

                </div>

                <div className="projectName">

                    {project.recordingSessionDate &&

                        <p id="sessionHeader">sesja nagraniowa:</p>
                    }

                    <h1 id="projectHeader">{project.project}</h1>

                </div>


                {project.repertoire && project.repertoire.length !== 0 &&

                    <div className="program">

                        {project.recordingSessionDate && <p className="perfoHeader">nagrywane utwory:</p>}
                        {project.concertDate && <p className="perfoHeader">wykonane utwory:</p>}

                        {project.repertoire.map((piece, p) => { return (<p key={p} className="piece"><em className="pieceTitle">{project.repertoire[p]}</em>{"\u00a0"} {project.genetivus && `  ${project.genetivus[p]}`}</p>); })}

                    </div>
                }

                {
                    project.links && project.links.length !== 0 &&

                    <div className="links">

                        <p id="linksHeader">znalezione w sieci:</p>


                        {project.links.map((link, l) => {





                            return (
                                <div key={l} className="link">
                                    <a href={project.links[l]} target="_blank" rel="noreferrer">


                                        {!project.linksAbbr && project.links[l]}
                                        {project.linksAbbr[l].length !== 0 && project.linksAbbr[l].includes("YouTube") && <YouTubeIcon />}
                                        {project.linksAbbr[l].length !== 0 && project.linksAbbr[l].includes("Facebook") && <FacebookIcon />}
                                        {project.linksAbbr && project.linksAbbr.length !== 0 && project.linksAbbr[l].replace(/(YouTube|Facebook)/, "")}
                                    </a>
                                    <br />
                                </div>

                            );
                        })}
                    </div>
                }


                <div className="cast">

                    <p className="castHeader">wystąpili: </p>

                    {project.coPerformer && project.coPerformer.length !== 0 &&


                        project.coPerformer.map((coP, cP) => { return (<p key={cP} className="performer"> - {project.coPerformer[cP]}</p>); })

                    }
                </div>

                {loginState &&
                    <div className="memo">
                        {project.memories && <p><em>{project.memories}</em></p>}
                    </div>
                }

                <div className="end"><p>===</p></div>
            </div>

        </div>




    );


}

export default Project
