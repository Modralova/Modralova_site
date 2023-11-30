//import { Container } from "@mui/material";

import axios from "axios";

//import { hyphenate } from "hyphen/en";


const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const about = await axios.get("/about.json", config).then(res => { return res.data.about.bio })



    






const About = () => (
    <div  className="about">
    {about ? (
        <div  className="aboutText">
            <h1 className="aboutTitle">...to teraz coś o mnie</h1>
            <p  className="txt">{about}</p>
        </div>
    ) : null}
    </div>
);

export default About;