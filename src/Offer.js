
import axios from "axios";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const offer = await axios.get("/text.json", config).then(res => {return res.data.offer})

const Offer = () => {

    return (<div className="offer">

        {offer && <div className="offerText">
            <h1 className="offerTitle">czym mogę służyć</h1>
            <p className="txt">{offer}</p>

        </div>}
    </div>);
}

export default Offer;