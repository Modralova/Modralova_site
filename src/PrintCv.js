import useFilterDirect from "./useFilter";
import { useParams, useHistory } from "react-router-dom"
import Cv from "./Cv";

 const PrintCv = () => {

  const { option } = useParams()

  console.log("option",option)
           
  let CV = useFilterDirect(option)

  if (CV === undefined || Object.keys(CV).length === 0) {    return

  } else {
    
    return (<Cv CV={CV} />)

  }

}

export default PrintCv;






