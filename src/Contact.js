
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SoundCloudIcon from "./SoundCloudIcon";
import axios from "axios";


const SocialIcon = (name) => {
    if (name === 'linkedin') {
        return <LinkedInIcon />;
    }
    if (name === 'githab') {
        return <GitHubIcon />;
    }
    if (name === 'soundcloud') {
        return <SoundCloudIcon />;
    }
    return false
};


const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const links = await axios.get("/links.json", config).then(res => { return res.data.links })

const links2 = [
    {
        name: 'linkedin',
        url: 'https://onet.pl',
    },
    {
        name: 'githab',
        url: 'https://onet.pl',
    },
    {
        name: 'soundcloud',
        url: 'https://onet.pl',
    },
];

const renderSocials = () => {
    links2.map(item => <a key={item.name} href={item.url} rel="noreferrer" target="_blank">{() => SocialIcon(item.name)}</a>);
};

const Contact = () => {
    return (

        <div className="contact">
            <address>
                <p>jasiekmedrala@modralova.com</p>
            </address>
            {Object.keys(links).map((field, k) => {
                { if (Object.keys(links)[k] === "linkedin") { return <a key={k} href={links["linkedin"]} rel="noreferrer" target="_blank"><LinkedInIcon /></a> } }
                { if (Object.keys(links)[k] === "gitHub") { return <a key={k} href={links["gitHub"]} rel="noreferrer" target="_blank"><GitHubIcon /></a> } }
                { if (Object.keys(links)[k] === "soundCloud") { return <a key={k} href={links["soundCloud"]} rel="noreferrer" target="_blank"><SoundCloudIcon /></a> } }
            })}
            {links2 && renderSocials()}
        </div>


    );
}

export default Contact;