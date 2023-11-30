import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import SoundCloudIcon from './SoundCloudIcon';
import useFilterDirect from "./useFilter";

const Recordings = () => {


    let recordings = useFilterDirect("muzyka").recordings;



    let RGB = {
        r: 250,
        g: 250,
        b: 250,
        step: - 1,

        r1: 250,
        g1: 250,
        b1: 250,
        step1: - 3,

    }

    return (<div className="property" id="recordings">

        {recordings.map((r, j) => {

            return (


                <div id={`recordings_obj_${j}`} key={j}

                    style={{ backgroundColor: `rgb(${RGB.r = RGB.r + RGB.step},${RGB.g = RGB.g + RGB.step},${RGB.b = RGB.b + RGB.step},0.5)` }}>

                    {Object.keys(recordings[j]).map((field, k) => {

                        if (Object.keys(recordings[j])[k] !== "performers" && Object.keys(recordings[j])[k] !== "composers") {


                            if (Object.keys(recordings[j])[k] === "links") {


                                return (<div key={k} className="links" >
                                    {/* <p><LinkIcon/></p> */}
                                    <div className="linkList">
                                        <span></span>

                                        {recordings[j].links.map((link, l) => {




                                            // let largest = Math.max(...Object.values(recordings[j].linksAbbr).map(link => {

                                            //     if (link.includes("YouTube" || "Facebook")) {

                                            //         console.info({
                                            //             link: link.replace(/(YouTube|Facebook)/g, ""),
                                            //             length: link.replace(/(YouTube|Facebook)/g, "").length
                                            //         });
                                            //     }
                                            //     return link.replace(/(YouTube|Facebook)/g, "").length
                                            // }))

                                            // const align = (largest, abbr) => {

                                            //     if (abbr.includes("YouTube" || "Facebook")) {
                                            //         abbr = abbr.replace(/(YouTube|Facebook)/g, "")
                                            //         let aligned = largest + 8
                                            //         let diff = aligned - abbr.length

                                            //         for (let i = 0; i < diff; i++) {

                                            //             abbr += "_"
                                            //         }

                                            //         console.info("console: ", {
                                            //             abbr_length: abbr.length,
                                            //             largest: largest,
                                            //             // aligned:aligned,
                                            //             // diff:diff
                                            //         })
                                            //     }
                                            //     return abbr
                                            // }


                                            return (<div key={l} className="linkBox">






                                                <a href={recordings[j].links[l]} target="_blank" rel="noreferrer">

                                                    {!recordings[j].linksAbbr && recordings[j].links[l]}
                                                    {recordings[j].linksAbbr && recordings[j].linksAbbr[l].includes("YouTube") && <YouTubeIcon />}
                                                    {recordings[j].linksAbbr && recordings[j].linksAbbr[l].includes("Facebook") && <FacebookIcon />}
                                                    {recordings[j].linksAbbr && recordings[j].linksAbbr.length !== 0 && recordings[j].linksAbbr[l].replace(/(YouTube|Facebook)/g, "")}
                                                </a>
                                                <br />
                                            </div>)
                                        })
                                        }

                                    </div>
                                </div>
                                )
                            }


                            if (Array.isArray(recordings[j][field]) && Object.keys(recordings[j])[k] !== "links" && Object.keys(recordings[j])[k] !== "linksAbbr") {

                                const A = []

                                let headers = {

                                    performers: ["performers", "wykonawcy:"],
                                    composers: ["composers", "autorzy:"],
                                    links: ["links", "linki"]
                                }

                                if (headers[field] !== undefined) {

                                    A.push(<p key={0} className={headers[field][0]}>{headers[field][1]}</p>)
                                }


                                for (var m = 1; m < recordings[j][field].length + 1; m++) {

                                    A.push(<p key={m} className="item" >{`- ${recordings[j][field][m - 1]}`}</p>)

                                }

                                return <div key={k}>A</div>

                            }

                            if (Object.keys(recordings[j])[k] !== "linksAbbr") {

                                return (<p key={k} id={`recordings_${j}_${field}`}>{recordings[j][field]}</p>



                                )
                            }

                        }

                        return (<div key={k}></div>)


                    })

                    }

                </div>);
        })} </div>



    );
}


// const align = (largest, abbr) => {

//     let aligned = largest + 3

//     for (let i = 0; i < aligned; i++) {

//         abbr += "";
//     }

// }



export default Recordings;